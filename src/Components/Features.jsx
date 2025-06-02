import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoCartOutline } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
const FeaturesSlider = () => {
  const sliderSettings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 6,
          infinite: true,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          dots: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="full-features">
      <div className="container">
        <Slider {...sliderSettings} className="row slider">
          <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-4">
            <div className="features-box text-center">
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
          <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-4">
            <div className="features-box text-center">
              <div className="features-icon-border">
                <div className="features-icon">
                  <i className="icofont ">
                    <IoCartOutline />
                  </i>
                </div>
              </div>
              <div className="features-text">
                <h3>Customization</h3>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-4">
            <div className="features-box text-center">
              <div className="features-icon-border">
                <div className="features-icon">
                  <i className="icofont icofont-ui-chat"></i>
                </div>
              </div>
              <div className="features-text">
                <h3> Service & Support</h3>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-4">
            <div className="features-box text-center">
              <div className="features-icon-border">
                <div className="features-icon">
                  <i className="icofont ">
                    <FaRupeeSign />
                  </i>
                </div>
              </div>
              <div className="features-text">
                <h3>Best pricing</h3>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-4">
            <div className="features-box text-center">
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

          <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-4">
            <div className="features-box text-center">
              <div className="features-icon-border">
                <div className="features-icon">
                  <i className="icofont ">
                    <IoCartOutline />
                  </i>
                </div>
              </div>
              <div className="features-text">
                <h3>Customization</h3>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-4">
            <div className="features-box text-center">
              <div className="features-icon-border">
                <div className="features-icon">
                  <i className="icofont icofont-ui-chat"></i>
                </div>
              </div>
              <div className="features-text">
                <h3>Service & Support</h3>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-4">
            <div className="features-box text-center">
              <div className="features-icon-border">
                <div className="features-icon">
                  <i className="icofont ">
                    <FaRupeeSign />
                  </i>
                </div>
              </div>
              <div className="features-text">
                <h3>Best pricing</h3>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default FeaturesSlider;
