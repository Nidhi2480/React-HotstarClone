import React, { useState } from "react";
import "./card.css"
function Card({ movie,smallRow,onMouseEnter, onMouseLeave }){
    const handleMouseEnter = () => {
        onMouseEnter();
      };
    
      const handleMouseLeave = () => {
        onMouseLeave();
      };
    return (
        <div className={`card ${smallRow?'small':""}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="image">
                <img src={movie.posterURL} alt="test" />
            </div>
            <div className="card-shadow"></div>
            <div className="card-buttons">
                <button className='watch-now'><span className="card-triangle"></span>  Watch Now</button>
                <button className='add'> + </button>
            </div>
          <div className="card-description">
            {!smallRow && (<p>2019 <span className="dot"></span> 2h 22m 4 <span className="dot"></span> languages <span className="dot"></span> <button>U/A 13+</button></p>)}
            <p className="title">{movie.title}

            </p>
            </div>

        </div>

    )
}
export default Card