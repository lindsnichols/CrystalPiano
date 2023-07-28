import React from "react";
import { FooterOverlay } from "../../components";
import { FiInstagram } from "react-icons/fi";

import "./Footer.css";
import { images } from "../../constants";

const Footer = () => (
  <div className="app__footer app__bg section__padding">
    {/* <div className="app__aboutus-overlay flex__center">
      <img src={images.pianokeysbg} alt="piano_keys_overlay" />
    </div> */}
    {/* <FooterOverlay /> */}
    <div className="app__footer-links">
      {/* <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Address</p>
        <p className="p__opensans">Phone Number</p>
      </div> */}
      <div className="app__footer-links_logo">
        <img src={images.logo} alt="footer_logo" />
        {/* <p className="p__opensans">Inspirational Quote</p>
        <div className="app__footer-links_icons">
          <FiInstagram />
        </div> */}
      </div>
      {/* <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Hours</p>
      </div> */}
    </div>
    {/* <div className="footer__copyright">
      <p className="p__opensans">2021 CNPiano. All Rights Reserved.</p>
    </div> */}
  </div>
);

export default Footer;
