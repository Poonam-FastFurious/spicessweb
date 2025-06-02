import Pagetop2 from "../PageTop/Pagetop2";
import Card from "../ThirdParty/Card";

import img from "../../assets/img/singleform.jpg";
import img1 from "../../assets/img/Blended.jpg";
import wholespices from "../../assets/img/Wholespices.jpg";

function Delhi() {
  return (
    <>
      <Pagetop2 title="Delhi" />
      <div className="container">
        <div className="row p-5">
          <div className="col-12 text-center">
            <h3 className="section-title">
              Leading Spices Manufacturers & Exporters in Delhi NCR
            </h3>
            <p className="section-subtitle">
              We are one of the most trusted spices manufacturers in Delhi,
              offering premium-quality spices that bring authentic flavors to
              your kitchen. As a leading spices exporter in Delhi NCR, we take
              pride in delivering handpicked, freshly processed spices to
              domestic and international markets. Our extensive range of organic
              spices in Delhi is sourced from the best farms, ensuring natural
              goodness without additives or preservatives.
            </p>{" "}
            <p className="section-subtitle">
              As a top spices exporter in Delhi, we maintain strict quality
              control to meet global standards, providing customers with pure,
              aromatic, and flavorful spices. Whether you need turmeric, cumin,
              coriander, or chili powder, we offer a wide variety tailored to
              your culinary needs. Being a reputable bulk spices supplier in
              Delhi, we cater to wholesalers, retailers, and food businesses,
              ensuring timely delivery and competitive pricing.
            </p>{" "}
            <p className="section-subtitle">
              Our commitment to quality, sustainability, and customer
              satisfaction makes us a preferred choice in the spice industry.
              With years of expertise, we have built a strong reputation as a
              leading spices manufacturer in Delhi, delivering excellence with
              every pack. If youre looking for premium-grade spices with
              authentic taste and rich aroma, partner with us for the best spice
              solutions in Delhi NCR.
            </p>{" "}
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

export default Delhi;
