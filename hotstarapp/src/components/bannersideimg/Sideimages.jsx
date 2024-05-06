import React, { useState } from 'react';
import MoviesData from '../../moviedata/Moviesdata';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./sideimages.css";

function Sideimages({ changeBanner }) {
    const [isHovered, setHovered] = useState(false);
    const [imgname, setImage] = useState(null);
    const SamplePrevArrow = (props) => {
      const { onClick } = props;
      return (
        <button
          className={`scroll-left`}
        
          onClick={onClick}
        >
          <i className="arrow left" />
        </button>
      );
    };
  
    const SampleNextArrow = (props) => {
      const { onClick } = props;
      return (
        <button
          className={`scroll-right`}
  
          onClick={onClick}
        >
          <i className="arrow right" />
        </button>
      );
    };
  

    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
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
                    <div key={movie.id}>
                        <img
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