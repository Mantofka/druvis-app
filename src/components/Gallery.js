import React from 'react';
import '../css/Gallery.css';
import imageSvg from '../images/148415.svg';
import Items from './Items';

function Gallery() {
  return (
    <div className='gallery'>
      <div className='gallery__images'>
        <Items img={imageSvg} />
        <Items img={imageSvg} />
        <Items img={imageSvg} />
        <Items img={imageSvg} />
        <Items img={imageSvg} />
        <Items img={imageSvg} />
        <Items img={imageSvg} />
      </div>
    </div>
  );
}

export default Gallery;
