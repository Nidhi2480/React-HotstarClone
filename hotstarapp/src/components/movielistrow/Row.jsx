import React, { useState, useEffect, useRef } from 'react';
import Card from '../card/Card';
import { SampleNextArrow,SamplePrevArrow } from '../scrollbuttons/ScrollButtons'
import './rowstyle.css';

export default function App({ rowName, apiUrl,MoviesData, fav,smallRow,genre}) {
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
  }, [apiUrl,MoviesData]);

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
      <h2 className='row-heading'>{rowName}</h2>
      <div className={`row-movies ${fav?'fav':''}`}>
        <div className={`row-contents ${changeClass?` x-hide `:``}`}  ref={rowContentRef}>
          {data.slice(startIndex, endIndex + 1).map((movie, _) => (
            <Card
              movie={movie}
              smallRow={smallRow}
              cardHover={cardHover}
              NocardHover={NocardHover}
              genre={genre}
              fav={fav}
            />
          ))}
        </div>
        {isNavHovered && (
          <>
              <SamplePrevArrow classname={`side-scroll-left movie-row`}  onClick={handleScrollLeft}/>
              <SampleNextArrow classname={`side-scroll-right movie-row`} onClick={handleScrollRight} />
          </>
        )}
      </div>
    </>
  );
}