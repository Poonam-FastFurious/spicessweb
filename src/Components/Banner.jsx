import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const BannerSlider = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
  };

  return (
    <div className="full-banner">
      <div className="container">
        <Slider {...settings} className="row banner-slider">
          <div className="col-md-12">
            <div className="banner-content">
              <h1>
                100% <span>Pure & Fresh</span>
              </h1>
              <h3>The Reliable Source for Bulk Spices</h3>
              <p>
                Flavor Foundations, Quality Direct and Ingredient Excellence for
                Your Business.
              </p>
              <Link to="#" className="btn ">
                ALL PRoducts <i className="icofont-bubble-right"></i>
              </Link>
            </div>
          </div>

          <div className="col-md-12">
            <div className="banner-content">
              <h1>
                <span>Signature Taste </span>
              </h1>
              <h3>Wholesale Custom Seasoning Blends</h3>
              <p>
                Flavor Foundations, Quality Direct and Ingredient Excellence for
                Your Business.
              </p>
              <Link to="#" className="btn">
                ALL PRoducts <i className="icofont-bubble-right"></i>
              </Link>
            </div>
          </div>

          <div className="col-md-12">
            <div className="banner-content">
              <h1>
                <span>Freshness on Demand</span>
              </h1>
              <h3>Wholesale Spray-Dried Vegetables</h3>
              <p>
                Flavor Foundations, Quality Direct and Ingredient Excellence for
                Your Business.
              </p>
              <Link to="#" className="btn">
                ALL PRoducts <i className="icofont-bubble-right"></i>
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default BannerSlider;
