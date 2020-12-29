import React, { useState, useEffect } from 'react';
import '../css/PrintingPage.css';
import { storage } from './firebase';
import { motion, AnimatePresence } from 'framer-motion';

const PrintingPage = () => {
  const storageRef = storage.ref();
  const [imagePromise, setimagePromise] = useState([]);

  useEffect(() => {
    storageRef
      .child('images/')
      .listAll()
      .then((res) => {
        res.items.map(function (image) {
          image
            .getDownloadURL()
            .then((url) =>
              setimagePromise((oldPromise) => [...oldPromise, url])
            );
        });
      });
  }, []);

  return (
    <div className='PrintingPage'>
      <section className='PrintingPage__main'>
        <video muted autoPlay loop>
          <source src='' />
        </video>
      </section>
      <h1>Galerija</h1>
      <section className='PrintingPage__gallery'>
        {imagePromise ? (
          imagePromise.map((image, id) => (
            <img className='gallery__image' key={id} alt='' src={image} />
          ))
        ) : (
          <h2>Loading</h2>
        )}
      </section>
    </div>
  );
};

export default PrintingPage;
