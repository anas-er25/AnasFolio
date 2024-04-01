import "./ContactForm.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

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
          // Remplacer l'alerte simple par une alerte Swal
          Swal.fire({
            title: 'Success!',
            text: 'EMAIL SENT SUCCESSFULLY, Thanks!',
            icon: 'success'
          });
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          // Remplacer l'alerte simple par une alerte Swal
          Swal.fire({
            title: 'Error!',
            text: 'EMAIL NOT SENT!',
            icon: 'error'
          });
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
