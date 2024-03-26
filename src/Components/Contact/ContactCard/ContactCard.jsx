import "./ContactCard.css";

const ContactCard = ({ icon, text }) => {
  return (
    <>
      <div className="contact-details-card">
        <div className="icon">
          <img src={icon} alt={text} />
        </div>
        <p>{text}</p>
      </div>
    </>
  );
};

export default ContactCard;
