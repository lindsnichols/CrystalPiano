import emailjs from "emailjs-com";
import React, { useState, useEffect } from "react";
import { SubHeading } from "../../components";

import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {
      const serviceId = "service_2xrz99k";
      const templateId = "template_2tnid2r";
      const userId = "iaVhxx95VIu5-6GiF";
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div
      className="app__bg__hands app_wrapper section__padding flex__center"
      id="contact"
    >
      <div className="app__contact">
        <h1 className="app__contact_title subtext__cormorant">
          Contact Crystal
        </h1>
        <div className="app__contact_form p__opensans">
          <input
            className="app__form_input p__opensans"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="app__form_input p__opensans"
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="app__form_input p__opensans"
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="button" className="custom__button" onClick={submit}>
            Send Message
          </button>
          <span className={emailSent ? "visible" : null}>
            Thank you for your message!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
