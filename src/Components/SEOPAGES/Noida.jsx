import Card from "../ThirdParty/Card";
import img from "../../assets/img/singleform.jpg";
import img1 from "../../assets/img/Blended.jpg";
import wholespices from "../../assets/img/Wholespices.jpg";
import Pagetop2 from "../PageTop/Pagetop2";
function Noida() {
  return (
    <>
      <Pagetop2 title="Noida" />
      <div className="container">
        <div className="row p-5">
          <div className="col-12 text-center">
            <h3 className="section-title">
              Top Spices Manufacturer in Noida – Quality, Purity, and Flavors
            </h3>
            <p className="section-subtitle">
              Looking for premium-quality spices in Noida? We are a trusted
              spices manufacturer in Noida, offering a wide range of pure,
              aromatic, and high-quality spices for households, restaurants, and
              businesses.
            </p>{" "}
          </div>
          <div className="col-12 text-center">
            <h3 className="section-title">Best Spice Supplier in Noida</h3>
            <p className="section-subtitle">
              As a leading spice supplier in Noida, we provide fresh and finely
              ground spices sourced from the best farms. Our commitment to
              purity ensures that you get 100% natural, chemical-free, and
              preservative-free spices.
            </p>
          </div>
          <div className="col-12 text-center">
            <h3 className="section-title">
              Third-Party Spice Manufacturing in Noida
            </h3>
            <p className="section-subtitle">
              If you are looking for third-party spice manufacturers in Noida,
              we offer private-label solutions, customized packaging, and bulk
              supply. We help businesses build their brand with premium-quality
              spices tailored to their needs.
            </p>
          </div>
          <div className="col-12 text-center">
            <h3 className="section-title">Wholesale Spices in Noida</h3>
            <p className="section-subtitle">
              We are a reliable wholesale spices supplier in Noida, catering to
              supermarkets, hotels, and distributors. Our bulk spice supply
              maintains consistency in quality, freshness, and affordability,
              making us a preferred choice.
            </p>
          </div>
        </div>
        <div className="row p-5">
          <Card
            product="blended spices"
            image={img1}
            description="Kafal's blended spices are expertly crafted using premium-quality ingredients"
          />
          <Card
            product="single form spices"
            image={img}
            description="Kafal's single-form spices are expertly crafted blends of high-quality spices"
          />

          <Card
            product="whole spices"
            image={wholespices}
            description="Kafal's Whole spices offer a robust and authentic flavor, adding depth and complexity to any culinary creation"
          />
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

export default Noida;
