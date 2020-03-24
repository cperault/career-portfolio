import React from 'react';
import "./Styling/aesthetic.css";
import TopNav from "./Components/Navigation/TopNav.js";
import LandingBody from "./Components/Landing/LandingBody.js";
import Projects from "./Components/Projects/Projects.js";
//import AboutBody from "./Components/About/AboutBody.js";
import ExperienceBody from "./Components/Experience/ExperienceBody.js";
import ContactBody from "./Components/Contact/ContactBody.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="portfolio-wrapper">
        <TopNav />
        <Switch>
          <Route exact path={["/", "/home", "/landing"]}>
            <LandingBody />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path="/Experience">
            <ExperienceBody />
          </Route>
          {/* <Route path="/About">
            <AboutBody />
          </Route> */}
          <Route path="/Contact">
            <ContactBody />
          </Route>
          <Route path="*">
            <LandingBody />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
