import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import test1 from "../assets/img/Testi.jpg"
import test2 from "../assets/img/testi2.jpg"
import test3 from "../assets/img/testi3.jpg"
function Testimonial() {
  const settingsImg = {
    // settings for testimonial-img slider
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
  };

  const settingsText = {
    // settings for testimonial-text slider
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerPadding: 0,
    dots: false,
    speed: 500,
  };

  return (
    <div className="full-testimonial" id="full-testimonial">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h3 className="section-title">Our Happy Customers</h3>
            <p className="section-subtitle">
              The passage experienced a surge in popularity during the 1960s
              when again during the 90s as desktop publishers
            </p>
          </div>
        </div>

        <div className="form-row align-items-center mt-5">
          <div className="col-md-4">
            <Slider {...settingsImg} className="testimonial-img">
              {/* Images */}
              <div className="img">
                <img
                  className="w-100"
                  src={test1}
                  alt="testimonial1"
                />
              </div>
              <div className="img">
                <img
                  className="w-100"
                  src={test2}
                  alt="testimonial2"
                />
              </div>
              <div className="img">
                <img
                  className="w-100"
                  src={test3}
                  alt="testimonial3"
                />
              </div>
            </Slider>
          </div>
          <div className="col-md-8">
            <Slider {...settingsText} className="testimonial-text">
              <div className="testimonial-info">
                <p>
                  “ Always a pleasure ordering from here! The spices are super
                  fresh and delivered fast every time. Bulk prices are
                  unbeatable. Great prices, quick delivery – highly recommend
                  this company!
                </p>
                <h3>Ankit</h3>
                <h4>Happy Customer</h4>
              </div>
              <div className="testimonial-info">
                <p>
                  “I ordered a variety of masalas from Kafal Spices
                  Manufacturer, and I must say, the quality of the spices is
                  exceptional. The taste was truly delicious, and I was
                  impressed with both the product and its affordable price. I
                  highly recommend these spices to everyone!
                </p>
                <h3>Farha</h3>
                <h4>Happy Customer</h4>
              </div>
              <div className="testimonial-info">
                <p>
                  “ Stupendous quality!���� I absolutely love this brand for its
                  spices—far more affordable than store brands, yet top-notch
                  quality. The Kali mirch and garam masala are amazing on
                  vegetables, and all the spices are exquisite. Try them once
                  and taste the difference!.
                </p>
                <h3>Harhit</h3>
                <h4>Happy Customer</h4>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
