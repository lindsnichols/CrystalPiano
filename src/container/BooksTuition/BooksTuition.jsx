import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./BooksTuition.css";

const BooksTuition = () => (
  <div
    className="app__bg__piano-keys app__wrapper section__padding "
    id="practice"
  >
    <div className="app__wrapper_info">
      <SubHeading title="Tuition and Books" />
      {/* <h1 className="headtext_cormorant">What we believe in</h1> */}
      <div className="app__chef-content">
        {/* <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            sladkfjlakdjflksadjfkalsdfjasdlkfjsadfl;kasdfkjsdafl;adks
          </p>
        </div> */}
        <p className="p__opensans">
          &emsp;Crystal offers private piano lessons in the Belwood
          neighborhoood of Los Gatos.
        </p>
        <br></br>
        <p className="p__opensans">
          &emsp;She loves to teach many types of music including classical, pop,
          blues, jazz & improvisation with leadsheets, and rock... along with
          the theory and technique to support it.
        </p>
        <br></br>
        <p className="p__opensans">
          &emsp;Her wish is to help each student find a connection to one or
          more styles of music that they will enjoy playing for life.
        </p>
      </div>
    </div>
  </div>
);

export default BooksTuition;
