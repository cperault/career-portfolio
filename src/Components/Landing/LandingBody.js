import React from "react";
import Self from "../../Media/self.png";
const LandingBody = () => {
  return (
    <div className="landing-body-container">
      <div className="landing-body-div">
        <img
          src={Self}
          height="450"
          width="300"
          alt="A face portrait of Christopher wearing burgundy plaid"
        />
        <div className="landing-body-bio">
          <div>
            <h1>Welcome</h1>
          </div>
          <div>
            <p>
              Friends call me Christophe, acquaintances call me Christopher, and
              lazies call me Chris. I&apos;m a developer currently living in the
              heart of the Midwest. My favorite thing to do is watch horror in
              the dark&mdash;alone. Pixel art is a new obsession of mine.
            </p>
            <p>
              Highly proficient in creating full-stack applications using PHP (5
              up to 7+), React (16+), CSS, APIs, Material-UI, and MySQL that are
              both scalable and extensible, but also well-documented and written
              with security in mind. Beyond the code, I also have experience
              creating, maintaining, troubleshooting Apache and NGINX web
              servers as well as utilizing various development environment tools
              such as Git (Gitlab, GitHub, Git CLI, SourceTree), Docker, cURL,
              FreeIPA, Netlify, Heroku, dependency managers (Composer, PEAR,
              npm), and Linux-based servers. My preferred development platform
              is macOS, but I&apos;m also familiar with Windows-based
              development using C#, ASP.NET (MVC), and VB.NET.
            </p>
            <p>
              <span class="notice">
                I&apos;m looking for my next amazing opportunity, preferably
                using PHP/JavaScript/React, but I&apos;m always excited to step
                outside my comfort zone.
              </span>
            </p>
            <h2>Personal Core Values:</h2>
            <ul>
              <li>
                <span class="values">Acceptance</span>; we all have different
                backgrounds, opinions, and beliefs. Despite our differences, we
                have common ground&mdash;our humanity.
              </li>
              <li>
                <span class="values">Communication</span>; a goal cannot be met
                efficiently with a lack of communication.
              </li>
              <li>
                <span class="values">Transparency</span>; always be honest with
                your intentions. An average business will often make a decision
                based on profit. A great business understands that business is
                nothing without the customers or its employees. A formidable
                business can do both.{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingBody;
