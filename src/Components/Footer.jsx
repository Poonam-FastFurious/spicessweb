import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="footer_top">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-5">
              <div className="footer_widget">
                <div className="footer_widget_title">
                  <h2>Contact Us!</h2>
                </div>
                <ul className="footer_widget_content">
                  <li>
                    <span>Phone: &nbsp;&nbsp;&nbsp;&nbsp;</span>+91 9319882026
                  </li>
                  <li>
                    <span>Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{" "}
                    Info@spicesmanufacturer.in
                  </li>
                  <li>
                    <span>Address: &nbsp;</span>
                    C20/1 , Sector 62, Noida, Uttar Pradesh 201309
                  </li>
                </ul>

                <div className="footer_social">
                  <ul className="footer_social_icons">
                    <li>
                      <Link to="#">
                        <i className="icofont-skype"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="icofont-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="icofont-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="icofont-whatsapp"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-5">
              <div className="footer_widget">
                <div className="footer_widget_title">
                  <h2>quick links</h2>
                </div>
                <ul className="footer_widget_content">
                  <li>
                    <i className="icofont-double-right"></i>
                    <Link to="/" onClick={scrollToTop}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <i className="icofont-double-right"></i>
                    <Link to="/About-Us" onClick={scrollToTop}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <i className="icofont-double-right"></i>
                    <Link to="/Contact-Us" onClick={scrollToTop}>
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <i className="icofont-double-right"></i>
                    <Link to="/Horeca" onClick={scrollToTop}>
                      Horeca
                    </Link>
                  </li>
                  <li>
                    <i className="icofont-double-right"></i>
                    <Link to="/ThirdParty" onClick={scrollToTop}>
                      Third Party Manufacturing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-5">
              <div className="footer_widget">
                <div className="footer_widget_title">
                  <h2>Customer support</h2>
                </div>
                <ul className="footer_widget_content">
                  <li>
                    <i className="icofont-double-right"></i>
                    <Link to="/About-Us" onClick={scrollToTop}>About us</Link>
                  </li>
                  <li>
                    <i className="icofont-double-right"></i>
                    <Link to="/Contact Us" onClick={scrollToTop}>Privacy policy</Link>
                  </li>
                  <li>
                    <i className="icofont-double-right"></i>
                    <Link to="#">terms & conditions</Link>
                  </li>
                  <li>
                    <i className="icofont-double-right"></i>
                    <Link to="/faq" onClick={scrollToTop}>
                      Faq
                    </Link>
                  </li>
                  <li>
                    <i className="icofont-double-right"></i>
                    <Link to="/blog">Blog</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-12">
              <div className="footer_txt text-center">
                <p>
                  Copyright 2024 <span>BrandBell</span>. All Right Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
