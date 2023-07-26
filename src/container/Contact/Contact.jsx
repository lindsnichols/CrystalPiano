import emailjs from "emailjs-com";
import React, { useState, useEffect } from "react";
import { SubHeading } from "../../components";
import Swal from "sweetalert2";

import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [referral, setReferral] = useState("");
  const [message, setMessage] = useState("");

  // const showLoading = function () {
  //   swal({
  //     title: "Now loading",
  //     allowEscapeKey: false,
  //     allowOutsideClick: false,
  //     onOpen: () => {
  //       swal.showLoading();
  //     },
  //   }).then(
  //     () => {},
  //     (dismiss) => {
  //       if (dismiss === "timer") {
  //         console.log("closed by timer!!!!");
  //         swal({
  //           title: "Finished!",
  //           type: "success",
  //           timer: 2000,
  //           showConfirmButton: false,
  //         });
  //       }
  //     }
  //   );
  // };

  const submit = () => {
    let isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    if (name && isValidEmail && message) {
      const serviceId = "service_2xrz99k";
      const templateId = "template_2tnid2r";
      const userId = "iaVhxx95VIu5-6GiF";
      const templateParams = {
        name,
        email,
        referral,
        message,
      };

      emailjs.send(serviceId, templateId, templateParams, userId).then(
        (response) => {
          console.log(response.text);
          Swal.fire({
            icon: "success",
            title: "Thank you for your message!",
            iconColor: "#dcca87",
            customClass: "custom__alert",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Ooops, something went wrong",
            text: "Please try again later",
            iconColor: "#dcca87",
            customClass: "custom__alert",
          });
        }
      );

      setName("");
      setEmail("");
      setMessage("");
      setReferral("");
    } else {
      if (!name || !email || !message) {
        Swal.fire({
          icon: "error",
          text: "Please fill in all required fields.",
          iconColor: "#dcca87",
          customClass: "custom__alert",
        });
      } else if (!isValidEmail) {
        Swal.fire({
          icon: "error",
          text: "Please fill in a valid email address",
          iconColor: "#dcca87",
          customClass: "custom__alert",
        });
      }
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
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="app__form_input p__opensans"
            type="text"
            placeholder="How did you hear about Crystal?"
            value={referral}
            onChange={(e) => setReferral(e.target.value)}
          />
          <textarea
            className="app__form_input p__opensans"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="button" className="custom__button" onClick={submit}>
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
