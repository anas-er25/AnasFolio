import "./SkillCard.css";

const SkillCard = ({ title, icon, isActive, onClick }) => {
  return (
    <>
      <div
        className={`skills-card ${isActive ? "active" : ""}`}
        onClick={() => onClick()}
      >
        <div className="skills-icon">
          <img src={icon} alt={title} />
        </div>
        <span>{title}</span>
      </div>
    </>
  );
};

export default SkillCard;
