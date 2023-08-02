import React, { useState } from "react";
import happystreetholidays from "../../Assets/Img/Logo/logo-for-happy-street-holidays.png";
import calliconnav from "../../Assets/Img/Social Media/call-icon-nav.png";
import whatsappicon from "../../Assets/Img/Social Media/icon-whatsapp.png";
import instagramicon from "../../Assets/Img/Social Media/instagram-icon.png";
import facebookicon from "../../Assets/Img/Social Media/facebook-icon.png";
import youtubeicon from "../../Assets/Img/Social Media/icon-youtube.png";

import "./NavBarHolidays.css";

const NavBarHolidays = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="Navbar">
        <span className="nav-logo">
          <img
            className="main-logo-for-the-website"
            src={happystreetholidays}
            alt="happystreetholidays"
            srcset=""
          />
        </span>
        <div className={`nav-items ${isOpen && "open"}`}>
          <a href="/home">Home</a>
          <a href="/about">Shop</a>
          <a href="/service">About</a>
          <a href="/contact">Contact</a>
        </div>
        {/* right section navbar for contact and social media*/}
        <div className="specific-right-side-for-navbar-including-callicon-and-social-media-icons">
          {/* phone number and the icon */}
          <div className="icon-for-phone-number">
            <img
              className="call-icon-navbar"
              src={calliconnav}
              alt="call-icon-nav"
              srcset=""
            />
            <p className="phone-number-for-the-contact-n">+91 8056743210</p>
          </div>
          {/* social media icons for the navbar */}
          <div className="social-media-icons-for-navbar">
            <img src={whatsappicon} alt="whatsappicon" srcset="" />
            <img src={instagramicon} alt="instagramicon" srcset="" />
            <img src={facebookicon} alt="facebookicon" srcset="" />
            <img src={youtubeicon} alt="youtubeicon" srcset="" />
          </div>
        </div>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
    </div>
  );
};

export default NavBarHolidays;
