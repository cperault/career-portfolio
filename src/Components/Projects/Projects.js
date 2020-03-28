import React from 'react';
import Roofmasters from "./Roofmasters.js";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Open from "@material-ui/icons/ExpandMoreTwoTone";

const Projects = () => {
    return (
        <React.Fragment>
            <div className="projects-body-container">
                <h3>Below you can read about some of the projects I&apos;ve completed.</h3>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<Open style={{ color: "#FFFFFF" }} />}
                        style={{ borderRadius: "4px", color: "#FFFFFF", backgroundColor: "#1B9AAA" }}>
                        Roofmasters
                        </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Roofmasters />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <h3>Do you have any project ideas you&apos;d like to share? Feel free to <a href="/contact">send me a message</a>.</h3>
            </div>
        </React.Fragment>
    )
}

export default Projects;