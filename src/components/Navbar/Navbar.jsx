import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineX } from "react-icons/hi";

import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="app.logo" />
      </div>
      <ul className="app__navbar-links">
        {/* <li className="p__opensans">
          <a href="#home">Home</a>
        </li> */}
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#calender"> Studio Calendar</a>
        </li>
        <li className="p__opensans">
          <a href="#tuition">Tuition</a>
        </li>
        <li className="p__opensans">
          <a href="#lessons">Lessons</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>

        {/* <li className="p__opensans"><a href="#gallery">Gallery</a></li> */}
      </ul>
      <div className="app__navbar-contact">
        {/* <a href="#getintouch" className="p__opensans">Get In Touch</a> */}
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <HiOutlineX
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans" onClick={() => setToggleMenu(false)}>
                <a href="#about">About</a>
              </li>
              <li className="p__opensans" onClick={() => setToggleMenu(false)}>
                <a href="#calender">Studio Calendar</a>
              </li>
              <li className="p__opensans" onClick={() => setToggleMenu(false)}>
                <a href="#tuition">Tuition</a>
              </li>
              <li className="p__opensans" onClick={() => setToggleMenu(false)}>
                <a href="#lessons">Lessons</a>
              </li>
              {/* <li className="p__opensans" onClick={() => setToggleMenu(false)}>
                <a href="#gallery">Gallery</a>
              </li> */}
              <li className="p__opensans" onClick={() => setToggleMenu(false)}>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
