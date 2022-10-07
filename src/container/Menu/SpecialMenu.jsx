import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { data, images } from "../../constants";
import "./SpecialMenu.css";



const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      {/* <SubHeading title="know your past" /> */}
      {/* <h1 className="headtext__cormorant">history</h1> */}
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Architecture</p>
        <div >
          <p class="arc_text"> “To provide meaningful architecture is not to parody history, but to articulate it.”- Daniel Libeskind {"\n"} 

            The pride of Jaipur, Albert Hall Museum is a true representation of the Indo-Saracenic style of architecture and design. 
            This revival style architecture was used by the British in India during the 19th century and was mostly used for government and public buildings.

            With stylish and beautiful decorative elements, the museum is a classic example of architectural finesse of that time. 
            Enjoy the intricate designs on museum exteriors with typical ‘Chhatri’ style towers with absolutely fine craftsmanship.

             #Trivia- The murals depict the ancient civilizations of the Babylonian era, Chinese, Greek, amongst others.</p>
         
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.sword} alt="sword__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">History</p>
        <div >
          <p class="history_text">
            “Real museums are places where Time is transformed into Space.” – Orhan Pamuk {"\n"} 

            An architectural delight that has captured the attention of many a ruler and wanderlust, 
            the construction of Albert Hall Museum started in the year 1876. With the foundation stone being laid during the 
            visit of Albert Edward (King Edward VII), the Prince of Wales, there was a lot of uncertainty that 
            revolved around the actual purpose of this structure.

            #Trivia- It also known as Government Central Museum and is located in Ram Niwas garden.

            After a lot of brainstorming, it was the suggestion of Dr. Thomas Holbein Hendley,
             the then resident surgeon, to utilise this space to display the craftsmanship of local artisans.
              A thought that created interest in Sawai Madho Singh II in 1880, led to the, now gorgeous, 
              construction of a museum of Industrial Arts for the locals.

          </p>
         
        </div>
      </div>
    </div>

    
  </div>
);

export default SpecialMenu;
