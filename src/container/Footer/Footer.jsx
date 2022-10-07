import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="contact">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Ram Niwas Garden, Ashok Nagar, Jaipur, Rajasthan, 302001, India</p>
        <p className="p__opensans">0141 2570 099</p>
        <p className="p__opensans">0141 2570 098</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">
          &quot;The best introduction to art is to stroll through a museum.
The more art you see, the more you’ll learn to define your own taste.&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/TheAlbertHallMuseum" target="_blank"><FiFacebook /></a>
          <a href="https://twitter.com/MuseumHall" target="_blank"><FiTwitter /></a>
          <a href="https://www.instagram.com/alberthallmuseumjaipur/" target="_blank"><FiInstagram /></a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Open Hours</h1>
        <p className="p__opensans">Morning:</p>
        <p className="p__opensans">09:00 AM - 5:00 PM</p>
        <p className="p__opensans">Night:</p>
        <p className="p__opensans">07:00 PM - 10:00 PM</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">Made by Vanshika, Vivek, Yash & Yashwant.</p>
    </div>
  </div>
);

export default Footer;
