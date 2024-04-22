import React from "react"
import '../styles/style.css';
import homeLogo from '../icons/home.svg';
import categoryLogo from '../icons/category.svg';
import profileLogo from '../icons/profile.svg';
import searchLogo from '../icons/search.svg';
import sportsLogo from '../icons/sports.svg';
import Logo from '../icons/logo1.png';
function Nav(){
    return (
        <div className="nav-bar">
                <ul><img className="logo" src={Logo} alt="Home"/>
                <div className="button"><p>Subscribe </p></div>
                <li><a href="/#"><img src={profileLogo} alt="profile"/>My Space</a></li>
                <li><a href="/#"><img src={searchLogo} alt="Home"/>Search</a></li>
                <li><a href="/#"><img src={homeLogo} alt="Home"/>Home</a></li>
                <li><a href="/#"><img src={sportsLogo} alt="Home"/>Sports</a></li>
                <li><a href="/#"><img src={categoryLogo} alt="Home"/>Categories</a></li>
          </ul>
        </div>
    )
}
export default Nav