import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form-content">
      <form action="">
        <div className="name-container">
          <input type="text" name="firstName" placeholder="First Name" />
          <input type="text" name="lastName" placeholder="Last Name" />
        </div>
          <input type="email" name="email" placeholder="Email" />
          <textarea name="message" id="message" placeholder="Message"></textarea>
          <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
