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


    <div className="app__newsletter-heading">
      <h1 className="headtext__cormorant">Locate us:</h1>
      <iframe
   src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.500946728754!2d75.82339781488334!3d26.919329083124687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6b03af9295f%3A0x5bb4333133c6968!2sAlbert%20Hall%20Museum!5e0!3m2!1sen!2sin!4v1668582805854!5m2!1sen!2sin'

   style={{ border: 0 }}                        //<-------
   allowFullscreen=''                           //<-------
   loading='lazy'
   referrerPolicy='no-referrer-when-downgrade'  //<-------
></iframe>    </div>
  </div>
);

export default Newsletter;

{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.500946728754!2d75.82339781488334!3d26.919329083124687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6b03af9295f%3A0x5bb4333133c6968!2sAlbert%20Hall%20Museum!5e0!3m2!1sen!2sin!4v1668582805854!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}