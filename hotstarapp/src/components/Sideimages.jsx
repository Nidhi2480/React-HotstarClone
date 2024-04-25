import React from 'react'
import "../styles/sideimages.css"
import smallposter from '../media/football.webp'
function Sideimages() {
  return (
    <div className="images">
        <img src={smallposter} alt="posters"/><img src={smallposter} alt="posters"/>
        <img src={smallposter} alt="posters"/>
        <img src={smallposter} alt="posters"/>
    </div>
  )
}

export default Sideimages