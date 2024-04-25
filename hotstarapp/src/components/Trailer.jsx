import React from 'react'
import trailer from '../media/starwars.mp4'
import "../styles/trailer.css"
function Trailer() {
  return (
    <div className="movie-trailer">
    <video autoPlay muted loop>
    <source src={trailer}/>
    Your browser does not support the video tag.
    </video>
   
    </div> 
  )
}

export default Trailer