import leftct from "react";
import { SubHeading } from "../../components";

import { images } from "../../constants";
import "./Calender.css";

const Calender = () => (
  <div className="app__aboutus section__padding" id="calender">
    <h1 className="app__calender-h1">Studio Schedule 2023-2024 </h1>
    <div className="app__aboutus-content">
      {/* <SubHeading title="2023" /> */}
      <div className="app__aboutus-content_about">
        {/* <img src={images.spoon} alt="about_spoon" className="spoon__img" /> */}
        <ul className="p__opensans_calender grid_left">
          Lessons by Appointment
        </ul>
        <ul className="p__opensans grid_right ">July, August 2023</ul>
        <ul className="p__opensans_calender grid_left">Start of lessons</ul>
        <ul className="p__opensans grid_right ">September 18, 2023</ul>
        <ul className="p__opensans_calender grid_left">
          Thanksgiving Week Vacation
        </ul>
        <ul className="p__opensans grid_right ">
          November 25 - November 29, 2023
        </ul>
        <ul className="p__opensans_calender grid_left">Christmas Vacation</ul>
        <ul className="p__opensans grid_right ">
          December 23 - January 3, 2023/4
        </ul>
        {/* </div>
      <SubHeading title="2024" />
      <div className="app__aboutus-content_about"> */}
        <ul className="p__opensans_calender grid_left ">Lessons Resume</ul>
        <ul className="p__opensans grid_right ">January 4, 2024</ul>
        <ul className="p__opensans_calender grid_left">
          Presidents' Week Break
        </ul>
        <ul className="p__opensans grid_right ">
          February 19 - February 23, 2024
        </ul>
        <ul className="p__opensans_calender grid_left">Spring Break</ul>
        <ul className="p__opensans grid_right ">April 8 - April 12, 2024</ul>
        <ul className="p__opensans_calender grid_left">
          Last Day of School Year Lessons
        </ul>
        <ul className="p__opensans grid_right ">May 24, 2024</ul>
        <ul className="p__opensans_calender grid_left">
          Lessons by Appointment
        </ul>
        <ul className="p__opensans grid_right ">
          June, July, and August, 2024
        </ul>
        {/* <button type="button" className="custom__button">Know More</button> */}
      </div>
    </div>
  </div>
);

export default Calender;
