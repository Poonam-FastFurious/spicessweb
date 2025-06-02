import Pagetop2 from "../PageTop/Pagetop2";
import Card from "../ThirdParty/Card";

import img from "../../assets/img/singleform.jpg";
import img1 from "../../assets/img/Blended.jpg";
import wholespices from "../../assets/img/Wholespices.jpg";

function Ghaziabaad() {
  return (
    <>
      <Pagetop2 title="Ghaziabad" />
      <div className="container">
        <div className="row p-5">
          <div className="col-12 text-center">
            <h3 className="section-title">
              Elevate Your Culinary Creations with Ghaziabad Premier Spices
            </h3>
            <p className="section-subtitle">
              Discover the rich and authentic flavors of India with our premium
              spice offerings. As a leading Spices Manufacturer in Ghaziabad, we
              pride ourselves on delivering unparalleled quality and freshness.
              Whether youre a home cook or a commercial enterprise, we cater to
              all your needs. For those seeking the Best Masala Supplier in
              Ghaziabad, look no further; our meticulously blended masalas are
              crafted from the finest ingredients, ensuring a burst of flavor in
              every dish. We are also recognized as a trusted provider of
              Wholesale Spices in Ghaziabad, offering competitive prices for
              bulk orders. Embrace health and purity with our selection of
              Organic Spices Supplier in Ghaziabad, sourced sustainably and free
              from harmful additives. Expanding our reach, we are also prominent
              Spices Exporters in Ghaziabad, bringing the essence of Indian
              spices to global kitchens. For large-scale requirements, we are
              your reliable Bulk Spices Supplier in Ghaziabad, guaranteeing
              consistent quality and timely delivery. Experience the difference
              with our diverse range of spices, tailored to satisfy every palate
              and culinary aspiration.
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

export default Ghaziabaad;
