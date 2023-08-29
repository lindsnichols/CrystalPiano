import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Header.css";

const Header = () => (
  <div className="app__wrapper section__padding app__bg__welcome" id="home">
    <div className="app__wrapper_info">
      {/* <h7 className="subtext__cormorant">Piano lessons in Los Gatos. </h7> */}
      <SubHeading title=" PIANO IN BELWOOD | LOS GATOS" />
      <h1 className="app__header-h1">Classical. Blues. Jazz. Pop. Rock.</h1>
    </div>

    {/* <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div> */}
  </div>
);

export default Header;
