import React, { useState, useEffect } from 'react';
import "../styles/rowstyle.css"
export default function App() {
  const [data, setData] = useState([]);
  const [isHovered, setHovered] = useState(false);
  const [activeimg, setActiveImage] = useState(null);
  const getData = async () => {
    try {
      const resp = await fetch('https://api.sampleapis.com/movies/family');
      const json = await resp.json();
      setData(json);
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleMouseEnter = (navname) => {
    setTimeout(() => {
      setHovered(true);
    }, 300);
    setActiveImage(navname);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="row-movies">
      <h2>Drama Movies</h2>
      <div className="row-contents">
        {data.slice(10,).map((movie, index) => (
          <div key={index} className={`mov ${isHovered && activeimg === `mov${index + 1}` ? 'active': ''}`}>
            <img
              src={movie.posterURL}
              alt={`poster ${index}`}
              onMouseEnter={() => handleMouseEnter(`mov${index + 1}`)}
              onMouseLeave={handleMouseLeave}
            />

          </div>
        ))}
        <button class="scroll-button" id="scrollRight">&gt;</button>
      </div>
    </div>
  );
}
