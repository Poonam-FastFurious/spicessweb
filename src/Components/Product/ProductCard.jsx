import { Link } from "react-router-dom";
import PropTypes from "prop-types";
function ProductCard({
  images = "https://soyonexpress.com/html-demos/tazza/img/product-1.jpg",
  title = "demo",
  description = `Kafal ${title} is potent a small amount boosts your dish's color and flavor`,
}) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const formattedTitle = title.replace(/\s+/g, "-");
  return (
    <>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4">
        <div className="product " style={{ borderRadius: "10px" }}>
          <div className="product-img pb-2">
            <img
              className="w-100"
              src={images}
              alt="imagesCard"
              style={{ borderRadius: "5px" }}
            />
          </div>
          <div className="product-content ">
            <div className="product-details position-bottom-left">
              <h3 className="product-name">
                <Link onClick={scrollToTop} to={`/product/${formattedTitle}`}>
                  {title}
                </Link>
              </h3>
              <span className="product-prev">{description}</span>
            </div>
            <div className="buttons"></div>

            <div className="icons position-center">
              <div className="rounded-icon">
                <i className="icofont-eye"></i>
              </div>

              <div className="rounded-icon">
                <i className="icofont-heart-alt"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
ProductCard.propTypes = {
  title: PropTypes.string,
  images: PropTypes.string,
  description: PropTypes.string,
};

export default ProductCard;
