import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/kafal logo.png";

function Header() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <header id="full_nav">
        <div className="">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link className="navbar-brand" to="/" onClick={scrollToTop}>
                <img src={logo} alt="logo" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                onClick={handleToggle}
                aria-controls="navbarSupportedContent"
                aria-expanded={!isCollapsed ? "true" : "false"}
                aria-label="Toggle navigation"
              >
                <i className="icofont icofont-navigation-menu"></i>
              </button>

              <div
                className={`collapse navbar-collapse ${
                  isCollapsed ? "" : "show"
                }`}
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/" onClick={scrollToTop}>
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/about-us"
                      onClick={scrollToTop}
                    >
                      About
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/thirdparty"
                      onClick={scrollToTop}
                    >
                      ThirdParty manufacturing
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/horeca"
                      onClick={scrollToTop}
                    >
                      HoReca
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/blog" onClick={scrollToTop}>
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link"
                      to="/contact-us"
                      onClick={scrollToTop}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>

                <div className="header-content ">
                  <div className="header_contact text-right">
                    <Link
                      onClick={scrollToTop}
                      to="/contact-us"
                      type="button"
                      className="btn btn-primary"
                    >
                      Get A Quite
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
