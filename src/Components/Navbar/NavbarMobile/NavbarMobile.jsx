import "./NavbarMobile.css";
const NavbarMobile = ({ isOppen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOppen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <h1 className="logo">
            Anas<span>Folio</span>
          </h1>
          <ul>
            <li>
              <a href="#home" className="menu-item">
                Home
              </a>
            </li>
            <li>
              <a href="#skills" className="menu-item">
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" className="menu-item">
                Work Experience
              </a>
            </li>
            <li>
              <a href="#project" className="menu-item">
                Project
              </a>
            </li>
            <li>
              <a href="#contact" className="menu-item">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;
