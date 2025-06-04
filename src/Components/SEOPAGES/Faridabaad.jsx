import Pagetop2 from "../PageTop/Pagetop2";
import Card from "../ThirdParty/Card";

import img from "../../assets/img/singleform.jpg";
import img1 from "../../assets/img/Blended.jpg";
import wholespices from "../../assets/img/Wholespices.jpg";
import data from "../../Data/faridabadData.json";

function Faridabaad() {
  const { faqs, pageContent } = data;
  return (
    <>
      <Pagetop2 title="Faridabad" />
      <div className="container">
        <div className="product_details">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div className="producudetails_content">
                  {pageContent.map((block, index) => {
                    if (block.type === "heading") {
                      return <h3 key={index}>{block.text}</h3>;
                    }
                    if (block.type === "paragraph") {
                      return <p key={index}>{block.text}</p>;
                    }
                    if (block.type === "list") {
                      return (
                        <ul key={index} className=" my-3">
                          {block.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>{" "}
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div className="product_img d-flex">
                  <div className="big_img">
                    <img
                      src={img1}
                      className="w-100 img-fluid"
                      alt="matchingProduct"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="accordion py-5" id="accordionExample">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={faq.id}>
              <h2 className="accordion-header" id={`heading${faq.id}`}>
                <button
                  className={`accordion-button ${
                    index !== 0 ? "collapsed" : ""
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${faq.id}`}
                  aria-expanded={index === 0 ? "true" : "false"}
                  aria-controls={`collapse${faq.id}`}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`collapse${faq.id}`}
                className={`accordion-collapse collapse ${
                  index === 0 ? "show" : ""
                }`}
                aria-labelledby={`heading${faq.id}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="row  ">
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
          <form action="#" className="space-y-8 ">
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
