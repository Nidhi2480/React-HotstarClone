import React from 'react'
import Sideimages from '../bannersideimg/Sideimages';
import movielogo from '../../media/starwars.webp'
import unMute from '../../media/icons/unmute.svg';
import './trailerdesc.css';
function TrailerDesc({changebanner,movie}) {


  return (
    <div className="information">
    <img className="movieposter" src={movie.logo} alt="movieposter" />
    <div className="details">
        <p>{movie.genre.year}<span className="dot"></span> {movie.genre.length}<span className="dot"></span>{movie.genre.languages} <span className="dot"></span> <button>{movie.genre.ua}</button></p>
    </div>
    <div className="description">
        <p>{movie.description} </p>
    </div>
    <div className="category">
        <p>Adventure | Action | Sci-FI | Fantasy</p>
        <img src={unMute} alt="volume"/>
    </div>
    <div className="row1">

        <div className="buttons">
            <button className='subscribe'><span className="triangle"></span> Subscribe to Watch</button>
            <button className='add'> + </button></div>
            <Sideimages changeBanner={changebanner}/>
        
        
    </div>
</div>
  )
}

export default TrailerDesc