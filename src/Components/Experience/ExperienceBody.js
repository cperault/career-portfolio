import React from 'react';
import experiences from "../Experience/ExperienceItems.js";
import Card from "@material-ui/core/Card";

const ExperienceBody = () => {
    return (
        <div className="experience-body-container">
            {experiences.map(experience => {
                return (
                    <Card style={{ padding: "30px", paddingBottom: "5px", marginBottom: "10px", backgroundColor: "#FFFFFF", borderBottom: "solid #050505 3px", borderRadius: "15px" }}>
                        <span style={{ fontWeight: "bolder" }}>{experience.experienceTitle}</span>
                        <br />
                        <span>{experience.experienceCompany}</span>
                        <br />
                        <span>{experience.experienceDuration}</span>
                        <br />
                        <span>{experience.experienceLocation}</span>
                        <ul className="experience-items-ul">
                            {experience.experienceDescription.map(description => {
                                return (
                                    <li>{description}</li>
                                )
                            })}
                        </ul>
                    </Card>
                )
            })}
        </div >
    )
}

export default ExperienceBody;