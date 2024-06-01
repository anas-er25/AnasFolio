import { useEffect, useRef } from "react";
import { PROJECTS } from "../../utils/data";
import "./Project.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import Slider from "react-slick";

const Project = () => {
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
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="project-container" id="project">
        <h5>Last Projects</h5>
        <div className="project-content">
          <div className="arrow-right" onClick={handleNext}>
            <span className="material-symbols-outlined">
              <svg
                width={20}
                height={20}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="#74C0FC"
                  d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                />
              </svg>
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
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} details={project} />
          ))}
        </Slider>
        </div>
      </section>
    </>
  );
};

export default Project;
