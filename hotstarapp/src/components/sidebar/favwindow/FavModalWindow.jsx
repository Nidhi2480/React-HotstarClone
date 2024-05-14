import React,{useState} from 'react'
import { SampleNextArrow,SamplePrevArrow } from '../../scrollbuttons/ScrollButtons'
import Card from '../../card/Card';
import './modal.css'
function FavModalWindow({ isFavClicked,isHovered,handleClickFav,FavMovies}) {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(4);

  const handleScrollRight = () => {
    if (endIndex <= FavMovies.length - 1) {
      setStartIndex(startIndex + 1);
      setEndIndex(endIndex + 1);
    }
  };

  const handleScrollLeft = () => {
    if (startIndex >= 1) {
      setStartIndex(startIndex - 1);
      setEndIndex(endIndex - 1);
    }
  };
  
  return (



    <div className={`modal ${isFavClicked?`active`:``} ${isHovered?``:`move-left`}`}>
    <h1>Your Favourites</h1><button className="btn" onClick={()=>handleClickFav()}>Close</button>
    <div className="modal-content">
    {FavMovies.length === 0 && (<h2>Empty</h2>)}
    {isFavClicked && FavMovies.slice(startIndex,endIndex).map((favMovie, index) => (
                <Card
                    key={index}
                    movie={favMovie.movie}
                    genre={favMovie.Genre}
                />
            ))}
                
      
        </div>
        <SamplePrevArrow classname='side-scroll-left movie-row fav'  onClick={handleScrollLeft}/>
        <SampleNextArrow classname='side-scroll-right movie-row fav' onClick={handleScrollRight}/>
    
    </div>
  )
}

export default FavModalWindow