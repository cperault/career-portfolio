import React from 'react';
import Self from "../../Media/self.png";
const LandingBody = () => {
    return (
        <div className="landing-body-container">
            <div className="landing-body-div">
                <img src={Self} height="450" width="300" alt="A face portrait of Christopher wearing burgundy plaid" />
                <div className="landing-body-bio">
                    <div>
                        <h1>Hi! I'm Christopher.</h1>
                    </div>
                    <div>
                        <p>I&apos;m a web developer living in the heart of the Midwest. My favorite thing to do is watch horror alone in the dark. One day, I will have a corgi.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LandingBody;