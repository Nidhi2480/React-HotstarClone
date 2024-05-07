import React, { useState } from "react";
import NavData from "./Navdata";
import Logo from '../../media/icons/logo-d-plus.svg';
import './style.css';

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
          <ul><li>
                  <img className="logo" src={Logo} alt="logo" />
              </li>
              <li>
                  <button className="button"><p>Subscribe {">"}</p></button>
              </li>
                {
                    NavData.map((nav,index)=>(
                        <li>
                        <a href="/#" className={`nav-link ${activeNav === nav.name ? 'active' : ''}`}>
                            <img src={nav.icon} alt="profile"  onMouseEnter={() => handleHover(nav.name)} onMouseLeave={handleLeave}/>
                            {isHovered && (
                                <span className={`nav-text ${activeNav === nav.name ? 'active' : ''}`}>{nav.name}</span>
                            )}
                        </a>
                    </li>
                    ))
                }
              
          </ul>
      </div>
  );
}

export default Nav;
