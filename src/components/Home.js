import React, { useState, useEffect, useRef } from 'react';
import '../css/Home.css';
import { storage } from './firebase';
import { motion, useViewportScroll } from 'framer-motion';
import UpArrow from './UpArrow';

// Sections
import HeroSection from './HeroSection';
import TopicsList from './TopicsList';
import Section from './Section';

// Footer
import Footer from './Footer';

function Home() {
  const [scrollYPos, setScrollYPos] = useState(0);

  const uavRef = useRef();
  const printingRef = useRef();
  const woodWorkingRef = useRef();
  const galleryRef = useRef();

  // Arrow Variant

  const arrowVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: 'tween',
      },
    },
    closed: {
      x: '20vw',
      opacity: 0,
      transition: {
        duration: 0.5,
        type: 'tween',
      },
    },
  };

  // Function which gets current scroll Y position.

  const scrollPosition = () => {
    setScrollYPos(window.scrollY);
  };

  const y = useViewportScroll(0); // Declaring variable which holds current Viewport data.

  // Works only when scrollYPos is changed.
  useEffect(() => {
    window.addEventListener('scroll', () => scrollPosition());
    window.removeEventListener('scroll', () => scrollPosition());
  }, [scrollYPos]);

  // Function that gets user to the page top.
  const bringUp = () => {
    window.scrollTo(0, 0);
  };

  /*
  const [image, setimage] = useState(null); // Giving a file temporary storage.
  const handleChange = (e) => {
    if (e.target.files[0] && e.target.files[0].type.includes('image')) {
      setimage(e.target.files[0]); // Declaring the file to the useState.
    } else {
      alert(
        'Whoops! Something went wrong, check if you are uploading an image file'
      );
    }
  };

  // Uploading files to Firebase Storage
  const handleUpload = () => {
    if (image) {
      // if there is an image inside state, do below
      const storageRef = storage.ref();
      const task = storage.ref(`images/${image.name}`).put(image); // Getting the storage reference and putting file to exact location.
      task.on(
        'state_changed', // When state is changed do (properties): 1) next, 2) onError, 3) onComplete
        null,
        (err) => {
          console.log('Something went wrong!');
        },
        () => {
          alert('Uploaded successfully!');
          setimage(null);
          storageRef
            .child('images/')
            .listAll()
            .then((res) => {
              console.log(res.items.length);
              res.items.forEach(function (image) {
                console.log('Image reference: ', image.toString());
              });
            });
        }
      );
    }
  };
*/

  return (
    <div className='home'>
      <motion.div
        variants={arrowVariants}
        initial='closed'
        animate={y.scrollY.current > 500 ? 'open' : 'closed'}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.85 }}
        className='upArrow__Button'
        onClick={bringUp}
      >
        <UpArrow />
      </motion.div>

      {/* Hero section */}
      <HeroSection
        title={`Sukurta idėjoms skleisti`}
        subText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
      />

      {/* Section with the topics*/}
      <TopicsList
        printingRef={printingRef}
        uavRef={uavRef}
        woodWorkingRef={woodWorkingRef}
      />

      {/* One of the topics - UAV */}
      <Section
        bigText={`Bepiločiai`}
        subText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.`}
        secRef={uavRef}
      />

      {/* One of the topics - Printing */}
      <Section
        bigText={`3D spausdinimas`}
        subText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud.`}
        secRef={printingRef}
      />

      {/* One of the topics - Woodworking */}
      <Section
        bigText={`Medžių dirbiniai`}
        subText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud.`}
        secRef={woodWorkingRef}
      />
      <Footer />

      {/*<input type='file' onChange={handleChange}></input>
      <button onClick={handleUpload}>Upload</button>*/}
    </div>
  );
}

export default Home;