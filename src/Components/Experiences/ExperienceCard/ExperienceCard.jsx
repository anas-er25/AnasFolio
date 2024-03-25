import "./ExperienceCard.css";

//eslint-disable-next-line react/prop-types
const ExperienceCard = ({ details }) => {
  return (
    <div className="experience-card">
      {/* eslint-disable-next-line react/prop-types */}
      <h6>{details.title}</h6>
      {/* eslint-disable-next-line react/prop-types */}
      <div className="duration">{details.date}</div>
      <ul>
        {/* eslint-disable-next-line react/prop-types */}
        {details.responsabilities.map((responsability, index) => (
          <li key={`responsability_${index}`}>{responsability}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
