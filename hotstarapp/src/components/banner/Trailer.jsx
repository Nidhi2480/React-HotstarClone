import React, { useEffect, useRef, useState } from 'react';
import { Banner } from '../../data/Moviesdata';
import './trailer.css';

function Trailer({ movie, isMuted }) {
  const [showVideo, setShowVideo] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const videoRef = useRef(null);

  useEffect(() => {
    let timeoutId;
    const setVideoStateWithDelay = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setShowVideo(true), 5000);
    };
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop < 300) {
        if (videoRef.current.paused) {
          videoRef.current.play();
        }
      } else if (!videoRef.current.paused && scrollTop > 300) {
        videoRef.current.pause();
      }
      const newOpacity = 1 - scrollTop / 300; 
      setOpacity(newOpacity < 0 ? 0 : newOpacity);
    };

    setVideoStateWithDelay();
    if (showVideo) {
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showVideo]);

  useEffect(() => {
    setShowVideo(false);
  }, [movie]);

  return (
    <>
      {(movie.trailerLink || movie.posterURL) && showVideo && (
        <div className="movie-trailer" style={{ opacity }}>
          <video ref={videoRef} autoPlay muted={isMuted} loop>
            <source src={movie.posterURL ? Banner.video : movie.trailerLink} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      {(movie.poster || movie.posterURL) && !showVideo && (
        <div className="movie-trailer" style={{ opacity }}> 
          <img src={movie.posterURL ? Banner.poster : movie.poster} alt={movie.poster} />
        </div>
      )}
    </>
  );
}

export default Trailer;
