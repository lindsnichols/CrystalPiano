import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";

import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding" id="about">
    <div
      className="app__wrapper_img app__wrapper_img-reverse"
      id="crystalphoto"
    >
      <img src={images.chef} alt="teacher" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="ABOUT CRYSTAL" />
      {/* <h1 className="headtext_cormorant">What we believe in</h1> */}
      <div className="app__chef-content">
        {/* <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            sladkfjlakdjflksadjfkalsdfjasdlkfjsadfl;kasdfkjsdafl;adks
          </p>
        </div> */}
        <p className="p__opensans">
          Crystal offers private piano lessons in the Belwood neighborhoood of
          Los Gatos.
        </p>
        <br></br>
        <p className="p__opensans">
          She enjoys teaching many types of music including classical, pop,
          blues, jazz & improvisation with leadsheets, and rock... along with
          the theory and technique to support it. Her wish is to help each
          student find a connection to styles of music that they will enjoy
          playing for life.
        </p>
        <br></br>
        <p className="p__opensans">
          Crystal is active in CA Professional Music Teacher's Santa Clara
          Valley (
          <a href="https://www.capmt-scv.org/" target="_blank" rel="noreferrer">
            CAPMT SCV
          </a>
          ), the local chapter of Music Teachers' National Association (
          <a href="https://www.mtna.org/" target="_blank" rel="noreferrer">
            MTNA
          </a>
          ). She served as Secretary in 2021-2023, and currently serves as
          vice-chair for MusicIN Evaluations & Artist Competition. Eligible
          students that want to enroll in{" "}
          <a
            href="https://www.capmt-scv.org/student-programs#:~:text=MusicIN%20Evaluations%20%26%20Artist%20Competition"
            target="_blank"
            rel="noreferrer"
          >
            evaluations
          </a>{" "}
          are encouraged to.
        </p>
      </div>
    </div>
  </div>
);

export default Chef;
