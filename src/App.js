import React, { useState } from "react";

import {
  Calender,
  Chef,
  Practice,
  Footer,
  Gallery,
  Header,
  Intro,
  BooksTuition,
  Contact,
} from "./container";
import { Navbar } from "./components";
import "./App.css";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <Chef />
    <Calender />
    <BooksTuition />
    <Practice />
    <Contact />
    {/* <Intro />
    <Laurels />
    <Gallery />
    <FindUs /> */}
    <Footer />
  </div>
);

export default App;
