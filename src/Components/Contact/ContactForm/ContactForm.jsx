import "./ContactForm.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qxasmtf", "template_n1mojph", form.current, {
        publicKey: "NB0cC8rqdVtH1FiAy",
      })
      .then(
        () => {
          alert("EMAIL SENDED SUCCESSFULLY!, Thanks!");
          form.current.reset();
        },
        (error) => {

          console.log("FAILED...", error.text);
          alert("EMAIL NOT SENDED!!");
        }
      );
  };

  return (
    <div className="contact-form-content">
      <form ref={form} onSubmit={sendEmail}>
        <div className="name-container">
          <input type="text" name="firstName" placeholder="First Name"  required/>
          <input type="text" name="lastName" placeholder="Last Name"  required/>
        </div>
        <input type="email" name="email" placeholder="Email"  required/>
        <textarea name="message" id="message" placeholder="Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
