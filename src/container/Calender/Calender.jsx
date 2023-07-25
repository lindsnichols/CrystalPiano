import leftct from "react";
import { SubHeading } from "../../components";

import { images } from "../../constants";
import "./Calender.css";

const Calender = () => (
  <div className="app__aboutus section__padding app__wrapper" id="calender">
    <h1 className="app__calender-h1">Studio Schedule </h1>

    <div className="app__aboutus-content_about">
      {/* <img src={images.spoon} alt="about_spoon" className="spoon__img" /> */}
      <div className="p__opensans grid_left">Lessons by Appointment </div>
      <div className="p__opensans grid_right ">July, August 2023</div>
      <div className="p__opensans grid_left">Start of lessons</div>
      <div className="p__opensans grid_right ">September 18, 2023</div>
      <div className="p__opensans grid_left">Thanksgiving Week Vacation</div>
      <div className="p__opensans grid_right ">
        November 25 - November 29, 2023
      </div>
      <div className="p__opensans grid_left">Christmas Vacation</div>
      <div className="p__opensans grid_right ">
        December 23 - January 3, 2023/4
      </div>
      {/* </div>
      <SubHeading title="2024" />
      <div className="app__aboutus-content_about"> */}
      <div className="p__opensans grid_left ">Lessons Resume</div>
      <div className="p__opensans grid_right ">January 4, 2024</div>
      <div className="p__opensans grid_left">Presidents' Week Break</div>
      <div className="p__opensans grid_right ">
        February 19 - February 23, 2024
      </div>
      <div className="p__opensans grid_left">Spring Break</div>
      <div className="p__opensans grid_right ">April 8 - April 12, 2024</div>
      <div className="p__opensans grid_left">
        Last Day of School Year Lessons
      </div>
      <div className="p__opensans grid_right ">May 24, 2024</div>
      <div className="p__opensans grid_left">Lessons by Appointment</div>
      <div className="p__opensans grid_right ">
        June, July, and August, 2024
      </div>
      {/* <button type="button" className="custom__button">Know More</button> */}
    </div>
    {/* <div className="secondrow">
      <div className="p__opensans">June, July, and August, 2024</div>
    </div> */}
  </div>
);

export default Calender;
