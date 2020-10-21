import React from "react";

const Roofmasters = () => {
  return (
    <div className="project-container">
      <h1>Cody Morris Exteriors</h1>
      <h4>
        <a
          href="https://codymorrisexteriors.com"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          https://codymorrisexteriors.com
        </a>
      </h4>
      <p>
        For my graduation Capstone project, I created a live business website
        which includes a customer management portal. Built using React.js, PHP
        7, MySQL, CSS, Material-UI and deployed with Netlify and Heroku, this
        fully functional website allows new and existing customers to access an
        account where they can request roofing, gutter, and siding projects.
      </p>
      <h3>As a customer, you can:</h3>
      <ul>
        <li>create new projects</li>
        <li>view open and completed projects</li>
        <li>manage your profile settings:</li>
        <ul>
          <li>update personal information</li>
          <li>manage your account with password reset and account deletion</li>
          <li>add multiple properties</li>
        </ul>
        <li>
          utilize the built-in messaging system, allowing you to contact the
          business internally&mdash;without email
        </li>
      </ul>
      <h3>
        As a Roofmasters employee, you have access to an admin-based portal
        where you can:
      </h3>
      <ul>
        <li>receive and plan projects</li>
        <li>communicate with customers</li>
        <li>manage customer accounts</li>
      </ul>
      <p>
        Security and dynamic component development were my biggest priorities
        knowing that this website was going to be deployed. I have implemented
        TLS encryption on both the backend and the frontend as the project
        itself was designed in a decentralized manner, with each end completely
        decoupled from one another. Sensitive information sent to and stored
        within the MySQL database is also validated and protected using Bcrypt
        hashing, based on the Blowfish symmetric block cipher cryptographic
        algorithm; this uses slower hashing input&mdash;but reaps many benefits
        for more secure data integrity. To thwart illegitimate registrations to
        the website while in development and production, I also implemented a
        simple gatekeeper which requires registrations and Contact Us messages
        to be submitted with a secret key phrase in order to be processed. Once
        the business officially opens, this extra security measure will be
        removed.
      </p>
      <p>
        Another security measure integrated was to use the PHPMailer library to
        handle the registration and password reset processes. A user can only
        register for an account using an email address to which they have
        access, as a confirmation link with an encrypted token associated to
        their registration is required to complete the registration process. If
        a user neglects to confirm their email address and attempts to login,
        they are sent a new registration link with a new confirmation token,
        which overwrites the initial confirmation key data associated to their
        original registration. I set all of this up myself with a Gmail account
        dedicated solely to the project and it uses Google&apos;s free SMTP mail
        server service. Two-factor authentication and the use of an App Password
        combined put additional security in place for this website. Because this
        SMTP mail service only allows up to 100 or so emails per day, it will be
        replaced with a more scalable, paid service plan once the new company is
        officially open.
      </p>
      <p>
        I was inspired to build this website for my sister and brother-in-law
        who have been in the roofing, gutters, and siding business for over a
        decade as they are wanting to branch off into their own company. I used
        an Agile approach to plan the project. Something about which I am most
        proud is my determination to learn technologies not taught in school:
        React.js, hosting &amp; deployment, and APIs. I received special
        permission from my Capstone instructor as the requirements were to use
        technologies learned within the academic program curriculum. Because I
        had learned and enjoyed JavaScript at SCC, I wanted to teach myself a
        popular JavaScript library not only to challenge myself during my last
        semester, but to expand my skillset and of course, allow me to stand
        out. This thirst for learning allowed me to take on React.js-based work
        during my internship and now current position as web developer, so
        I&apos;d say that it was a risky but rewarding decision.
      </p>
    </div>
  );
};

export default Roofmasters;
