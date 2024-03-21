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
              <a href="#" className="menu-item">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                Skills
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                Work Experience
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                Contact Me
              </a>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;
