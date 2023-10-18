import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul class="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            const { href, id, text } = link;
            return (
              <li key={id}>
                <a href={href} class="nav-link">
                  {text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul class="nav-icons">
          {socialLinks.map((link) => {
            const { href, id, icon } = link;
            return (
              <li key={id}>
                <a href={href} target="_blank" class="nav-icon">
                  <i class={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
