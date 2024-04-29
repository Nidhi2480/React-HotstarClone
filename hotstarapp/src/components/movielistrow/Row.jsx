import React, { useState, useEffect, useRef } from 'react';
import './rowstyle.css';
import Card from '../card/Card';

export default function App({ rowName, apiUrl, smallRow }) {
  const [data, setData] = useState([]);
  const [iscardHovered, setcardHovered] = useState(false);
  const [displayedMoviesIndex, setDisplayedMoviesIndex] = useState(0);
  const [isNavHovered, setNavHovered] = useState(false);
  const rowContentRef = useRef(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await fetch(apiUrl);
        const json = await resp.json();
        setData(json);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };
    getData();
  }, [apiUrl]);

  const handleMouseEnter = () => {
    setcardHovered(true);
  };

  const handleMouseLeave = () => {
    setcardHovered(false);
  };

  const handlenavMouseEnter = () => {
    setNavHovered(true);
  }
  const handlenavMouseLeave = () => {
    setNavHovered(false);
  }
  


  const handleScrollRight = () => {
    const nextIndex = displayedMoviesIndex +1;
    if (nextIndex <= data.length - 7) {
      setDisplayedMoviesIndex(nextIndex);
    }
  };

  const handleScrollLeft = () => {
    const prevIndex = displayedMoviesIndex - 1;
    if (prevIndex >= 0) {
      setDisplayedMoviesIndex(prevIndex);
    }
  };

  return (
    <>
      <h2 style={{ color: 'white', marginLeft: `15vb`,fontSize:`18px`,fontWeight:`normal` }}>{rowName}</h2>
      <div className="row-movies" onMouseEnter={handlenavMouseEnter} onMouseLeave={handlenavMouseLeave}>
        <div className={`row-contents${iscardHovered? 'hide-x':''}`} ref={rowContentRef}>
          {data.slice(displayedMoviesIndex, displayedMoviesIndex + 10).map((movie, index) => (
            <Card key={index} movie={movie} smallRow={smallRow} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
          ))}
        </div>
        {isNavHovered && (
          <>
            <button className="scroll-right" id="scrollRight" onClick={handleScrollRight}>
            <i className="arrow right"/>
            </button>
            <button className="scroll-left" id="scrollLeft" onClick={handleScrollLeft}>
            <i className="arrow left"/>
            </button>
          </>
        )}
      </div>
    </>
  );
}
