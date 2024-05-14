import React, { useState, useContext } from "react";
import { Context } from '../../App'
import NavData from "./Navdata";
import Logo from '../../media/icons/logo-d-plus.svg';
import FavModalWindow from "./favwindow/FavModalWindow";
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
  const handleClickFav=() => {
    setFavClicked(!isFavClicked)
  }

  return (
      <>
      <div className={`nav-bar ${isHovered ? 'expanded' : ''}`}>
          <ul><li>
                  <img className="logo" src={Logo} alt="logo" />
              </li>
              <li>
                  <button className="button"><p>Subscribe {`>`}</p></button>
              </li>
                {
                    NavData.map((nav,_)=>(
                        <li>{nav.name==='Favourites' ? (<span className={`nav-link ${activeNav === nav.name ? 'active' : ''}`} onClick={()=>handleClickFav()}> <span class="numbers">{FavCount}</span> <img src={nav.icon} alt="profile"  onMouseEnter={() => handleHover(nav.name)} onMouseLeave={handleLeave}/> 
                                                                {isHovered && (
                                                                    <span className={`nav-text ${activeNav === nav.name ? 'active' : ''}`}>{nav.name}</span>
                                                                )}</span>)
                                                       :(<a href="/#" className={`nav-link ${activeNav === nav.name ? 'active' : ''}`} >
                                                            <img src={nav.icon} alt="profile"  onMouseEnter={() => handleHover(nav.name)} onMouseLeave={handleLeave}/>
                                                                {isHovered && (
                                                                <span className={`nav-text ${activeNav === nav.name ? 'active' : ''}`}>{nav.name}</span>
                                                               )}
                                                    </a>)}
                            
                        </li>
                            
                    ))
                }
              
          </ul>
      </div>
            
        <FavModalWindow isFavClicked={isFavClicked} isHovered={isHovered} handleClickFav={handleClickFav} FavMovies={FavMovies}/>
    
      </>
  );
}

export default Nav;
