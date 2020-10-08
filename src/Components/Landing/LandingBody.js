import React from 'react';
import Self from "../../Media/self.png";
const LandingBody = () => {
    return (
        <div className="landing-body-container">
            <div className="landing-body-div">
                <img src={Self} height="450" width="300" alt="A face portrait of Christopher wearing burgundy plaid" />
                <div className="landing-body-bio">
                    <div>
                        <h1>Welcome</h1>
                    </div>
                    <div>
                        <p>The name&apos;s Christopher. I&apos;m a developer currently living in the heart of the Midwest with wings eager to soar. My favorite thing to do is watch horror in the dark&mdash;alone.</p>
                        <p>I&apos;m looking for my next amazing opportunity, preferably using PHP and JavaScript/React, but I&apos;m always excited to pick up new technologies.</p>
                        <h2>Personal Core Values:</h2>
                        <ul>
                            <li><span class="values">Acceptance</span>; we all have different backgrounds, opinions, and beliefs. Despite our differences, we have common ground&mdash;our humanity.</li>
                            <li><span class="values">Communication</span>; a goal cannot be met efficiently with a lack of communication.</li>
                            <li><span class="values">Transparency</span>; always be honest with your intentions. An average business will often make a decision based on profit. A great business understands that business is nothing without the customers or its employees. A formidable business can do both. </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LandingBody;