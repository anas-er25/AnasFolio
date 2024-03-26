import "./Contact.css";
import ContactCard from "./ContactCard/ContactCard";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  return (
    <>
      <section className="contact-container" id="contact">
        <h5>Contact Me</h5>
        <div className="contact-content">
          <div style={{ flex: 1 }}>
            <ContactCard
              icon="./assets/images/mail.png"
              text="errakibianas8@gmail.com"
            />
            <ContactCard
              icon="./assets/images/github.png"
              text="https://github.com/anas-er25"
            />
          </div>
          <div style={{ flex: 1 }}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
