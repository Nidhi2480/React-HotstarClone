import React, { useState } from "react";
import '../styles/style.css';
import homeLogo from '../icons/home.svg';
import categoryLogo from '../icons/category.svg';
import profileLogo from '../icons/profile.svg';
import searchLogo from '../icons/search.svg';
import sportsLogo from '../icons/sports.svg';
import Logo from '../icons/logo-d-plus.svg';
import tv from '../icons/tv.svg';
import movies from '../icons/movies.svg';

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
                  <a href="/#" className={`nav-link ${activeNav === "profile" ? 'active' : ''}`} onMouseEnter={() => handleHover("profile")} onMouseLeave={handleLeave}>
                      <img src={profileLogo} alt="profile" />
                      {isHovered && (
                          <span className={`nav-text ${activeNav === "profile" ? 'active' : ''}`}>My Space</span>
                      )}
                  </a>
              </li>
              <li>
                  <a href="/#" className={`nav-link ${activeNav === "search" ? 'active' : ''}`} onMouseEnter={() => handleHover("search")} onMouseLeave={handleLeave}>
                      <img src={searchLogo} alt="Search" />
                      {isHovered && (
                          <span className={`nav-text ${activeNav === "search" ? 'active' : ''}`}>Search</span>
                      )}
                  </a>
              </li>
              <li>
                  <a href="/#" className={`nav-link ${activeNav === "home" ? 'active' : ''}`} onMouseEnter={() => handleHover("home")} onMouseLeave={handleLeave}>
                      <img src={homeLogo} alt="Home" />
                      {isHovered && (
                          <span className={`nav-text ${activeNav === "home" ? 'active' : ''}`}>Home</span>
                      )}
                  </a>
              </li>
              <li>
                  <a href="/#" className={`nav-link ${activeNav === "tv" ? 'active' : ''}`} onMouseEnter={() => handleHover("tv")} onMouseLeave={handleLeave}>
                      <img src={tv} alt="TV" />
                      {isHovered && (
                          <span className={`nav-text ${activeNav === "tv" ? 'active' : ''}`}>TV</span>
                      )}
                  </a>
              </li>
              <li>
                  <a href="/#" className={`nav-link ${activeNav === "movies" ? 'active' : ''}`} onMouseEnter={() => handleHover("movies")} onMouseLeave={handleLeave}>
                      <img src={movies} alt="Movies" />
                      {isHovered && (
                          <span className={`nav-text ${activeNav === "movies" ? 'active' : ''}`}>Movies</span>
                      )}
                  </a>
              </li>
              <li>
                  <a href="/#" className={`nav-link ${activeNav === "sports" ? 'active' : ''}`} onMouseEnter={() => handleHover("sports")} onMouseLeave={handleLeave}>
                      <img src={sportsLogo} alt="Sports" />
                      {isHovered && (
                          <span className={`nav-text ${activeNav === "sports" ? 'active' : ''}`}>Sports</span>
                      )}
                  </a>
              </li>
              <li>
                  <a href="/#" className={`nav-link ${activeNav === "category" ? 'active' : ''}`} onMouseEnter={() => handleHover("category")} onMouseLeave={handleLeave}>
                      <img src={categoryLogo} alt="Categories" />
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
