import React from 'react';
import experiences from "../Experience/ExperienceItems.js";
import Card from "@material-ui/core/Card";

const ExperienceBody = () => {
    return (
        <div className="experience-body-container">
            {experiences.map(experience => {
                return (
                    <Card variant="outlined" style={{ padding: "40px", marginBottom: "10px", fontSize: "18px", backgroundColor: "#FFFFFF", borderRadius: "15px" }}>
                        <span style={{ fontWeight: "bolder" }}>{experience.experienceTitle}</span>
                        <br />
                        <span style={{ textDecoration: "underline" }}>{`${experience.experienceCompany} — ${experience.experienceLocation} — ${experience.experienceDuration}`}</span>
                        <br />
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
        </div>
    )
}

export default ExperienceBody;