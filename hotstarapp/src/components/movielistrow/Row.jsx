import React, { useState, useEffect, useRef } from 'react';
import Card from '../card/Card';
import './rowstyle.css';

export default function App({ rowName, apiUrl, smallRow }) {
  const [data, setData] = useState([]);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  const [isNavHovered, setNavHovered] = useState(false);
  const [isCardHovered, setCardHovered] = useState(false);
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

  const handleMouseEnter = (id) => {
    setCardHovered(true);
    setHoveredCardIndex(id);
    console.log(id)
  };

  const handleMouseLeave = () => {
    setCardHovered(false);
    setHoveredCardIndex(null);
  };

  const handleNavMouseEnter = () => {
    setNavHovered(true);
  };

  const handleNavMouseLeave = () => {
    setNavHovered(false);
  };

  const handleScrollRight = () => {
    rowContentRef.current.scrollLeft += 100; 
  };

  const handleScrollLeft = () => {
    rowContentRef.current.scrollLeft -= 100; 
  };

  return (
    <>
      <h2 style={{ color: 'white', marginLeft: `19vb`, fontSize: `20px`, fontWeight: `bold` }}>{rowName}</h2>
      <div className="row-movies" onMouseEnter={handleNavMouseEnter} onMouseLeave={handleNavMouseLeave}>
        <div className={`row-contents${isCardHovered ? ' hide-x' : ''}`} ref={rowContentRef}>
          {data.map((movie, index) => (
            <Card
              key={index}
              movie={movie}
              smallRow={smallRow}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              isHovered={movie.id === hoveredCardIndex}
            />
          ))}
        </div>
        {isNavHovered && (
          <>
            <button className="scroll-right" id="scrollRight" onClick={handleScrollRight}>
              <i className="arrow right" />
            </button>
            <button className="scroll-left" id="scrollLeft" onClick={handleScrollLeft}>
              <i className="arrow left" />
            </button>
          </>
        )}
      </div>
    </>
  );
}
