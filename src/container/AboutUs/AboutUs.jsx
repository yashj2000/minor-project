import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    {/* <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div> */}

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <img src={images.G} alt="G_overlay" width="400px" />
      </div>

      {/* <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div> */}

      <div className="app__aboutus-content_history">
        {/* <h1 className="headtext__cormorant">Our History</h1>
        <p className="p__opensans">
          An architectural delight that has captured the attention of many a ruler and wanderlust,
          the construction of Albert Hall Museum started in the year 1876.
          With the foundation stone being laid during the visit of Albert Edward (King Edward VII),
          the Prince of Wales, there was a lot of uncertainty that revolved around the actual purpose of this structure.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button> */}
        <h1 className="headtext__cormorant">About</h1>
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristi  que. In sed odio nec
          aliquet eu proin mauris et.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristi  que. In sed odio nec
          aliquet eu proin mauris et.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristi  que. In sed odio nec
          aliquet eu proin mauris et.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristi  que. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>

        
      </div>
    </div>
  </div>
);

export default AboutUs;
