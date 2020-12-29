import React, { useState, useEffect } from 'react';
import { storage } from './firebase';
import '../css/UavPage.css';
import { motion } from 'framer-motion';

const UavPage = () => {
  const storageRef = storage.ref();
  const [imagesPromise, setImagesPromise] = useState([]);

  useEffect(() => {
    storageRef
      .child('thumbs/')
      .listAll()
      .then((res) => {
        res.items.map(function (image) {
          image
            .getDownloadURL()
            .then((url) =>
              setImagesPromise((oldPromise) => [...oldPromise, url])
            );
        });
      });
  }, []);

  return (
    <div className='UavPage'>
      <section className='UavPage__main'>
        <img
          alt=''
          src='https://firebasestorage.googleapis.com/v0/b/druvis-app.appspot.com/o/Images%2FDubysaGO_2.jpg?alt=media&token=3b7997d4-08dc-4843-9c86-f614017c15d9'
        />
        <div className='main__Headline'>
          <h1>Bepiločiai orlaiviai</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
        </div>
      </section>

      <h1>Galerija</h1>
      <section className='UavPage__gallery'>
        {imagesPromise ? (
          imagesPromise.map((image, id) => (
            <img className='gallery__image' key={id} alt='' src={image} />
          ))
        ) : (
          <h2>Loading</h2>
        )}
      </section>
      <button onClick={() => console.log(imagesPromise)}>On</button>
    </div>
  );
};

export default UavPage;
