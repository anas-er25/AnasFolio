import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero-container" id="home">
        <div className="hero-content">
          <h2>Crafting Meaningful Digital Experiences</h2>
          <p>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            I'm Anas ER-RAKIBI, a passionate Full Stack Web Developer.
          </p>
        </div>

        <div className="hero-img">
          <div>
            <span className="tech-icon-laravel-react">
              <div className="tech-icon">
                <img
                  src="./assets/images/lara.png"
                  alt="laravel logo"
                  className="icon"
                />
              </div>
              <div className="tech-icon">
                <img
                  src="./assets/images/exp.png"
                  alt="laravel logo"
                  className="icon"
                />
              </div>
              <div className="tech-icon">
                <img
                  src="./assets/images/rea.png"
                  alt="react js logo"
                  className="icon"
                />
              </div>
            </span>
            <img src="./assets/images/anas.jpg" alt="My image" />
          </div>
          <div>
            <div className="tech-icon">
              <img
                src="./assets/images/html.png"
                alt="html logo"
                className="icon"
              />
            </div>
            <div className="tech-icon">
              <img
                src="./assets/images/css.png"
                alt="css logo"
                className="icon"
              />
            </div>
            <div className="tech-icon">
              <img
                src="./assets/images/js.png"
                alt="javascript logo"
                className="icon"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
