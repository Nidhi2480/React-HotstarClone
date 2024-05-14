import React from 'react'
import Sideimages from '../bannersideimg/Sideimages';
import { DefaultMov } from '../../moviedata/Default';
import unMute from '../../media/icons/unmute.svg';
import './trailerdesc.css';
function TrailerDesc({changebanner,movie,handleUnmuteClick,isMuted}) {
    function handleClick(){
        handleUnmuteClick()
    }
  return (
    <div className="information">
    <img className="movieposter" src={movie.posterURL?movie.posterURL:movie.logo} alt="movieposter" />
    <div className="details">
        <p>{movie.posterURL?"2017":movie.genre.year}<span className="dot"></span> {movie.posterURL?"2h 15m":movie.genre.length}<span className="dot"></span>{movie.posterURL?"4 languages":movie.genre.languages} <span className="dot"></span> <button>{movie.posterURL?"U/A 13+":movie.genre.ua}</button></p>
    </div>
    <div className="description">
        <p>{movie.posterURL?`${movie.title}${DefaultMov.desc}`:movie.description} </p>
    </div>
    <div className="category">
        <p>{DefaultMov.category}</p>
        {isMuted?<img src='/icons/volumeup.svg' alt="volume"  onClick={handleClick} />:<img src={unMute} alt="volume"  onClick={handleClick} />}
    </div>
    <div className="row1">

        <div className="buttons">
            <button className='subscribe'><span className="triangle"></span><span className='btn-text'> Subscribe to Watch</span></button>
            <button className='add'> + </button></div>
            {!movie.posterURL && <Sideimages changeBanner={changebanner}/>}
        
        
    </div>
</div>
  )
}

export default TrailerDesc