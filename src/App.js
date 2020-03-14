import React from 'react';
import "./Styling/aesthetic.css";
import TopNav from "./Components/Navigation/TopNav.js";
import LandingBody from "./Components/Landing/LandingBody.js";

const App = () => {
  return (
    <div className="portfolio-wrapper">
      <TopNav />
      <LandingBody />
    </div>
  );
}

export default App;
