import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function Header() {
  const [ref, inView] = useInView({ threshold: 1 });
  return (
    <motion.div
      style={{ backgroundColor: '#202030' }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className='header'
      ref={ref}
    >
      <Link to='/'>TECHNOLOGIJOS KITAIP</Link>
    </motion.div>
  );
}

export default Header;
