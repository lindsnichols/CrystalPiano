import React from 'react';

import { Calender, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <Chef />
    <Calender />
    {/* <SpecialMenu />  */}
    
    {/* <Intro />
    <Laurels />
    <Gallery />
    <FindUs /> */}
    <Footer />
  </div>
);

export default App;
