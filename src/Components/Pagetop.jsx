import PropTypes from "prop-types";
function Pagetop({ title = "demo" }) {
  return (
    <>
      <div className="full-banner">
        <div className="container">
          <div className="row banner-slider">
            <div className="col-md-12">
              <div className="banner-content">
                <h1>{title}</h1>

                <p>HOME - {title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
Pagetop.propTypes = {
  title: PropTypes.string,
};
export default Pagetop;
