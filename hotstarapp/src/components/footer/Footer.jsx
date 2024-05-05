import React from 'react';
import FooterItem from './FooterItem';
import googleplay from '../../media/icons/google-playstore.webp';
import appstore from '../../media/icons/ios-appstore.webp';
import './footer.css';

function Footer() {
  return (
    <div className='footer'>
      <FooterItem gridColumn='1 / 2' gridRow='1 / 2' classname="firstgridrow">Company</FooterItem>
      <FooterItem gridColumn='1 / 2' gridRow='2 / 3'  classname="footer-item">About Us</FooterItem>
      <FooterItem gridColumn='1 / 2' gridRow='3 / 4'  classname="footer-item">Careers</FooterItem>
      <FooterItem gridColumn='1 / 2' gridRow='4 / 5'  classname="footer-item">@2023 STAR , All rights reserved</FooterItem>
      
      <FooterItem gridColumn='2 / 3' gridRow='1 / 2' classname="firstgridrow">View Website In</FooterItem>
      <FooterItem gridColumn='2 / 3' gridRow='2 / 3' classname="footer-item">English</FooterItem>
      
      <FooterItem gridColumn='3 / 4' gridRow='1 / 2' classname="firstgridrow">Need Help?</FooterItem>
      <FooterItem gridColumn='3 / 4' gridRow='2 / 3' classname="footer-item">Visit Help Center</FooterItem>
      <FooterItem gridColumn='3 / 4' gridRow='3 / 4' classname="footer-item">Share Feedback</FooterItem>
      
      <FooterItem gridColumn='4 / 5' gridRow='1 / 2' classname="firstgridrow">Connect With Us</FooterItem>
      <FooterItem gridColumn='4 / 5' gridRow='2 / 3' classname="footer-item">
        <img src='' alt='facebook' />
        <img src='' alt='twitter' />
      </FooterItem>
      <FooterItem gridColumn='4 / 5' gridRow='4 / 5' classname="footer-item">
        <div className="image"> <img src={googleplay} alt='google play' />
        <img src={appstore} alt='app store' /></div>
       
      </FooterItem>
    </div>
  );
}

export default Footer;