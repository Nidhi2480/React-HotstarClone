import React, { useState } from "react";
import homeLogo from '../../media/icons/home.svg';
import categoryLogo from '../../media/icons/category.svg';
import profileLogo from '../../media/icons/profile.svg';
import searchLogo from '../../media/icons/search.svg';
import sportsLogo from '../../media/icons/sports.svg';
import Logo from '../../media/icons/logo-d-plus.svg';
import tv from '../../media/icons/tv.svg';
import movies from '../../media/icons/movies.svg';
import './style.css';

// Import the necessary icons

function Nav(){
  const [isHovered, setIsHovered] = useState(false);
  const [activeNav, setActiveNav] = useState(null);
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

  return (
      <div className={`nav-bar ${isHovered ? 'expanded' : ''}`}>
          <ul>
              <li>
                  <img className="logo" src={Logo} alt="logo" />
              </li>
              <li>
                  <button className="button">Subscribe {">"}</button>
              </li>
              <li>
                  <a href="/#" className={`nav-link ${activeNav === "profile" ? 'active' : ''}`}>
                      <img src={profileLogo} alt="profile"  onMouseEnter={() => handleHover("profile")} onMouseLeave={handleLeave}/>
                      {isHovered && (
                          <span className={`nav-text ${activeNav === "profile" ? 'active' : ''}`}>My Space</span>
                      )}
                  </a>
              </li>
              <li>
                  <a href="/#" className={`nav-link ${activeNav === "search" ? 'active' : ''}`} >
                      <img src={searchLogo} onMouseEnter={() => handleHover("search")} onMouseLeave={handleLeave} alt="Search" />
                      {isHovered && (
                          <span className={`nav-text ${activeNav === "search" ? 'active' : ''}`}>Search</span>
                      )}
                  </a>
              </li>
              <li>
                  <a href="/#" className={`nav-link ${activeNav === "home" ? 'active' : ''}`} >
                      <img src={homeLogo} onMouseEnter={() => handleHover("home")} onMouseLeave={handleLeave} alt="Home" />
                      {isHovered && (
                          <span className={`nav-text ${activeNav === "home" ? 'active' : ''}`}>Home</span>
                      )}
                  </a>
              </li>
              <li>
                  <a href="/#" className={`nav-link ${activeNav === "tv" ? 'active' : ''}`}>
                      <img src={tv}  onMouseEnter={() => handleHover("tv")} onMouseLeave={handleLeave} alt="TV" />
                      {isHovered && (
                          <span className={`nav-text ${activeNav === "tv" ? 'active' : ''}`}>TV</span>
                      )}
                  </a>
              </li>
              <li>
                  <a href="/#" className={`nav-link ${activeNav === "movies" ? 'active' : ''}`} >
                      <img src={movies} onMouseEnter={() => handleHover("movies")} onMouseLeave={handleLeave} alt="Movies" />
                      {isHovered && (
                          <span className={`nav-text ${activeNav === "movies" ? 'active' : ''}`}>Movies</span>
                      )}
                  </a>
              </li>
              <li>
                  <a href="/#" className={`nav-link ${activeNav === "sports" ? 'active' : ''}`} >
                      <img src={sportsLogo}onMouseEnter={() => handleHover("sports")} onMouseLeave={handleLeave} alt="sports" />
                      {isHovered && (
                          <span className={`nav-text ${activeNav === "sports" ? 'active' : ''}`}>Sports</span>
                      )}
                  </a>
              </li>
              <li>
                  <a href="/#" className={`nav-link ${activeNav === "category" ? 'active' : ''}`}>
                      <img src={categoryLogo}  onMouseEnter={() => handleHover("category")} onMouseLeave={handleLeave} alt="Categories" />
                      {isHovered && (
                          <span className={`nav-text ${activeNav === "category" ? 'active' : ''}`}>Categories</span>
                      )}
                  </a>
              </li>
          </ul>
      </div>
  );
}

export default Nav;
