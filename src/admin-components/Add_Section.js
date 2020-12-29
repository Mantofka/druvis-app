import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { storage } from '../components//firebase';
import {motion} from 'framer-motion';

import { useStateValue } from '../StateProvider';

const FitScreen = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(75, 75, 75, 0.85);
  z-index: 1;
`;

const Modal = styled.div`
  position: absolute;
  background-color: #4c956c;
  color: black;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  z-index: 10;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px 20px;
`;

const Input = styled.input`
  outline: none;
  border: none;
  height: 25px;
  background-color: #66af86;
  margin-bottom: 15px;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
`;

const Select = styled.select`
  outline: none;
  border: none;
  height: 20px;
  background-color: #66af86;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  margin-bottom: 15px;
`;

const Label = styled.label`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,500;1,600&family=Montserrat:ital,wght@0,600;0,700;1,400&display=swap');
  font-size: 12px;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  color: #1a1c1b;
  margin-bottom: 5px;
`;

const File = styled.input``;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const CancelButton = styled.button`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,500;1,600&family=Montserrat:ital,wght@0,600;0,700;1,400&display=swap');
  height: 30px;
  width: 80px;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  outline: none;
  border: none;
  margin-right: 15px;
  font-size: 12px;
  font-weight: 600;
  background-color: transparent;
`;

const CreateButton = styled.button`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,500;1,600&family=Montserrat:ital,wght@0,600;0,700;1,400&display=swap');
  height: 30px;
  width: 80px;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  outline: none;
  border: none;
  margin-right: 15px;
  font-size: 12px;
  font-weight: 600;
  color: white;
  background-color: #353232;
`;

function Add_Section() {
  const [{ isModalOpened }, dispatch] = useStateValue();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [section, setSection] = useState('uav-images');
  const [image, setImage] = useState(null);

  const handlePhoto = (e) => {
    if (e.target.files[0] && e.target.files[0].type.includes('image')) {
      setImage(e.target.files[0]); // Declaring the file to the useState.
    } else {
      alert(
        'Whoops! Something went wrong, check if you are uploading an image file'
      );
    }
  };

  const handleUpload = () => {
    if (image) {
      // if there is an image inside state, do below
      const storageRef = storage.ref();
      const task = storage.ref(`sections/${section}/${image.name}`).put(image); // Getting the storage reference and putting file to exact location.
      console.log(task);
      task.on(
        'state_changed', // When state is changed do (properties): 1) next, 2) onError, 3) onComplete
        null,
        (err) => {
          console.log('Something went wrong!');
        },
        () => {
          alert('Uploaded successfully!');
          setImage(null);
          storageRef
            .child('images/')
            .listAll()
            .then((res) => {
              res.items.forEach(function (image) {
                console.log('Image reference: ', image.toString());
              });
            });
        }
      );
    }
  };

  const changeModal = () => {
    dispatch({
      type: 'CHANGE_MODAL_STATE',
    });
  };

  const createPost = async (e) => {
    e.preventDefault();
    console.log(section);

    if(image){
      handleUpload();
    }

    let params = {
      title: title,
      description: desc,
      section: section,
    };

    setTitle('');
    setDesc('');
    setSection('uav-images');
    setImage(null);
    changeModal();

    try {
      await axios.post('http://localhost:5000/posts', params);
    } catch (error) {
      console.log('Whoops, something went wrong.', error.message);
    }
  };

  return (
    <FitScreen>
      <Modal>
        <form>
          <Container>
            <Label>Pavadinimas</Label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type='text'
            ></Input>

            <Label>Aprašymas</Label>
            <Input
              value={desc}
              type='text'
              onChange={(e) => setDesc(e.target.value)}
            ></Input>
            <Label>Skiltis</Label>
            <Select name='Skiltys' onChange={(e) => setSection(e.target.value)}>
              <option value='uav-images'>Bepiločiai</option>
              <option value='printing-images'>3D spausdinimas</option>
              <option value='woodworking-images'>Medžio dirbiniai</option>
            </Select>
            <Label>Prisegti</Label>
            <File type='file' onChange={handlePhoto}></File>
          </Container>
          <ButtonContainer>
            <CancelButton onClick={changeModal}>Atšaukti</CancelButton>
            <CreateButton type='submit' onClick={createPost}>
              Sukurti
            </CreateButton>
          </ButtonContainer>
        </form>
      </Modal>
    </FitScreen>
  );
}

export default Add_Section;
