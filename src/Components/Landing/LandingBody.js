import React from 'react';
import maman from "../../Media/mains-a-maman.jpeg";
const LandingBody = () => {
    return (
        <div className="landing-body-container">
            <img src={maman} height="400" width="350" />
            <div>
                <p>
                    I dedicate my life and career to my dear mother, Christine Germaine Roy.
                </p>
            </div>
        </div>
    )
}
export default LandingBody;