import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMailOpen } from "react-icons/hi";
import Pagetop2 from "../PageTop/Pagetop2";
function ContactUs() {
  return (
    <>
      <Pagetop2
        title="Contact Us"
        image="https://img.freepik.com/free-photo/portrait-young-stylish-freckled-girl-laughing-with-showing-thumps-up-camera-copy-space_1258-125780.jpg?w=1380"
      />
      <div className="full-features">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-4">
              <div className="contactbox text-center mb-4">
                <div className="features-icon-border">
                  <div className="features-icon">
                    <i className="icofont">
                      <MdOutlinePhoneInTalk />
                    </i>
                  </div>
                </div>
                <div className="features-text">
                  <h3>Phone</h3>
                  <p className="features-text">
                    +919319882026 <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-4">
              <div className="contactbox text-center mb-4">
                <div className="features-icon-border">
                  <div className="features-icon">
                    <i className="icofont ">
                      <CiLocationOn />
                    </i>
                  </div>
                </div>
                <div className="features-text">
                  <h3>Our Loaction</h3>
                  <p>
                    C20/1 , Sector 62, Noida, Uttar Pradesh 201309 <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-4">
              <div className="contactbox text-center mb-4">
                <div className="features-icon-border">
                  <div className="features-icon">
                    <i className="icofont ">
                      <HiOutlineMailOpen />
                    </i>
                  </div>
                </div>
                <div className="features-text">
                  <h3>Email Address</h3>
                  <p>Info@spicesmanufacturer.in</p>
                  <p>Info@spicesmanufacturer.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white container">
        <div className="py-5 lg:py-16 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl font-weight-bold text-center text-dark">
            Get In Touch With US
          </h2>
          <p className="mb-8 lg:mb-16 font-semibold text-center text-black">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form action="#" className="space-y-8 p-5">
            <div className="form-group">
              <input
                type="text"
                id="fullname"
                className="form-control"
                placeholder="FullName"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="subject"
                className="form-control"
                placeholder="Enter Email Address"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                id="email"
                className="form-control"
                placeholder="MobileNumber"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                rows="6"
                className="form-control"
                placeholder="Leave a Message..."
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
