import React from "react";
import Roofmasters from "./Roofmasters.js";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Open from "@material-ui/icons/ExpandMoreTwoTone";
import PocketBudget from "./PocketBudget.js";
import PantryStock from "./PantryStock.js";

const Projects = () => {
  return (
    <React.Fragment>
      <div className="projects-body-container">
        <h3>What I&apos;m working on:</h3>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<Open style={{ color: "#FFFFFF" }} />}
            style={{
              borderRadius: "5px",
              color: "#FFFFFF",
              backgroundColor: "#1B9AAA",
            }}
          >
            Cody Morris Exteriors
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ backgroundColor: "white" }}>
            <Roofmasters />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<Open style={{ color: "#FFFFFF" }} />}
            style={{
              borderRadius: "5px",
              color: "#FFFFFF",
              backgroundColor: "#1B9AAA",
            }}
          >
            Pocket Budget
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ backgroundColor: "white" }}>
            <PocketBudget />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<Open style={{ color: "#FFFFFF" }} />}
            style={{
              borderRadius: "5px",
              color: "#FFFFFF",
              backgroundColor: "#1B9AAA",
            }}
          >
            PantryStock
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ backgroundColor: "white" }}>
            <PantryStock />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <h3>
          Do you have any project ideas you&apos;d like to share? Feel free to{" "}
          <a href="/contact">send me a message</a>.
        </h3>
      </div>
    </React.Fragment>
  );
};

export default Projects;
