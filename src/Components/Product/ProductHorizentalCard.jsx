import PropTypes from "prop-types";
function ProductHorizontalCard({
  title = "demo",
  image = "https://soyonexpress.com/html-demos/tazza/img/productdetails_bigimg1.jpg",
}) {
  return (
    <>
      <div className="col-md-6">
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={image}
                className="img-fluid rounded-start w-100 h-100"
                alt="image"
              />
            </div>
            <div className="col-md-8">
              <div className="">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
ProductHorizontalCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

export default ProductHorizontalCard;
