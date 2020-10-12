import React, { useState } from "react";
import { jobs } from "../Experience/ExperienceItems.js";
import { schools } from "../Education/EducationItems.js";

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
      case "experience-work":
        workData.style = "color: white; text-decoration: underline;";
        educationData.style = "color: white; text-decoration: none";
        break;
      case "experience-education":
        workData.style = "color: white; text-decoration: none;";
        educationData.style = "color: white; text-decoration: underline;";
        break;
      default:
    }
  };
  return (
    <div className="experience-body-container">
      <div className="experience-type-options">
        <div id="experience-type">
          <p
            id="experience-work"
            style={{ color: "white", textDecoration: "underline" }}
            onClick={(element) => toggleExperienceData(element)}
          >
            Professional
          </p>
        </div>
        <div id="experience-type">
          <p
            id="experience-education"
            style={{ color: "white" }}
            onClick={(element) => toggleExperienceData(element)}
          >
            Educational
          </p>
        </div>
      </div>

      {experienceType === "experience-work"
        ? jobs.map((experience) => {
            return (
              <div className="work-div">
                <span style={{ fontWeight: "bolder" }}>
                  {experience.experienceTitle}
                </span>
                <br />
                <span>{experience.experienceCompany}</span>
                <br />
                <span>{experience.experienceDuration}</span>
                <br />
                <span>{experience.experienceLocation}</span>
                <ul className="experience-items-ul">
                  {experience.experienceDescription.map((description) => {
                    return <li>{description}</li>;
                  })}
                </ul>
              </div>
            );
          })
        : schools.map((school) => {
            return (
              <div className="education-div">
                <span style={{ fontWeight: "bolder" }}>
                  {school.schoolName}
                </span>
                <br />
                <span>{school.schoolAchievement}</span>
                <br />
                <span>{school.schoolAttendanceSpan}</span>
                <br />
                <span>{school.schoolLocation}</span>
                <p>{school.schoolLearningSummary}</p>
              </div>
            );
          })}
    </div>
  );
};

export default ExperienceBody;
