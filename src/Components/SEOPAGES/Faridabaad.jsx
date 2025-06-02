import Pagetop2 from "../PageTop/Pagetop2";
import Card from "../ThirdParty/Card";

import img from "../../assets/img/singleform.jpg";
import img1 from "../../assets/img/Blended.jpg";
import wholespices from "../../assets/img/Wholespices.jpg";

function Faridabaad() {
  return (
    <>
      <Pagetop2 title="Faridabad" />
      <div className="container">
        <div className="row p-5">
          <div className="col-12 text-center">
            <h3 className="section-title">
            Unleash the Authentic Flavors of India with Faridabad Premier Spice Solutions
            </h3>
            <p className="section-subtitle">
            Embark on a culinary journey with Faridabads most trusted spices manufacturer, where tradition meets quality. We are not just a supplier; we are artisans crafting the essence of Indian cuisine. As the best masala supplier in Faridabad, our meticulously blended spices promise to elevate your dishes to new heights. We understand the diverse needs of our clientele, offering comprehensive solutions for those seeking wholesale spices in Faridabad. Our bulk offerings ensure consistent quality and competitive pricing, perfect for restaurants, catering services, and retail businesses. For the health-conscious consumer, our organic spices supplier in Faridabad selection provides pure, unadulterated flavors, cultivated with sustainable practices. Recognizing the global appeal of Indian spices, we are proud spices exporters in Faridabad, delivering the rich tapestry of our flavors to international markets. Our commitment to excellence extends to our bulk spices supplier in Faridabad services, designed to meet the demands of large-scale operations without compromising on freshness or aroma. As a dedicated Indian masala manufacturer in Faridabad, we blend traditional recipes with cutting-edge technology, ensuring each spice packet encapsulates the authentic taste of India. Explore our extensive range, from classic garam masala to exotic blends, and experience the unparalleled quality that sets us apart. Partner with us, and let us be the secret ingredient to your culinary success, delivering the finest spices directly from the heart of Faridabad. We guarantee satisfaction with every order
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

export default Faridabaad;
