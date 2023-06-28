import leftct from "react";
import { SubHeading } from "../../components";

import { images } from "../../constants";
import "./Calender.css";

const Calender = () => (
  <div className="app__aboutus section__padding" id="calender">
    <h1 className="headtext__cormorant">Studio Calender</h1>
    <div className="app__aboutus-content">
      <SubHeading title="2023" />
      <div className="app__aboutus-content_about">
        {/* <img src={images.spoon} alt="about_spoon" className="spoon__img" /> */}
        <ul className="p__opensans grid_left">Lessons by Appointment</ul>
        <ul className="p__opensans grid_right ">July, August</ul>
        <ul className="p__opensans grid_left">Start of lessons</ul>
        <ul className="p__opensans grid_right ">Sept 18</ul>
        <ul className="p__opensans grid_left">Thanksgiving Week Vacation</ul>
        <ul className="p__opensans grid_right ">Nov 25 - Nov 29</ul>
        <ul className="p__opensans grid_left">Christmas Vacation</ul>
        <ul className="p__opensans grid_right ">Dec 23 - Jan 3</ul>
      </div>
      <SubHeading title="2024" />
      <div className="app__aboutus-content_about">
        <ul className="p__opensans grid_left">Presidents' Week Break</ul>
        <ul className="p__opensans grid_right ">Feb 19 - Feb 23</ul>
        <ul className="p__opensans grid_left">Spring Break</ul>
        <ul className="p__opensans grid_right ">Apr 8 - Apr 12</ul>
        <ul className="p__opensans grid_left">
          Last Day of School Year Lessons
        </ul>
        <ul className="p__opensans grid_right ">May 24</ul>
        <ul className="p__opensans grid_left">Lessons by Appointment</ul>
        <ul className="p__opensans grid_right ">June, July, and August</ul>
        {/* <button type="button" className="custom__button">Know More</button> */}
      </div>
    </div>
  </div>
);

export default Calender;
