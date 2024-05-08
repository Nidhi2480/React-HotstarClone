import React, { useEffect, useRef,useState } from 'react';
import './trailer.css';

function Trailer({movie}) {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    let timeoutId
    const setVideoStateWithDelay = () => {
      console.log(showVideo)
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setShowVideo(true), 5000);
      
    };
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


  return (<>
  {(movie.trailerLink || movie.posterURL) && showVideo &&(<div className="movie-trailer">
  <video ref={videoRef} autoPlay loop>
    <source src={movie.trailerLink} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>)}
  {(movie.poster || movie.posterURL) && !showVideo &&(<div className="movie-trailer">

    <img src={movie.posterURL?movie.posterURL:movie.poster} alt={movie.poster}/>
    </div>)}
    </>
    
  );
}

export default Trailer;
