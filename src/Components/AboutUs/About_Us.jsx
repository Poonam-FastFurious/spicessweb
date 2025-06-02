
import AboutUs from "../AboutUs";
import Pagetop2 from "../PageTop/Pagetop2";

import Testimonial from "../Testimonial";

function About_Us() {
  return (
    <>
     
      <Pagetop2 title="About-us" />

      <div className="full-features">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-4">
              <div className="features-box text-center mb-4">
                <div className="features-icon-border">
                  <div className="features-icon">
                    <i className="icofont icofont-wheat"></i>
                  </div>
                </div>
                <div className="features-text">
                  <h3>High-Quality Sourcing</h3>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-4">
              <div className="features-box text-center mb-4">
                <div className="features-icon-border">
                  <div className="features-icon">
                    <i className="icofont icofont-truck-loaded"></i>
                  </div>
                </div>
                <div className="features-text">
                  <h3>Best pricing</h3>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-4">
              <div className="features-box text-center mb-4">
                <div className="features-icon-border">
                  <div className="features-icon">
                    <i className="icofont icofont-ui-chat"></i>
                  </div>
                </div>
                <div className="features-text">
                  <h3>24/7 Support</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutUs />
      <Testimonial />
    </>
  );
}

export default About_Us;
