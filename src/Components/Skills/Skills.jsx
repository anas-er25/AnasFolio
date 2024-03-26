import { SKILLS } from "../../utils/data";
import "./Skills.css";
import { useState } from "react";
import SkillInfoCard from "./SkillInfoCard/SkillInfoCard";
import SkillCard from "./SkillCard/SkillCard";

const Skills = () => {
  const [SelectedSkill, setSelectedSkill] = useState(SKILLS[0]);
  const handleSelectedSkill = (data) => {
    setSelectedSkill(data);
  };
  return (
    <>
      <section className="skills-container" id="skills">
        <h5>Proficiency</h5>
        <div className="skills-content">
          <div className="skills">
            {SKILLS.map((skill) => (
              <SkillCard
                key={skill.title}
                title={skill.title}
                icon={skill.icon}
                isActive={SelectedSkill.title === skill.title}
                onClick={() => handleSelectedSkill(skill)}
              />
            ))}
          </div>
          <div className="skills-info">
            <SkillInfoCard
              heading={SelectedSkill.title}
              skills={SelectedSkill.skills}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
