import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./sideimages.css";
import smallposter from '../../media/football.webp';

function Sideimages() {
  const [isHovered, setHovered] = useState(false);
  const [imgname, setImage] = useState(null);

  var settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
  
  };


  const handleEnter = (imgname) => {
    setImage(imgname);
    setHovered(true);
  };

  return (

      <div className="images">
            <Slider {...settings}>
        <img className={`${isHovered && imgname === 'img1' ? 'image-active' : ''}`} src={smallposter} onMouseEnter={() => handleEnter('img1')} onMouseLeave={() => setHovered(false)} alt="posters" />
        <img className={`${isHovered && imgname === 'img2' ? 'image-active' : ''}`} src={smallposter} onMouseEnter={() => handleEnter('img2')} onMouseLeave={() => setHovered(false)} alt="posters" />
        <img className={`${isHovered && imgname === 'img3' ? 'image-active' : ''}`} src={smallposter} onMouseEnter={() => handleEnter('img3')} onMouseLeave={() => setHovered(false)} alt="posters" />
        <img className={`${isHovered && imgname === 'img4' ? 'image-active' : ''}`} src={smallposter} onMouseEnter={() => handleEnter('img4')} onMouseLeave={() => setHovered(false)} alt="posters" />
        <img className={`${isHovered && imgname === 'img4' ? 'image-active' : ''}`} src={smallposter} onMouseEnter={() => handleEnter('img4')} onMouseLeave={() => setHovered(false)} alt="posters" />
      </Slider></div>
    
  );
}

export default Sideimages;
