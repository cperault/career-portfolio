import React, { useState } from 'react';
import jobs from "../Experience/ExperienceItems.js";
import schools from "../Education/EducationItems.js";
import Card from "@material-ui/core/Card";

const ExperienceBody = () => {
    const [experienceType, setExperienceType] = useState("experience-work");

    const toggleExperienceData = (element) => {
        //hydrate hook with clicked element to load the associated data
        setExperienceType(element.target.id);
        //get the ID of the clicked experience title
        let experienceDataLoaded = document.getElementById(element.target.id);
        //get elements for Work and Education so that we can apply CSS style changes
        let workData = document.getElementById("experience-work");
        let educationData = document.getElementById("experience-education");
        //toggle currently loaded data accordingly
        switch (experienceDataLoaded.id) {
            case 'experience-work':
                workData.style = "text-decoration: underline;";
                educationData.style = "text-decoration: none";
                break;
            case 'experience-education':
                workData.style = "text-decoration: none;";
                educationData.style = "text-decoration: underline;";
                break;
            default:
        }

    }
    return (
        <div className="experience-body-container">
            <div className="experience-type-options">
                <div id="experience-type">
                    <p id="experience-work" style={{ textDecoration: "underline" }} onClick={(element) => toggleExperienceData(element)}>Work</p>
                </div>
                <div id="experience-type">
                    <p id="experience-education" onClick={(element) => toggleExperienceData(element)}>Education</p>
                </div>
            </div>

            {experienceType === "experience-work" ? (

                jobs.map(experience => {
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
                })
            ) : (
                    schools.map(school => {
                        return (
                            <Card style={{ padding: "30px", paddingBottom: "5px", marginBottom: "10px", backgroundColor: "#FFFFFF", borderBottom: "solid #050505 3px", borderRadius: "15px" }}>
                                <span style={{ fontWeight: "bolder" }}>{school.schoolName}</span>
                                <br />
                                <span>{school.schoolAchievement}</span>
                                <br />
                                <span>{school.schoolAttendanceSpan}</span>
                                <br />
                                <span>{school.schoolLocation}</span>
                                <p>
                                    {school.schoolLearningSummary}
                                </p>
                            </Card>
                        )
                    })
                )}
        </div>
    )
}

export default ExperienceBody;