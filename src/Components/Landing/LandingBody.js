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
                        <p>I&apos;m a developer living in the heart of the Midwest. My favorite thing to do alone is watch horror in the dark. One day, I <span class="emphasis">will</span> have a corgi.</p>
                        <p>I&apos;m currently in search of a new opportunity! My ideal work environment is one where there is:</p>
                        <ul>
                            <li><span class="values">Acceptance</span>; I believe in accepting and respecting one another, including our differences.</li>
                            <li><span class="values">Communication</span>; a goal cannot be met efficiently with a lack of communication between team members.</li>
                            <li><span class="values">Understanding</span>; I believe that it is important to make an effort to understand one another. Language&mdash;in any form&mdash;is beautiful when treated with utmost care; slow down, rephrase your thought, give clearer expectations.</li>
                            <li><span class="values">Transparency</span>; always be honest with your intentions. An average business will often make a decision based on profit. A great business understands that business is nothing without the customers or its employees. A fantastic business can do all three. </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LandingBody;