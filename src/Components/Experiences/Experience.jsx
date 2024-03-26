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

  const handleNext = () => {
    sliderRef.current.slickNext();
  }

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  }

  return (
    <>
      <section className="experience-container">
        <h5>Experience</h5>
        <div className="experience-content">
          <div className="arrow-right" onClick={handleNext}>
          <span className="material-symbols-outlined">
          <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#74C0FC" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
          </span>
          </div>

          <div className="arrow-left" onClick={handlePrev}>
            <span className="material-symbols-outlined">
            <svg
              width={20}
              height={20}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="#74C0FC"
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
              />
            </svg>
            </span>
          </div>
          <Slider ref={sliderRef} {...settings}>
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
