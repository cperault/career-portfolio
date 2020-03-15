import React, { useState } from 'react';
import { TextField, Button } from "@material-ui/core";

const ContactBody = () => {
    //hook to manage state of the form data
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const contactFormStyle = {
        marginBottom: "10px",
        borderRadius: "15px"
    };

    //encode the Netlify Form request data
    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }
    const handleSubmit = e => {
        e.preventDefault();
        const formData = { name, email, message };
        if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
            alert("How do you expect to contact me with missing form data?");
        }
        else {
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact", ...formData })
            })
                .then(() => alert("Your message was sent! Once reviewed, I'll reach out as soon as I can."))
                .catch(error => alert(error));
        }
    };
    return (

        <div className="contact-body-container">
            <h1>Want to Connect?</h1>
            <form name="contact" netlify onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    style={contactFormStyle}
                    name="name"
                    onChange={text => setName(text.target.value)}
                />
                <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    style={contactFormStyle}
                    name="email"
                    onChange={text => setEmail(text.target.value)}
                />
                <TextField
                    fullWidth
                    rows={5}
                    multiline
                    variant="outlined"
                    style={contactFormStyle}
                    placeholder="What would you like to say?"
                    name="message"
                    onChange={text => setMessage(text.target.value)}
                />
                <Button
                    type="submit"
                    variant="contained"
                    style={{ backgroundColor: "#1B9AAA", color: "#FFFFFF", float: "right" }}
                    size="small"
                >
                    Send
            </Button>

            </form>
        </div>
    )
}

export default ContactBody;