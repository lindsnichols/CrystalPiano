import React from 'react';

import { images } from '../../constants';
import './Calender.css';

const Calender = () => (
  <div className="app__aboutus flex__center section__padding" id="calender">
    {/* <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div> */}

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Closure Dates</h1>
        {/* <img src={images.spoon} alt="about_spoon" className="spoon__img" /> */}
        <ul className="p__opensans">School Holiday ~August 4th</ul>
        <ul className="p__opensans">Halloween ~October 31st</ul>
        {/* <button type="button" className="custom__button">Know More</button> */}
      </div>

      <div className="app__aboutus-content_knife flex__center">
        {/* <img src={images.knife} alt="about_knife" /> */}
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Event Dates</h1>
        {/* <img src={images.spoon} alt="about_spoon" className="spoon__img" /> */}
        <ul className="p__opensans">August 4th ~Piano Party</ul>
        <ul className="p__opensans">October 31st ~Recital</ul>

        {/* <button type="button" className="custom__button">Know More</button> */}
      </div>
    </div>
  </div>
);

export default Calender;


