import { useRef } from "react";
import { EXPERIENCES } from "../../utils/data";
import "./Experience.css";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import Slider from "react-slick";
const Experience = () => {
  const sliderRef = useRef();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="experience-container">
        <h5>Experience</h5>
        <div className="experience-content">
          <Slider ref={sliderRef}{...settings}>
          {EXPERIENCES.map((experience) => (
            <ExperienceCard key={experience.title} details={experience} />
          ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Experience;
