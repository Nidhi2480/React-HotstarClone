import React, { useState, useEffect, useRef } from 'react';
import Card from '../card/Card';
import MoviesData from '../../moviedata/Moviesdata';
import './rowstyle.css';

export default function App({ rowName, apiUrl, smallRow,genre}) {
  const [data, setData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(6); 
  const [isNavHovered, setNavHovered] = useState(true);
  const [changeClass, setChangeClass] = useState(false);
  const rowContentRef = useRef(null);
  function cardHover(){
    setChangeClass(true)
    setNavHovered(false)
  }
  function NocardHover(){
    setChangeClass(false)
    setNavHovered(true)
  }
  useEffect(() => {
    const getData = async () => {
      try {
        if (apiUrl) {
          const resp = await fetch(apiUrl);
          const json = await resp.json();
          setData(json);
        } else {
          setData(MoviesData);
        }
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };
    getData();
  }, [apiUrl]);

  const handleScrollRight = () => {
    if (endIndex < data.length - 1) {
      setStartIndex(startIndex + 7);
      setEndIndex(endIndex + 7);
    }
  };

  const handleScrollLeft = () => {
    if (startIndex >= 7) {
      setStartIndex(startIndex - 7);
      setEndIndex(endIndex - 7);
    }
  };

  return (
    <>
      <h2 style={{ color: 'white', marginLeft: `19vb`, fontSize: `20px`, fontWeight: `bold` }}>{rowName}</h2>
      <div className="row-movies">
        <div className={`row-contents ${changeClass?` x-hide `:``}`}  ref={rowContentRef}>
          {data.slice(startIndex, endIndex + 1).map((movie, _) => (
            <Card
              movie={movie}
              smallRow={smallRow}
              cardHover={cardHover}
              NocardHover={NocardHover}
              genre={genre}
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