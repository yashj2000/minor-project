import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home" >
    <div className="app__wrapper_info">
      <SubHeading title="Glimpse of the old" />
      <h1 className="app__header-h1">Burst of Cultural Escapades</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Get an aphrodisiac feel of culture and heritage, all encompassed carefully at the Albert Hall Museum in Jaipur. 
        Known for its sombre collection of artefacts and a history as rich as the state itself, 
        the Albert Hall Museum holds to be a treat to yearning eyes. 
        With absolutely stunning architecture and intricate design, this museum is the pride of Jaipur in every measure.{" "}
      </p>
      {/* <button type="button" className="custom__button">
        Explore Menu
      </button> */}
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
