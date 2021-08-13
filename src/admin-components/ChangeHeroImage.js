import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { storage } from "../components/firebase";
import { AnimatePresence } from "framer-motion";

import { useStateValue } from "../StateProvider";

// Components.
import ModalButton from "./ModalButton";

// Reusable functions.
import { handleAlert } from "../reusable-functions/DispatchAlert";

// Styles.
import {
  Modal,
  Container,
  Selection,
  Label,
  FileButton,
  SourceContainer,
  Image,
  DeleteIcon,
} from "../styled-components/repetitive/AdministrationWindow";

// Reducer actions.
import { CHANGE_HERO_MODAL } from "../actions";

// Administration Variants.
import {
  SourceVariants,
  ModalVariants,
} from "../framer-animation/administration/administrationModal";

import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const CurrentUploaded = styled.div``;

function ChangeHeroImage() {
  const [{ isChangeHeroModalOpened }, dispatch] = useStateValue();
  const [section, setSection] = useState("uavHero");
  const [source, setSource] = useState(null);
  const [previewURL, setPreviewURL] = useState([]);
  const [fetchedHeroImages, setFetchedHeroImages] = useState([]);
  const [currentHeroImage, setCurrentHeroImage] = useState("");
  const oldFileButton = useRef(null);
  const smallHeroImagesRef = "minimized/HeroImages/Smallest";

  useEffect(() => {
    storage
      .ref(smallHeroImagesRef)
      .listAll()
      .then((res) =>
        res.items.map((image) => {
          image
            .getDownloadURL()
            .then((url) =>
              setFetchedHeroImages((prevState) => [
                ...prevState,
                { imageURL: url, imageName: image.name },
              ])
            );
        })
      );
  }, []);

  useEffect(() => {
    setCurrentHeroImage((prevState) => [""]);
    fetchedHeroImages.map((image) => {
      image.imageName.includes(section) && setCurrentHeroImage(image.imageURL);
    });
  }, [section, fetchedHeroImages]);

  const handlePhoto = (e) => {
    if (e.target.files[0] && e.target.files[0].type.includes("image")) {
      let file = e.target.files[0];
      let newFile = new File([file], `${section}`, {
        type: file.type,
        lastModified: file.lastModified,
      });
      setPreviewURL((prevState) => [
        { url: URL.createObjectURL(file), type: file.type },
      ]);
      setSource((prevState) => newFile);
    } else {
      handleAlert("ERROR", "Galite kelti tik nuotraukas.", dispatch);
    }
  };

  const handleUpload = () => {
    const task = storage.ref(`HeroImages/${section}`).put(source); // Getting the storage reference and putting file to exact location.
    console.log(task);
    fetchedHeroImages.map((image) => {
      if (image.imageName.includes(section)) {
        let deleteURL = storage.refFromURL(image.imageURL);
        deleteURL.delete().catch((err) => {
          handleAlert(
            "ERROR",
            "Įvyko klaida ištrinant senąją puslapio nuotrauką.",
            dispatch
          );
        });
      }
    });
    task.on(
      "state_changed", // When state is changed do (properties): 1) next, 2) onError, 3) onComplete
      null,
      (err) => {
        handleAlert("ERROR", "Įvyko klaida. Bandykite dar kartą.", dispatch);
      },
      () => {
        handleAlert(
          "SUCCESS",
          "Puslapio nuotrauka sėkmingai įkelta.",
          dispatch
        );
        setSource(null);
        setPreviewURL([]);
        changeModal();
      }
    );
  };

  const changeModal = () => {
    dispatch({
      type: CHANGE_HERO_MODAL,
    });
  };

  const uploadPhotos = (e) => {
    e.preventDefault();

    if (source != null) {
      handleUpload();
      setSource(null);
    } else {
      handleAlert("ERROR", "Pasirinkite nuotrauką.", dispatch);
    }
  };

  const deleteImage = () => {
    setPreviewURL((prevState) => []);
    setSource((prevState) => []);
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
        animate={isChangeHeroModalOpened ? "visible" : "hidden"}
        exit='hidden'
      >
        <form>
          <Container>
            <Label>Skiltis, kurioje norite pakeisti</Label>
            <Selection
              name='Skiltys'
              onChange={(e) => setSection(e.target.value)}
            >
              <option value='uavHero'>Bepiločiai</option>
              <option value='printingHero'>3D spausdinimas</option>
              <option value='engineeringHero'>Elektronikos inžinerija</option>
              <option value='modellingHero'>Modeliavimas</option>
            </Selection>
            <Label>
              Šiuo metu esanti nuotrauka:
              <CurrentUploaded>
                {currentHeroImage != "" ? (
                  <Image alt='' src={currentHeroImage} />
                ) : (
                  <span
                    style={{
                      fontSize: "10px",
                      color: "#403A3A",
                      padding: "2px",
                    }}
                  >
                    Šioje skiltyje nėra pridėtos nuotraukos
                  </span>
                )}
              </CurrentUploaded>
            </Label>
            <Label>Prisegti nuotrauką</Label>
            <FileButton
              onClick={(e) => openFileUpload(e)}
              style={{
                border:
                  source != null ? "dashed 2px pink" : "dashed 2px #3c6b51",
              }}
            >
              Pasirinkimas
            </FileButton>
            <input
              type='file'
              style={{ display: "none" }}
              ref={oldFileButton}
              onChange={handlePhoto}
            ></input>
          </Container>
          <AnimatePresence>
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
                    <Image alt='' key={image.url} src={image.url} />
                    <DeleteIcon>
                      <DeleteForeverIcon onClick={() => deleteImage()} />
                    </DeleteIcon>
                  </div>
                ))}
              </SourceContainer>
            )}
          </AnimatePresence>
          <ModalButton
            source={previewURL}
            cancelFn={changeModal}
            submitFn={uploadPhotos}
          >
            {currentHeroImage != "" ? (
              <span>Pakeisti</span>
            ) : (
              <span>Pridėti</span>
            )}
          </ModalButton>
        </form>
      </Modal>
    </AnimatePresence>
  );
}

export default ChangeHeroImage;
