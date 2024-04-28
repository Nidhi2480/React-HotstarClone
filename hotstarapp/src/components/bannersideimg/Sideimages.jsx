import React, { useState } from 'react'
import "./sideimages.css"
import smallposter from '../../media/football.webp'
function Sideimages() {
  const [isHovered,setHovered]=useState(false)
  const [imgname,setImage]=useState(null)
  const handleEnter=(imgname)=>{
    setImage(imgname);
    setHovered(true);
  };
  return (
    <div className="images">
        <img className={`${isHovered && imgname==="img1"?'image-active':''}`} src={smallposter} onMouseEnter={()=>handleEnter('img1')} onMouseLeave={()=>setHovered(false)} alt="posters"/>
        <img className={`${isHovered && imgname==="img2"?'image-active':''}`} src={smallposter} onMouseEnter={()=>handleEnter('img2')} onMouseLeave={()=>setHovered(false)}  alt="posters"/>
        <img className={`${isHovered && imgname==="img3"?'image-active':''}`} src={smallposter} onMouseEnter={()=>handleEnter('img3')} onMouseLeave={()=>setHovered(false)} alt="posters"/>
        <img className={`${isHovered && imgname==="img4"?'image-active':''}`} src={smallposter} onMouseEnter={()=>handleEnter('img4')} onMouseLeave={()=>setHovered(false)}  alt="posters"/>
    </div>
  )
}

export default Sideimages