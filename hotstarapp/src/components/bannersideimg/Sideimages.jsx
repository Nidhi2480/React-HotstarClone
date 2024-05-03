import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import smallposter0 from '../../media/bp.webp';
import smallposter1 from '../../media/kannursquad.webp';
import smallposter2 from '../../media/varathan.webp';
import smallposter3 from '../../media/avengers.webp';
import smallposter4 from '../../media/lion.webp';
import smallposter5 from '../../media/loki.webp';
import smallposter6 from '../../media/starwarsbanner.webp';
import "./sideimages.css";
function Sideimages({changeBanner}) {


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
    changeBanner(imgname)
    setImage(imgname);
    setHovered(true);
  };

  return (

      <div className="images">
        <Slider {...settings}>
        <div>
          <img className={`${isHovered && imgname === smallposter6 ? 'image-active' : ''}`} src={smallposter6} onClick={() => handleEnter(smallposter6)} onMouseLeave={() => setHovered(false)} alt="posters" />
        </div>
        <div>
          <img className={`${isHovered && imgname === smallposter0 ? 'image-active' : ''}`} src={smallposter0} onClick={() => handleEnter(smallposter0)} onMouseLeave={() => setHovered(false)} alt="posters" />
        </div>
        <div>
          <img className={`${isHovered && imgname === smallposter1 ? 'image-active' : ''}`} src={smallposter1} onClick={() => handleEnter(smallposter1)} onMouseLeave={() => setHovered(false)} alt="posters" />
        </div>
        <div>
          <img className={`${isHovered && imgname === smallposter2 ? 'image-active' : ''}`} src={smallposter2} onClick={() => handleEnter(smallposter2)} onMouseLeave={() => setHovered(false)} alt="posters" />
        </div>
        <div>
          <img className={`${isHovered && imgname === smallposter0 ? 'image-active' : ''}`} src={smallposter0} onClick={() => handleEnter(smallposter0)} onMouseLeave={() => setHovered(false)} alt="posters" />
        </div>
        <div>
          <img className={`${isHovered && imgname === smallposter3 ? 'image-active' : ''}`} src={smallposter3} onClick={() => handleEnter(smallposter3)} onMouseLeave={() => setHovered(false)} alt="posters" />
        </div>
        <div>
          <img className={`${isHovered && imgname === smallposter4 ? 'image-active' : ''}`} src={smallposter4} onClick={() => handleEnter(smallposter4)} onMouseLeave={() => setHovered(false)} alt="posters" />
        </div>
        <div>
          <img className={`${isHovered && imgname === smallposter5 ? 'image-active' : ''}`} src={smallposter5} onClick={() => handleEnter(smallposter5)} onMouseLeave={() => setHovered(false)} alt="posters" />
        </div>
      </Slider></div>
    
  );
}

export default Sideimages;
