import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import LinkedInIcon from "../../Media/LinkedInIcon.svg";
import { makeStyles } from "@material-ui/core/styles";

const ContactBody = () => {
  //hook to manage state of the form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const contactFormStyle = {
    marginBottom: "10px",
    borderRadius: "55px",
    color: "white",
  };

  const StyledTextField = makeStyles({
    root: {
      "& *": { color: "white" },
      "& label.Mui-focused": {
        color: "white",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "white",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "white",
        },
        "&:hover fieldset": {
          borderColor: "white",
        },
        "&.Mui-focused fieldset": {
          borderColor: "white",
        },
      },
    },
  });

  const classes = StyledTextField();
  //encode the Netlify Form request data
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, message };
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("How do you expect to contact me with missing form data?");
    } else {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData }),
      })
        .then(() => {
          alert(
            "Your message was sent! Once reviewed, I'll reach out as soon as I can."
          );
          window.location.reload();
        })
        .catch((error) => alert(error));
    }
  };
  return (
    <div className="contact-body-container">
      <h1>Want to Connect?</h1>
      <form name="contact" netlify onSubmit={handleSubmit}>
        <TextField
          className={classes.root}
          fullWidth
          label="Name"
          variant="outlined"
          style={contactFormStyle}
          name="name"
          onChange={(text) => setName(text.target.value)}
        />
        <TextField
          className={classes.root}
          fullWidth
          label="Email"
          variant="outlined"
          style={contactFormStyle}
          name="email"
          onChange={(text) => setEmail(text.target.value)}
        />
        <TextField
          className={classes.root}
          fullWidth
          rows={5}
          multiline
          variant="outlined"
          style={contactFormStyle}
          label="What would you like to say?"
          name="message"
          onChange={(text) => setMessage(text.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          style={{
            backgroundColor: "#1B9AAA",
            color: "#FFFFFF",
            float: "right",
          }}
          size="small"
        >
          Send
        </Button>
      </form>
      <span class="contact-form-separator">or</span>
      <footer class="social-media-footer">
        <div>Find me on LinkedIn:</div>
        <div>
          <a
            href="https://www.linkedin.com/in/cperault"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <img
              src={LinkedInIcon}
              class="social-media-icon"
              alt="LinkedIn profile icon"
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ContactBody;
