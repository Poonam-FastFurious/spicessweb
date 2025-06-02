/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

function Offers2() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="contact-now">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h6 className="contact-quote">
                For bulk purchases and private labeling opportunities, reach out
                to us today!
              </h6>
              <p style={{ color: "white", marginTop: "4px" }}>
                Let's collaborate to create your unique brand and elevate your
                business together
              </p>
              <Link to="/Contact-Us" className="btn" onClick={scrollToTop}>
                Contact Now <i className="icofont-bubble-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offers2;
