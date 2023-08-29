import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./BooksTuition.css";

const BooksTuition = () => (
  <div
    className="app__bg__piano-keys app__wrapper section__padding "
    id="tuition"
  >
    <div className="app__tuition-content app__wrapper_info soft__background">
      <h7 className="subtext__cormorant">Tuition & Books</h7>

      {/* <h1 className="headtext_cormorant">What we believe in</h1> */}
      <div>
        {/* <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            sladkfjlakdjflksadjfkalsdfjasdlkfjsadfl;kasdfkjsdafl;adks
          </p>
        </div> */}
        <SubHeading title="TUITION" />

        <ul className="p__opensans">
          <li>30 minute weekly lessons: $175 / month</li>
          <li>45 minute weekly lessons: $240 / month</li>
          <li>1 hour weekly lessons: $290 / month</li>
        </ul>
        <br></br>
        {/* <p className="p__opensans">
          For months when there are only 3 lessons, there is a 5th lesson in an
          adjecent month. Otherwise, an event (recital or pizza party) will be
          scheduled.
        </p>
        <br></br> */}
        <p className="p__opensans">
          Tuition is due by the 8th day of the month, or the first lesson;
          whichever is first. There is a $5 late fee for tuition received late.
        </p>
        <br></br>
        <SubHeading title="BOOKS" />

        <p className="p__opensans">
          For your convenience, Crystal purchases most lesson materials for each
          student. A book deposit of $40 is collected at the beginning of the
          year for each student to cover materials throughout the year. Crystal
          will notify you when the purchased books exceed this amount, and an
          additional deposit will be due.
        </p>
      </div>
    </div>
  </div>
);

export default BooksTuition;
