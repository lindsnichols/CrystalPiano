import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Practice.css";

const Practice = () => (
  <div className="app__bg app__wrapper section__padding" id="lessons">
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
        <SubHeading title="LESSONS" />

        <p className="p__opensans">
          Students should arrive punctually to their scheduled lesson to receive
          the full instruction time. Please bring all lesson materials that we
          may use in a small tote bag.
        </p>
        <br></br>
        <p className="p__opensans">
          If you occasionally have a conflict with the lesson, with enough
          advance notice, we can often find an alternate lesson time for that
          week.
        </p>
        <br></br>
        <SubHeading title="PRACTICE" />

        <p className="p__opensans">
          Students should practice on a regular basis (5 days / week) and need
          an acoustic piano (with strings, not electric) in order to study with
          Crystal.
        </p>
        <br></br>
        <p className="p__opensans">&emsp;Recommended practice times:</p>
        <ul className="p__opensans">
          <li>Beginners & Elementary: 10 - 20 mins / day</li>
          <li>Early & Mid Intermediate: 25 - 40 mins / day</li>
          <li>Advanced: 60 mins / day</li>
        </ul>
        <br></br>
        <p className="p__opensans">
          Parents, please establish and gently support a regular daily practice
          schedule.
        </p>
      </div>
    </div>
  </div>
);

export default Practice;
