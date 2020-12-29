import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

function Header() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className='header'>
      <div className='header__container'>
        <div className='header__logo'>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <div className='header__text'>
              <h1>Druvis</h1>
            </div>
          </Link>
        </div>
        <div className='header__links'>
          <a href='#l'>Galerija</a>
          <a href='#l'>Apie</a>
          {!user && <Link to='/login'></Link>}
        </div>
      </div>
    </div>
  );
}

export default Header;
