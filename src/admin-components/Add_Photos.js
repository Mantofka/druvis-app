import React, { useState, useRef, useEffect } from "react";
import { storage } from "../components/firebase";
import { AnimatePresence } from "framer-motion";

//Reusable component
import { AddToQuene } from "../reusable-functions/AddToQuene";

// Reusable functions.
import { handleAlert } from "../reusable-functions/DispatchAlert";

// Components.
import SubSection from "./SubSection";
// Styles
import {
  Modal,
  Container,
  Selection,
  Label,
  FileButton,
  ButtonContainer,
  Button,
  SourceContainer,
  Image,
  Video,
  DeleteIcon,
} from "../styled-components/repetitive/AdministrationWindow";

// Reducer.
import { useStateValue } from "../StateProvider";

// Material UI.
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

// Reducer actions.
import { CHANGE_PHOTO_MODAL, CHANGE_IS_UPLOADING } from "../actions";

// Administration Variants.
import {
  SourceVariants,
  ModalVariants,
} from "../framer-animation/administration/administrationModal";

const SelectionStyle = {
  outline: "none",
  border: "1px solid #d9cbcb",
  height: "30px",
  backgroundColor: "transparent",
  borderRadius: "4px",
  WebkitBorderRadius: "4px",
  MozBorderRadius: "4px",
  marginBottom: "15px",
};

function Add_Photos() {
  const [{ isModalAddPhotosOpened }, dispatch] = useStateValue();
  const [section, setSection] = useState("uav-images/");
  const [subSection, setSubSection] = useState("drones/");
  const [source, setSource] = useState([]);
  const [previewURL, setPreviewURL] = useState([]);
  const oldFileButton = useRef(null);

  useEffect(() => {
    switch (section) {
      case "uav-images/":
        setSubSection("drones/");
        break;
      case "engineering-images/":
        setSubSection("cnc-tools/");
        break;
      case "modelling-images/":
        setSubSection("toys/");
        break;
      case "printing-images/":
        setSubSection("printing-images/");
        break;
    }
  }, [section]);

  const handlePhoto = (e) => {
    try {
      Object.keys(e.target.files).map((i) => {
        if (
          e.target.files[i] &&
          (e.target.files[i].type.includes("image") ||
            e.target.files[i].type.includes("video"))
        ) {
          let file = e.target.files[i];
          console.log(e.target.files[i]);
          setPreviewURL((prevState) => [
            ...prevState,
            { url: URL.createObjectURL(file), type: file.type },
          ]);
          setSource((prevState) => [...prevState, file]);
        } else {
          handleAlert(
            "ERROR",
            "Galite įkelti tik nuotraukas arba vaizdo įrašus.",
            dispatch
          );
        }
      });
    } catch (error) {
      handleAlert(
        "ERROR",
        "Įvyko klaida. Prašome bandyti dar kartą.",
        dispatch
      );
    }
  };

  const handleUpload = () => {
    if (source.length) {
      // Checking if there are any photos
      source.map((file) => {
        // Checking if it needs to add subSection (because PrintingPage doesn't have one)
        let path =
          section.includes("engineering-images") ||
          section.includes("modelling-images") ||
          section.includes("uav-images")
            ? `${section}${subSection}`
            : `${section}`;
        const task = storage.ref(`sections/${path}${file.name}`).put(file);
        console.log(path);
        task.on(
          "state_changed", // When state is changed do (properties): 1) next, 2) onError, 3) onComplete
          null,
          (err) => {},
          () => {
            let quenePayload = {
              section,
              subSection,
              name: file.name,
              type: file.type,
              startingDest: `minimized/${path}`,
              overallLength: source.length,
            };
            setPreviewURL([]);
            AddToQuene(dispatch, quenePayload);
          }
        );
      });
    }
  };

  const changeModal = () => {
    dispatch({
      type: CHANGE_PHOTO_MODAL,
    });
  };

  const uploadPhotos = (e) => {
    e.preventDefault();

    if (source.length) {
      handleUpload();
      setSource([]);
      dispatch({
        type: CHANGE_IS_UPLOADING,
        payload: true,
      });
      changeModal();
    }
  };

  const deleteImage = (badImage) => {
    setPreviewURL((prevState) =>
      prevState.filter((image) => {
        return image !== badImage;
      })
    );
    setSource((prevState) =>
      prevState.filter((image, i) => {
        return i !== previewURL.indexOf(badImage);
      })
    );
  };

  const openFileUpload = (e) => {
    e.preventDefault();
    oldFileButton.current.click();
  };

  return (
    <AnimatePresence>
      <Modal
        variants={ModalVariants}
        initial='hidden'
        animate={isModalAddPhotosOpened ? "visible" : "hidden"}
        exit='hidden'
      >
        <form>
          <Container>
            <Label>Skiltis</Label>
            <Selection
              name='Skiltys'
              onChange={(e) => setSection(e.target.value)}
            >
              <option value='uav-images/'>Bepiločiai</option>
              <option value='printing-images/'>3D spausdinimas</option>
              <option value='engineering-images/'>
                Elektronikos inžinerija
              </option>
              <option value='modelling-images/'>Modeliavimas</option>
            </Selection>
            {!section.includes("printing-images/") && <Label>Poskiltis</Label>}
            {!section.includes("printing-images") && (
              <SubSection
                section={section}
                setSubSection={setSubSection}
                styles={SelectionStyle}
              />
            )}
            <Label>Prisegti</Label>
            <FileButton
              onClick={(e) => openFileUpload(e)}
              style={{
                border:
                  source.length == 0
                    ? "dashed 2px #D9CBCB"
                    : "dashed 2px #0081A7",
              }}
            >
              Pasirinkta: {source.length}
            </FileButton>
            <input
              type='file'
              style={{ display: "none" }}
              ref={oldFileButton}
              multiple='multiple'
              onChange={handlePhoto}
            ></input>
          </Container>
          <AnimatePresence exitBeforeEnter>
            {previewURL.length > 0 && (
              <SourceContainer
                key='sourceContainer'
                variants={SourceVariants}
                initial='hidden'
                animate={previewURL.length > 0 ? "visible" : "hidden"}
                exit='hidden'
              >
                {previewURL.map((image, i) => (
                  <div style={{ position: "relative" }} key={i}>
                    {image.type.startsWith("image") ? (
                      <Image alt='' key={image.url} src={image.url} />
                    ) : (
                      <Video alt='' key={image.url} src={image.url} />
                    )}
                    <DeleteIcon>
                      <DeleteForeverIcon onClick={() => deleteImage(image)} />
                    </DeleteIcon>
                  </div>
                ))}
              </SourceContainer>
            )}
          </AnimatePresence>
          <ButtonContainer>
            {/* Cancel button*/}
            <Button
              inputColor='#C6CBCB'
              bgColor='#F07167'
              whileHover={{
                backgroundColor: "#F35144",
                transition: { duration: 0.2, type: "tween" },
              }}
              onClick={changeModal}
            >
              Atšaukti
            </Button>
            {/* Create button*/}
            <Button
              inputColor='#C6CBCB'
              bgColor='#0081A7'
              disabled={source.length ? false : true}
              style={{ opacity: source.length ? 1 : 0.2 }}
              whileHover={{
                scale: source.length ? 1.03 : 1,
                transition: { duration: 0.2, type: "tween" },
              }}
              whileTap={{
                scale: source.length ? 0.96 : 1,
                transition: { duration: 0.2, type: "tween" },
              }}
              type='submit'
              onClick={uploadPhotos}
            >
              Sukurti
            </Button>
          </ButtonContainer>
        </form>
      </Modal>
    </AnimatePresence>
  );
}

export default Add_Photos;
