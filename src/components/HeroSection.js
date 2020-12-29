import { motion, useViewportScroll, useTransform } from 'framer-motion';
import React from 'react';
import '../css/HeroSection.css'

// Images
import heroImg from '../images/hero.png';

function HeroSection({ title, subText }) {
  const y = useViewportScroll(0); // Declaring variable which holds current Viewport data.
  const opacity = useTransform(y.scrollY, [0, 300], [1, 0]);

  return (
    <section className='section__hero'>
      <div className='hero__left'>
        <motion.h1 opacity={opacity}>{title}</motion.h1>
        <p>{subText}</p>
      </div>
      <div className='hero__right'>
        <img alt='' src={heroImg} />
      </div>
    </section>
  );
}

export default HeroSection;

// Sukurta idėjoms skleisti
/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.*/