import React from "react";
import "./card.css";

function Card({ movie, smallRow, onMouseEnter, onMouseLeave,ishovered}) {
  let timeoutId;
  const handleMouseEnter = () => {
    timeoutId = setTimeout(() => {
      onMouseEnter(movie.id);
    }, 800);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId);
    onMouseLeave();
  };

  return (
    <>
    <div
      className={`card ${smallRow ? "small" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className="image">
        <img src={movie.posterURL} alt="test" />
      </div>
      <p className="title1">{movie.title}</p>
      
      <div className="Activecard">
      <div className="image">
        <img src={movie.posterURL} alt="test" />
      </div>
        <div className="card-shadow"></div>
        <div className="card-buttons">
          <button className="watch-now">
            <span className="card-triangle"></span> Watch Now
          </button>
          <button className="add"> + </button>
        </div>
        <div className="card-description">
          <p className="category">
            2019 <span className="dot"></span> 2h 22m 4{" "}
            <span className="dot"></span> languages{" "}
            <span className="dot"></span>U/A 13+
          </p>
          <p className="title">{movie.title}</p>
        </div>
      </div>
    </div>
    
      
    </>
  );
}

export default Card;
