/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */

import Pagetop2 from "./Components/PageTop/Pagetop2";

function FAQ() {
  return (
    <>
      <Pagetop2 title="FAQ" />
      <div className="container" style={{ marginTop: "45px" }}>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What types of masalas do you offer for third-party
                manufacturing?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse "
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>We offer a wide variety of masalas.</strong> including
                garam masala, chicken masala, chat masala, paneer masala,
                biryani masala, sambar masala, and regional blends like Punjabi,
                South Indian, or Maharashtrian spices.
              </div>
            </div>
          </div>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What certifications do you hold for quality assurance?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Our manufacturing facilities are certified with ISO, HACCP,
                  and FSSAI standards. We ensure that all products meet the
                  highest quality and safety regulations during every stage of
                  production.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Can I customize spice blends according to my requirements?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Absolutely! We offer customization services where you can work
                  with our team to create spice blends that suit your unique
                  needs and preferences.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingfour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsefour"
                  aria-expanded="false"
                  aria-controls="collapsefour"
                >
                  What are the benefits of choosing a third-party masala
                  manufacturer?
                </button>
              </h2>
              <div
                id="collapsefour"
                className="accordion-collapse collapse"
                aria-labelledby="headingfour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Partnering with a third-party manufacturer allows you to focus
                  on branding and marketing while we handle the production. It’s
                  cost-effective, reduces operational hassle, and ensures that
                  your products are made by experts in the industry.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingfive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsefive"
                  aria-expanded="false"
                  aria-controls="collapsefive"
                >
                 How do I place an export order with your company?
                </button>
              </h2>
              <div
                id="collapsefive"
                className="accordion-collapse collapse"
                aria-labelledby="headingfive"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                To place an export order, you can contact our export team through email or
phone. We’ll guide you through the process, from product selection and
packaging to shipping logistics and documentation.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
