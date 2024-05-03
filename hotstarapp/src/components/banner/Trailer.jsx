import React, { useEffect, useRef,useState } from 'react';

import './trailer.css';

function Trailer({trailer,banner}) {
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
  }, [banner]);


  return (<>
  {trailer && showVideo &&(<div className="movie-trailer">
  <video ref={videoRef} autoPlay muted loop>
    <source src={trailer} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>)}
  {banner && !showVideo &&(<div className="movie-trailer">

    <img src={banner} alt={banner}/>
    </div>)}
    </>
    
  );
}

export default Trailer;
