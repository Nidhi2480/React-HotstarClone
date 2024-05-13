import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from '../../App'
import FindFavMovies from "./FindFavMovies";
import "./card.css";



function Card({ movie, smallRow,cardHover,NocardHover,genre}) {
  const [setCount,,setFavMoviesArray,FavMovies]=useContext(Context);
  let timeoutId
  const handleMouseEnter = () => {
    if (cardHover){
      cardHover();
    }
   
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId)
    if (NocardHover){
      NocardHover();
    }
  };

  const handleClick=(id,genre,movie,action)=>{
      setFavMoviesArray(id,genre,movie,action);
      setCount(action)
  }

  return (
   
    <div
      key={movie.id}
      className={`card ${smallRow ? "small" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
      <div className="image">
        <img src={movie.posterURL?movie.posterURL:movie.poster} alt="test" />
      </div>
      <p className="title1">{movie.title}</p>
      <div className="Activecard" key={movie.id} onMouseLeave={handleMouseLeave}> 
             <div className="image">
               <img src={movie.posterURL?movie.posterURL:movie.poster} alt="test" />
    
               {/* <video><source src={trailer} type="video/mp4" />
                  Your browser does not support the video tag.
                </video> */}
             </div>
               <div className="logo"><img src={movie.posterURL?'/icons/hotstarsp.png':movie.logo} alt='logo'/>      </div>
               <div className="card-buttons">
                 <button className="watch-now">
                 <Link to={`/movies/${movie.id}/${movie.posterURL?genre:'latestshows'}?`} style={{ textDecoration: 'none' }}><span className="card-triangle"></span> Watch Now</Link>
                 </button>
                 <button className="add"> + </button>
              
                 { !FindFavMovies(FavMovies,movie.id,genre)? <img src={'/icons/star.svg'} alt='logo' onClick={() => handleClick(movie.id,genre,movie,"add")}/>:<img className="active-star" src={'/icons/activestar.svg'} alt='logo'  onClick={() => handleClick(movie.id,genre,movie,"remove")}/>}
                
               </div>
               <div className="card-description">
                 <p className="category">
                 {movie.posterURL?'2019':movie.genre.year}  <span className="dot"></span>{movie.posterURL?`2h 22m `:movie.genre.length} 
                   <span className="dot"></span>{movie.posterURL?`4 Languages`:movie.genre.languages} 
                   <span className="dot"></span>{movie.posterURL?`U/A 7+ `:movie.genre.ua} 
                 </p>
                 <p className="title">{movie.description?movie.description:`${movie.title} is a 2019 American musical drama film directed by Jon Favreau, written by Jeff Nathanson, and produced by Walt Disney Pictures...`}</p>
               </div>
             </div>  
             
    
     
      
    </div>
    

  );
}

export default Card;