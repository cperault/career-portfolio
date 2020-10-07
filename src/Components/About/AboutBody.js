import React from 'react';
import maman from "../../Media/mains-a-maman.jpeg";
const AboutBody = () => {
    return (
        <div className="about-body-container">
            <img src={maman} height="400" width="350" alt="Christopher's elderly mother's left hand lying next to crossed furry gray cat paws on a dark beige cushion" />
            <div>
                <p>
                    I dedicate my life and career to my dear mother, Christine Germaine Roy.
                </p>
            </div>
        </div>
    )
}

export default AboutBody;