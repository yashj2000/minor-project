import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorant">Attractions</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <p className="things_t">
            <ul>
              <li>Egyptian Mummy</li>
              <li>Pottery</li>
              <li>Figurines and sculptures</li>
              <li>Murals</li>
              <li>Carpets and Textiles</li>
            </ul>
          </p>
        </div>
      </div>


    </div>
  </div>
);

export default Chef;
