import React from 'react';
import Languages from '../../moviedata/Languagedata';
import { SamplePrevArrow,SampleNextArrow } from '../scrollbuttons/ScrollButtons'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './languagesrow.css';

function Languagesrow() {


  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 4,
    prevArrow: <SamplePrevArrow classname='side-scroll-left row'/>,
    nextArrow: <SampleNextArrow classname='side-scroll-right row'/>,
    responsive: [
      {
        breakpoint: 1200,
        settings: {    
          speed: 1000,
          slidesToShow: 3,
          slidesToScroll: 2
          
        },
      }
    ],
  };

  return (
    <div className="languages-row">
      <h2 style={{ color: 'white', fontSize: `19px`,fontWeight: `1400` }}>Popular Languages</h2>
      <Slider {...settings}>
        {Languages.images.map((imagesrc, index) => (
          <div className="language-items" key={index}>
            <img src={imagesrc} alt="companies" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Languagesrow;