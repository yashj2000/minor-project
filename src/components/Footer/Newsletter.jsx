import React from "react";

import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

// const raiseInvoiceClicked = () =>{
//   const url = 'somesite.com?data=yourDataToSend';
//   window.open(url, '_blank');
// }

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Albert Hall Newsletter" />
      <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      {/* <input type="email" placeholder="Enter your email address" /> */}
      <a href="https://young-earth-66006.herokuapp.com/" target="_blank"><button type="button" className="custom__button">
        Subscribe
      </button></a>

    </div>

    <div className="app__newsletter-heading">
      <h1 className="headtext__cormorant">Give us your feedback</h1>
      <p className="p__opensans">How was your visit to Albert Hall Museum?</p>
    </div>
    <div className="app__newsletter-input flex__center">

      <a href="https://polar-shelf-60170.herokuapp.com/" target="_blank"><button type="button" className="custom__button">
        Comment
      </button></a>
    </div>


  </div>
);

export default Newsletter;
