import React, { useState, useEffect, useRef, Suspense } from "react";
import "../css/Home.css";
import { motion, useViewportScroll } from "framer-motion";
import UpArrow from "./UpArrow";

// Sections
import HeroSection from "./HeroSection";
import SectionList from "./SectionList";

// Footer
import Footer from "./Footer";

import TopicsList from "./TopicsList";

import { useStateValue } from "../StateProvider";

// Reusable functions.
import { fetchSectionVideos } from "../reusable-functions/videos";

// Variants.
import { arrowVariants } from "../framer-animation/variants/Home";

function Home() {
  const [scrollYPos, setScrollYPos] = useState(0);
  const [{ sectionVideos }, dispatch] = useStateValue();

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
    window.addEventListener("scroll", scrollPosition);
    return function cleanup() {
      window.removeEventListener("scroll", scrollPosition);
    };
  }, []);

  useEffect(() => {
    fetchSectionVideos(dispatch, sectionVideos);
  }, []);

  // Function that gets user to the page top.
  const bringUp = () => {
    window.scrollTo(0, 0, { behavior: "smooth" });
  };

  return (
    <div className='home'>
      <motion.div
        variants={arrowVariants}
        initial='closed'
        animate={scrollYPos > 500 ? "open" : "closed"}
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
        <SectionList // Components, which renders all sections.
          printingRef={printingRef}
          uavRef={uavRef}
          engineeringRef={engineeringRef}
          modelingRef={modelingRef}
        />
      </Suspense>
      <Footer />
    </div>
  );
}

export default Home;
