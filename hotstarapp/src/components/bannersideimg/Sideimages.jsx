import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import smallposter from '../../media/football.webp';
import smallposter0 from '../../media/vikram.webp';
import smallposter1 from '../../media/film1.webp';
import smallposter2 from '../../media/movie.webp';
import "./sideimages.css";
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
        <div>
          <img className={`${isHovered && imgname === 'img1' ? 'image-active' : ''}`} src={smallposter} onMouseEnter={() => handleEnter('img1')} onMouseLeave={() => setHovered(false)} alt="posters" />
        </div>
        <div>
          <img className={`${isHovered && imgname === 'img2' ? 'image-active' : ''}`} src={smallposter0} onMouseEnter={() => handleEnter('img2')} onMouseLeave={() => setHovered(false)} alt="posters" />
        </div>
        <div>
          <img className={`${isHovered && imgname === 'img3' ? 'image-active' : ''}`} src={smallposter1} onMouseEnter={() => handleEnter('img3')} onMouseLeave={() => setHovered(false)} alt="posters" />
        </div>
        <div>
          <img className={`${isHovered && imgname === 'img4' ? 'image-active' : ''}`} src={smallposter2} onMouseEnter={() => handleEnter('img4')} onMouseLeave={() => setHovered(false)} alt="posters" />
        </div>
        <div>
          <img className={`${isHovered && imgname === 'img5' ? 'image-active' : ''}`} src={smallposter0} onMouseEnter={() => handleEnter('img5')} onMouseLeave={() => setHovered(false)} alt="posters" />
        </div>
      </Slider></div>
    
  );
}

export default Sideimages;
