import React, { useState } from 'react';
import MoviesData from '../../data/Moviesdata';
import {SamplePrevArrow,SampleNextArrow} from '../scrollbuttons/ScrollButtons'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./sideimages.css";

function Sideimages({ changeBanner }) {
    const [isHovered, setHovered] = useState(false);
    const [imgname, setImage] = useState(null);
    
  

    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: <SamplePrevArrow classname='side-scroll-left'/>,
        nextArrow: <SampleNextArrow classname='side-scroll-right'/>,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
            },
          }
        ],
    };
    const handleClick = (movie) => {
      changeBanner(movie);
      
    };
    const handleEnter = (imgname) => {
  
        setImage(imgname);
        setHovered(true);
    };

    return (
        <div className="images">
            <Slider {...settings}>
                {MoviesData.map((movie) => (

                    <div className='image'>
                        <img 
                            key={movie.id}
                            className={`${isHovered && imgname === movie.poster ? 'image-active' : ''}`}
                            src={movie.poster}
                            onClick={() => handleClick(movie)}
                            onMouseEnter={()=>handleEnter(movie.poster)}
                            onMouseLeave={() => setHovered(false)}
                            alt={movie.title}
                        />
                    </div>
            
                ))}
            </Slider>
        </div>
    );
}

export default Sideimages;