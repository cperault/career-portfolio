import React from "react"
import Self from "../../Media/self.png"
const LandingBody = () => {
	return (
		<div className="landing-body-container">
			<div className="landing-body-div">
				<img
					src={Self}
					height="450"
					width="330"
					alt="A face portrait of Christopher resting his head on his hand atop a pillow"
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
              Advanced proficiency in maintaining and creating full-stack applications using PHP (5
              up to 7+), React (16+), CSS, APIs, Material-UI, and MySQL that are scalable, extensible, and well-documented.
						</p>
						<p>Beyond the code, I also have experience managing Apache and NGINX web
            servers and working with various development environment tools
            such as Git (Gitlab, GitHub, Git CLI, SourceTree), Docker, cURL,
            FreeIPA, Netlify, Heroku, dependency managers (Composer, PEAR,
            npm), and Linux-based servers. My preferred development platform
            is macOS, but I&apos;m also proficient in Windows-based
            development, particulary using C#, ASP.NET (MVC), and VB.NET.
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
	)
}
export default LandingBody
