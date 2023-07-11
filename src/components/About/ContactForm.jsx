import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contactme.css"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uw2h6x7",
        "template_vfwotd6",
        form.current,
        "Ip4qlOGwoaBO1i3t2"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Thanks, Will get back to you");
          e.target.reset();
        },
        (error) => {
          toast.error("Something went wrong");
          console.log(error.text);
        }
      );
  };
  return (
    <div className="ContactForm">
      <h1>Lets meet</h1>
      <p>
        Fill in the form below, or <br/>if you don't like forms, send an email at:
      </p>
      <h2 className="text-animation">Kumarvishal3107@gmail.com</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" required />
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
