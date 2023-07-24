import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Practice.css";

const Practice = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse" id="keys">
      {/* <img src={images.keys} alt="pianokeys" /> */}
    </div>

    <div className="app__wrapper_info" id="practice">
      <h7 className="subtext__cormorant">Practice Guidelines</h7>

      {/* <SubHeading title="Students' Practice Guidelines" /> */}
      {/* <h1 className="headtext_cormorant">What we believe in</h1> */}
      <div className="lesson-content">
        {/* <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            sladkfjlakdjflksadjfkalsdfjasdlkfjsadfl;kasdfkjsdafl;adks
          </p>
        </div> */}
        <p className="p__opensans">
          &emsp;Students should practice on a regular basis (5 days/ week) and
          must have an acoustic piano (with strings, not electric) in order to
          study with Crystal.
        </p>
        <br></br>
        <p className="p__opensans">&emsp;Recommended practice times:</p>
        <ul></ul>
        <br></br>
        <p className="p__opensans">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
          tempora nostrum asperiores autem veritatis repellat voluptate nesciunt
          eveniet iure explicabo error quidem laborum doloribus numquam
          laudantium, fugiat voluptatum hic maxime.
        </p>
      </div>
    </div>
  </div>
);

export default Practice;
