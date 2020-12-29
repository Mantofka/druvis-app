import React from 'react';
import '../css/Configuration.css';
import SearchIcon from '@material-ui/icons/Search';
import Add_Section from './Add_Section';
import CreatedPosts from './CreatedPosts';

import { useStateValue } from '../StateProvider';

import { motion } from 'framer-motion';

function Configuarion() {
  const [{ isModalOpened }, dispatch] = useStateValue();

  const changeModal = () => {
    dispatch({
      type: 'CHANGE_MODAL_STATE',
    });
  };

  return (
    <div className='configuration'>
      {isModalOpened && <Add_Section />}
      <div className='configuration__Search'>
        <input placeholder='Įveskite pavadinimą' />
        <SearchIcon className='searchIcon' />
      </div>
      <div className='configuration__primary-buttons'>
        <motion.button
          onClick={changeModal}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Pridėti
        </motion.button>
      </div>
      <div className='configuration__posts'>
      <h1>Sukurtos temos:</h1>
        <CreatedPosts />
      </div>
    </div>
  );
}

export default Configuarion;
