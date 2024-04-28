import React, { useEffect, useRef } from 'react';
import trailer from '../../media/starwars.mp4';
import './trailer.css';

function Trailer() {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop < 300) {
        if (videoRef.current.paused) {
          videoRef.current.play();
        }
      } else if (!videoRef.current.paused && scrollTop >300) {
          videoRef.current.pause();
        }
    };


    window.addEventListener('scroll', handleScroll);

  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="movie-trailer">
      <video ref={videoRef} autoPlay muted loop>
        <source src={trailer} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Trailer;
