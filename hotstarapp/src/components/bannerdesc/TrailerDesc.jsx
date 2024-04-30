import React from 'react'
import Sideimages from '../bannersideimg/Sideimages';
import movielogo from '../../media/starwars.webp'
import unMute from '../../media/icons/unmute.svg';
import './trailerdesc.css';
function TrailerDesc() {
  return (
    <div className="information">
    <img className="movieposter" src={movielogo} alt="movieposter" />
    <div className="details">
        <p>2019 <span className="dot"></span> 2h 22m 4 <span className="dot"></span> languages <span className="dot"></span> <button>U/A 13+</button></p>
    </div>
    <div className="description">
        <p>Star Wars: The Rise of Skywalker (also known as Star Wars: Episode IX – The Rise of Skywalker) is a 2019 American epic space opera film produced, co-written, ... </p>
    </div>
    <div className="category">
        <p>Adventure | Action | Sci-FI | Fantasy</p>
        <img src={unMute} alt="volume"/>
    </div>
    <div className="row1">

        <div className="buttons">
            <button className='subscribe'><span className="triangle"></span> Subscribe to Watch</button>
            <button className='add'> + </button></div>
            <Sideimages />
        
        
    </div>
</div>
  )
}

export default TrailerDesc