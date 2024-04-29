import React, { useState } from "react";
import "./card.css"
function Card({ movie,smallRow,onMouseEnter, onMouseLeave }){
  const [activeCard,setActivecard]=useState(null)
    const handleMouseEnter = (activecard) => {
        setActivecard(activecard)
        onMouseEnter();
      };
    
      const handleMouseLeave = () => {
        onMouseLeave();
        setActivecard(null)
      };


    return (
        <div className={`card ${smallRow?'small':""} ${activeCard===movie.id?'active':""}`} onMouseEnter={()=>{handleMouseEnter(movie.id)}} onMouseLeave={handleMouseLeave}>
            <div className="image">
                <img src={movie.posterURL} alt="test" />
            </div>
            <div className="card-shadow"></div>
            <div className="card-buttons">
                <button className='watch-now'><span className="card-triangle"></span>  Watch Now</button>
                <button className='add'> + </button>
            </div>
          <div className="card-description">
           <p>2019 <span className="dot"></span> 2h 22m 4 <span className="dot"></span> languages <span className="dot"></span>U/A 13+</p>
            <p className="title">{movie.title}

            </p>
            </div>

        </div>

    )
}
export default Card