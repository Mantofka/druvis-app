import React, { useState, useEffect, useRef, Suspense } from 'react';
import '../css/Home.css';
import { motion, useViewportScroll } from 'framer-motion';
import UpArrow from './UpArrow';

// Sections
import HeroSection from './HeroSection';
import SectionList from './SectionList';

// Footer
import Footer from './Footer';

import TopicsList from './TopicsList';

// Variants.
import { arrowVariants } from '../framer-animation/HomeVariants';

function Home() {
  const [scrollYPos, setScrollYPos] = useState(0);

  // References to sections

  const uavRef = useRef(null);
  const printingRef = useRef(null);
  const engineeringRef = useRef(null);
  const modelingRef = useRef(null);

  // Function which gets current scroll Y position.

  const scrollPosition = () => {
    setScrollYPos(window.scrollY);
  };

  const y = useViewportScroll(0); // Declaring variable which holds current Viewport data.

  useEffect(() => {
    window.addEventListener('scroll', scrollPosition);
    return function cleanup() {
      window.removeEventListener('scroll', scrollPosition);
    };
  }, []);

  // Function that gets user to the page top.
  const bringUp = () => {
    window.scrollTo(0, 0, { behavior: 'smooth' });
  };

  return (
    <div className='home'>
      <motion.div
        variants={arrowVariants}
        initial='closed'
        animate={scrollYPos > 500 ? 'open' : 'closed'}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.85 }}
        className='upArrow__Button'
        onClick={bringUp}
      >
        <UpArrow />
      </motion.div>

      {/* Hero section */}
      <HeroSection
        title={`Mokinių, besidominančių technine kūryba, projektiniai darbai, idėjos.`}
        subText={`Mokiniai, kurie mėgsta kurti, konstruoti, projektuoti ir gaminti įvairiausius gaminius, modelius ar prototipus, pristato savo projektinius darbus.`}
      >
        {/* Section with the topics*/}
        <TopicsList
          printingRef={printingRef}
          uavRef={uavRef}
          engineeringRef={engineeringRef}
          modelingRef={modelingRef}
        />
      </HeroSection>

      <Suspense fallback={<div>Kraunamas puslapis...</div>}>
        <SectionList printingRef={printingRef} uavRef={uavRef} engineeringRef={engineeringRef} modelingResf={modelingRef} />
        {/* One of the topics - Printing */}
        {/*<Section
          bigText={`3D spausdinimas`}
          subText={`Susipažinę su techniniu modeliavimu, TinkerCAD ir Fusion 360 programose atlieka įvairius projektinius darbus. Gamina modelius, maketus ar detalių prototipus.`}
          secRef={printingRef}
          reference={'3d-printing'}
        />*/}

        {/* One of the topics - UAV */}
        {/*<Section
          bigText={`Bepiločiai`}
          subText={`Mokinių kūrybinėse dirbtuvėse sumodeliuoti, sukonstruoti ir pagaminti bepiločiai orlaiviai. Jų valdymas atliekamas stimuliatoriuje, eksperimentuojant ir testuojant modelius.`}
          secRef={uavRef}
          reference={'uav'}
          video={window.innerWidth > 840 ? uavVideo : uavVideo_min}
        />*/}

        {/* One of the topics - Engineering solutions */}
        {/*<Section
          bigText={`Elektronikos inžinerija`}
          subText={`Mokinių projektiniai darbai atlikti naudojant elektronikos įtaisus ar integruotąsias elektronines sistemas, integrinių grandynų lustus, valdiklius ir kitus elektroninius įtaisus. Taip atlikdami įvairias užduotis gerina elektronikos žinias.`}
          secRef={engineeringRef}
          reference={'engineering'}
          video={
            window.innerWidth > 840 ? mechatronicsVideo : mechatronicsVideo_min
          }
        />*/}

        {/* One of the topics - Modeliavimas */}
        {/*<Section
          bigText={`Modeliavimas`}
          subText={`Mokiniai susipažinę su įvairiomis medžiagomis, išmoksta elementarių, bet nuosekliai sudėtingėjančių medžiagų rankinio apdorojimo būdų, atlieka konstravimo ir modeliavimo darbus. Mokinasi gaminti techninius žaislus, laivų ir lėktuvėlių modelius.`}
          secRef={modelingRef}
          reference={'modelling'}
          video={window.innerWidth > 840 ? laserVideo : laserVideo_min}
        />*/}
      </Suspense>
      <Footer />
    </div>
  );
}

export default Home;
