import React, { useState } from 'react'
import "../styles/rowstyle.css"
import movielogo1 from '../media/avatar.webp'
import movielogo2 from '../media/avengers.webp'
import movielogo3 from '../media/loki.webp'
import movielogo4 from '../media/drstrange.webp'

function Row({ title }) {
    let timeoutId 
    const [isHovered,setHovered]=useState(false)
    const [activeimg,setactiveImage]=useState(null)
    const handleMouseEnter = (navname) => {
    timeoutId = setTimeout(() => {
        setHovered(true)
      }, 500);
      
      setactiveImage(navname)
    }
    const handleMouseLeave=()=>{
      clearTimeout(timeoutId);
      setHovered(false)
    }
    return (
      <div className='row-movies'>
      <h2>{title}</h2>
      <div className='row-contents'>
        <img src={movielogo1} className={`mov1 ${isHovered && activeimg === 'mov1' ? 'active': ''}`} onMouseEnter={()=> handleMouseEnter('mov1')} onMouseLeave={()=>handleMouseLeave()} alt="posters"/>
        <img src={movielogo2}  className={`mov2 ${isHovered && activeimg === 'mov2' ? 'active': ''}`} onMouseEnter={()=> handleMouseEnter('mov2')} onMouseLeave={()=>handleMouseLeave()} alt="posters"/>
        <img src={movielogo3}  className={`mov3 ${isHovered && activeimg === 'mov3' ? 'active': ''}`} onMouseEnter={()=> handleMouseEnter('mov3')} onMouseLeave={()=>handleMouseLeave()} alt="posters"/>
        <img src={movielogo4}  className={`mov4 ${isHovered && activeimg === 'mov4' ? 'active': ''}`} onMouseEnter={()=> handleMouseEnter('mov4')} onMouseLeave={()=>handleMouseLeave()} alt="posters"/>
      </div></div>
     
    );
  }

export default Row