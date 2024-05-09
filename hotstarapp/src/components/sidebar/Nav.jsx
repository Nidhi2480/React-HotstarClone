import React, { useState, useContext } from "react";
import { Context } from '../../App'
import Card from '../card/Card';
import NavData from "./Navdata";
import Logo from '../../media/icons/logo-d-plus.svg';
import './style.css';

function Nav(){
  const [isHovered, setIsHovered] = useState(false);
  const [activeNav, setActiveNav] = useState(null);
  const [,FavCount,,FavMovies] = useContext(Context); 
  const [isFavClicked,setFavClicked]=useState(false)
  let timeoutId;

  const handleHover = (navName) => {
      clearTimeout(timeoutId);
      setIsHovered(true);
      setActiveNav(navName);
  };

  const handleLeave = () => {
      timeoutId = setTimeout(() => {
          setIsHovered(false);
      }, 500); 
  };
  const handleClickFav=()=>{
    setFavClicked(!isFavClicked)
  }

  return (
      <>
      <div className={`nav-bar ${isHovered ? 'expanded' : ''}`}>
          <ul><li>
                  <img className="logo" src={Logo} alt="logo" />
              </li>
              <li>
                  <button className="button"><p>Subscribe {">"}</p></button>
              </li>
                {
                    NavData.map((nav,_)=>(
                        <li>
                        <a href="/#" className={`nav-link ${activeNav === nav.name ? 'active' : ''}`} onClick={()=>handleClickFav()}>
                            <img src={nav.icon} alt="profile"  onMouseEnter={() => handleHover(nav.name)} onMouseLeave={handleLeave}/>
                            {isHovered && (
                                <span className={`nav-text ${activeNav === nav.name ? 'active' : ''}`}>{nav.name==='Favourites'?FavCount:''}{nav.name}</span>
                            )}
                        </a>
                    </li>
                    ))
                }
              
          </ul>
      </div>
      {isFavClicked &&(<div className="modal">
        {FavMovies.map((favMovie, _) => (
         <>
            <Card
              movie={favMovie.movie}
              genre={favMovie.Genre}
            />
         </>
      ))}
      </div> )}
      </>
  );
}

export default Nav;
