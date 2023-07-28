import React from "react";

import { images } from "../../constants";

const SubHeading = ({ title }) => (
  <div>
    <p className="subtitle__opensans">{title}</p>
    <img src={images.spoon} alt="spoon" className="spoon_img" />
  </div>
);

export default SubHeading;
