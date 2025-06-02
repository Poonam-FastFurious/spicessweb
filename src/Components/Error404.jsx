import { Link } from "react-router-dom";
import errorimg from "../assets/img/Error_404.png";
function Error404() {
  return (
    <>
      <div className="error_part">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="error_content">
                <h4>Opps......This page is not found.</h4>

                <Link to="/" className="btn">
                  <i className="icofont-arrow-left"></i>Back To Home
                </Link>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="error_img">
                <img
                  src={errorimg}
                  className="w-100 img-fluid"
                  alt="Errorimg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Error404;
