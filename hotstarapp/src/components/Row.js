import React from 'react'
import "../styles/rowstyle.css"
import movielogo1 from '../media/avatar.webp'
import movielogo2 from '../media/avengers.webp'
import movielogo3 from '../media/loki.webp'
import movielogo4 from '../media/drstrange.webp'

function Row({ title }) {
    return (
      <div className='row-movies'>
      <h2>{title}</h2>
      <div className='row-contents'>
        
        <img src={movielogo1} alt="posters"/>
        <img src={movielogo2} alt="posters"/>
        <img src={movielogo3} alt="posters"/>
        <img src={movielogo4} alt="posters"/>
      </div></div>
     
    );
  }

export default Row