import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import haldi from "../assets/img/haldi.png";
import blended from "../assets/img/blended spcies.png";
import seasoning from "../assets/img/SEASONING2.png";
import vegetable from "../assets/img/vegeable_powder.png";
import fruite from "../assets/img/fruti powder.png";
function Partner() {
  const settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,

    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="full-partners">
      <div className="container">
        <Slider {...settings} className="row partner-slider">
          <div className="col-md-12">
            <div className="partner-img text-center">
              <img className="w-50 mx-auto" src={haldi} alt="haldi" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="partner-img text-center">
              <img className="w-50 mx-auto" src={blended} alt="blended" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="partner-img text-center">
              <img className="w-50 mx-auto" src={seasoning} alt="seasoning" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="partner-img text-center">
              <img className="w-50 mx-auto" src={vegetable} alt="vegetable" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="partner-img text-center">
              <img className="w-50 mx-auto" src={fruite} alt="fruite" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="partner-img text-center">
              <img className="w-50 mx-auto" src={haldi} alt="haldi" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="partner-img text-center">
              <img className="w-50 mx-auto" src={blended} alt="blended" />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Partner;
