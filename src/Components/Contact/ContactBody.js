import React from 'react';
import { TextField, Button } from "@material-ui/core";

const ContactBody = () => {
    const contactFormStyle = {
        marginBottom: "10px",
        borderRadius: "15px"
    };

    return (
        <div className="contact-body-container">
            <h1>Want to Connect?</h1>
            <form name="contact" netlify>
                <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    style={contactFormStyle}
                    name="name" />
                <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    style={contactFormStyle}
                    name="email" />
                <TextField
                    fullWidth
                    rows={5}
                    multiline
                    variant="outlined"
                    style={contactFormStyle}
                    placeholder="This is where you express your interest :)"
                    name="message" />
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