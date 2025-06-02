import Pagetop2 from "../PageTop/Pagetop2";
import Card from "../ThirdParty/Card";

import img from "../../assets/img/singleform.jpg";
import img1 from "../../assets/img/Blended.jpg";
import wholespices from "../../assets/img/Wholespices.jpg";

function Gurgaon() {
  return (
    <>
      <Pagetop2 title="Gurgaon" />
      <div className="container">
        <div className="row p-5">
          <div className="col-12 text-center">
            <h3 className="section-title">
              Unleash the Flavors of India with Gurgaon Spice Experts
            </h3>
            <p className="section-subtitle">
              We are your gateway to premium quality, offering a vast array of
              choices from everyday essentials to rare, exotic blends. As a
              leading Spices Manufacturer in Gurgaon, we meticulously source and
              process our spices to ensure unparalleled freshness and potency.
              For restaurants and food businesses seeking the Best Masala
              Supplier in Gurgaon, we provide consistent, high-quality blends
              tailored to your specific needs. Discover the convenience and
              affordability of our Wholesale Spices in Gurgaon, perfect for bulk
              orders. We also cater to the growing demand for natural products
              with our Organic Spices Supplier in Gurgaon, ensuring pure,
              unadulterated flavors. For global distribution, our experienced
              Spices Exporters in Gurgaon handle all logistics, delivering the
              finest spices worldwide. If you require large quantities, our Bulk
              Spices Supplier in Gurgaon can meet your demands, ensuring a
              steady supply of premium spices.
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

export default Gurgaon;
