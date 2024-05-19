import React from 'react';
import FooterItem from './FooterItem';
import twitter from '../../assets/icons/twitter.svg';
import fb from '../../assets/icons/fb.svg';
import googleplay from '../../assets/icons/google-playstore.webp';
import appstore from '../../assets/icons/ios-appstore.webp';
import './footer.css';

function Footer() {
  return (

    <div className='footer'>
      <FooterItem gridColumn='1 / 2' gridRow='1 / 2' classname="firstgridrow">Company</FooterItem>
      <FooterItem gridColumn='1 / 2' gridRow='2 / 3'  classname="footer-item">About Us</FooterItem>
      <FooterItem gridColumn='1 / 2' gridRow='3 / 4'  classname="footer-item">Careers</FooterItem>
      <FooterItem gridColumn='1 / 3' gridRow='4 / 5'  classname="footerlastrow"><p>@2023 STAR , All rights reserved.</p>Terms Of Use  Privacy Policy  FAQ <p></p></FooterItem>
      
      <FooterItem gridColumn='2 / 3' gridRow='1 / 2' classname="firstgridrow">View Website In</FooterItem>
      <FooterItem gridColumn='2 / 3' gridRow='2 / 3' classname="footer-item">English</FooterItem>
      
      <FooterItem gridColumn='3 / 4' gridRow='1 / 2' classname="firstgridrow">Need Help?</FooterItem>
      <FooterItem gridColumn='3 / 4' gridRow='2 / 3' classname="footer-item">Visit Help Center</FooterItem>
      <FooterItem gridColumn='3 / 4' gridRow='3 / 4' classname="footer-item">Share Feedback</FooterItem>
      
      <FooterItem gridColumn='4 / 5' gridRow='1 / 2' classname="firstgridrow">Connect With Us</FooterItem>
      <FooterItem gridColumn='4 / 5' gridRow='2 / 3' classname="footer-item">
        <div className='icons'><img src={fb} alt='facebook' />
        <img src={twitter} alt='twitter' /></div>
      </FooterItem>
      <FooterItem gridColumn='3 / 5' gridRow='4 / 5' classname="footerlastrow">
        <div className="image"> <img src={googleplay} alt='google play' />
        <img src={appstore} alt='app store' /></div>
       
      </FooterItem>
    </div>
    
  );
}

export default Footer;