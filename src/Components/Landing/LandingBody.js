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
						<h2>Personal Core Values:</h2>
						<ul>
							<li>
								<span className="values">Acceptance</span>; we all have different
                backgrounds, opinions, and beliefs. Despite our differences, we
                have common ground&mdash;our humanity.
							</li>
							<li>
								<span className="values">Communication</span>; a goal cannot be met
                efficiently with a lack of communication.
							</li>
							<li>
								<span className="values">Transparency</span>; always be honest with
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
