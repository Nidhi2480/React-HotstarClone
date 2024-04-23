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

function Nav(){
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div className="nav" >
        <div className="nav-bar">
          <ul>
            <li>
              <img className="logo" src={Logo} alt="logo" />
            </li>
            <li>
              <button className="button">Subscribe</button>
            </li>
            <li>
              <a href="/#" className="nav-link" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <img src={profileLogo} alt="profile" />
              </a>
            </li>
            <li>
              <a href="/#" className="nav-link" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <img src={searchLogo} alt="Search" />
              </a>
            </li>
            <li>
              <a href="/#" className="nav-link" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <img src={homeLogo} alt="Home" />
              </a>
            </li>
            <li>
              <a href="/#" className="nav-link" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <img src={tv} alt="Sports" />
              </a>
            </li>
            <li>
              <a href="/#" className="nav-link" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <img src={movies} alt="Sports" />
              </a>
            </li>
            <li>
              <a href="/#" className="nav-link" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <img src={sportsLogo} alt="Sports" />
              </a>
            </li>
            <li>
              <a href="/#" className="nav-link" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <img src={categoryLogo} alt="Categories" />
              </a>
            </li>
          </ul>
        </div>
        {isHovered && (
          <div className="nav-text">
          <ul>
            <li>My Space</li>
            <li>Search</li>
            <li>Home</li>
            <li>TV</li>
            <li>Movies</li>
            <li>Sports</li>
            <li>Categories</li>
          </ul>
        </div>
        )}
      </div>
    );
}

export default Nav;
