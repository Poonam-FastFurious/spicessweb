import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Card({
  product = "demo",
  image = "https://soyonexpress.com/html-demos/tazza/img/product-1.jpg",
  description = "Kafal's single-form spices are expertly crafted blends of high-quality spices",
}) {
  const formattedTitle = product.replace(/\s+/g, "-");
  return (
    <>
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 ">
        <div className="product " style={{ borderRadius: " 10px" }}>
          <div className="product-img pb-5">
            <img
              className="w-100"
              src={image}
              alt="imagecardes"
              style={{ borderRadius: " 5px" }}
            />
          </div>
          <div className="product-content">
            <div className="product-details position-bottom-left">
              <h3 className="product-name" style={{ width: "100%" }}>
                <Link to={`/thirdparty/${formattedTitle}`}>{product}</Link>
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
Card.propTypes = {
  product: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
};

export default Card;
