import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Practice.css";

const Practice = () => (
  <div className="app__bg app__wrapper-no-column section__padding" id="lessons">
    <div className="app__wrapper_img app__wrapper_img-reverse" id="keys">
      {/* <img src={images.keys} alt="pianokeys" /> */}
    </div>

    <div className="app__wrapper_info" id="practice">
      <h7 className="subtext__cormorant">Lesson & Practice Guidelines</h7>

      {/* <SubHeading title="Students' Practice Guidelines" /> */}
      {/* <h1 className="headtext_cormorant">What we believe in</h1> */}
      <div className="lesson-content">
        {/* <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            sladkfjlakdjflksadjfkalsdfjasdlkfjsadfl;kasdfkjsdafl;adks
          </p>
        </div> */}
        <SubHeading title="Lessons" />

        <p className="p__opensans">
          &emsp;Weekly lessons are scheduled at a specific time for each
          student. Students should arrive at their scheduled lesson on time, as
          there is usually a student immediately following. Please bring all
          lesson materials that we may use in a small tote bag. If you
          occasionally have a conflict with the lesson, with enough advance
          notice, we can often find an alternate lesson time for that week.
        </p>
        <br></br>
        <SubHeading title="Practice" />

        <p className="p__opensans">
          &emsp;Students should practice on a regular basis (5 days/ week) and
          must have an acoustic piano (with strings, not electric) in order to
          study with Crystal.
        </p>
        <br></br>
        <p className="p__opensans">&emsp;Recommended practice times:</p>
        <ul className="p__opensans">
          <li>Beginners & Elementary: 10-20 mins / day</li>
          <li>Early & Mid Intermediate: 25-40 mins / day</li>
          <li>Advanced: 60 mins / day</li>
        </ul>
        <br></br>
        <p className="p__opensans">
          &emsp;Parents, please establish and gently support a regular daily
          practice schedule.
        </p>
      </div>
    </div>
  </div>
);

export default Practice;
