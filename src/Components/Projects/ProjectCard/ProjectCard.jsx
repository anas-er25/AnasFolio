import { FaGithub } from "react-icons/fa6";
import "./ProjectCard.css";

const ProjectCard = ({ details }) => {
  return (
    <div className="project-card">
      <img src={details.image} alt={details.title} className="project-image" />
      <h6 className="project-title">{details.title}</h6>
      <p className="project-description">{details.description}</p>
      <a href={details.link} className="project-link" target="_blank" rel="noopener noreferrer"> <FaGithub size={35}/></a>
    </div>
  );
};

export default ProjectCard;