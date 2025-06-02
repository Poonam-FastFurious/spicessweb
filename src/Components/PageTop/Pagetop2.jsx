/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Pagetop2({ title = "demo" }) {
  return (
    <>
      <div className="hero_section">
        <div className="png_img"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="herosection_content">
                <h2>{title}</h2>
                <Link to="/" className="btn border-radius-0 border-transparent">
                  Home - Pages
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pagetop2;
