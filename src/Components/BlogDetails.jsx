import { Link } from "react-router-dom";

function BlogDetails() {
  return (
    <>
      <div className="hero_section">
        <div className="png_img">
          <img
            className="w-100 img-fluid"
            src="https://soyonexpress.com/html-demos/tazza/img/leaf.png"
            alt="leaf"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="herosection_content">
                <h2>Blog Details</h2>
                <Link
                  to="//"
                  className="btn border-radius-0 border-transparent"
                >
                  Home - Pages
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blogdetails_part">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="allpost_content">
                    <div className="serach_btn">
                      <form action="#">
                        <div className="search_ber">
                          <input
                            type="text"
                            className="form-control search_button"
                            id="serach_button"
                            name="serach_button"
                            value=""
                            placeholder="Search Here"
                          />
                          <i className="icofont-search-1"></i>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="recent_post">
                    <div className="sidebar">
                      <h4>Recent Post</h4>
                    </div>
                    <ul>
                      <li>
                        <span>20 April 2024</span>
                        <h4>
                          <Link to="/blogdetails/Top-Spice">
                          Top Spices Manufacturers, Exporters, and Suppliers in India
                          </Link>
                        </h4>
                      </li>

                      
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className="populer_tag">
                    <div className="sidebar">
                      <h4 className="border-0">Populer Tag</h4>
                    </div>
                    <div className="populer_btn">
                      <ul>
                        <li>spicy indian </li>
                        <li>indian spice manufacturers,</li>
                        <li>Third-Party Spices Manufacturers</li>
                        <li>Spices Exporter in India</li>
                       
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8 col-xl-8">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className="blog">
                    <div className="blog_img">
                      <img
                        src="http://res.cloudinary.com/sanyuktifood/image/upload/v1731302132/l6ekyq9wdislqfksbtmp.webp"
                        className="w-100 img-fluid"
                        alt="jpgimg"
                      />
                    </div>
                    <div className="blog_publish d-flex justify-content-between pt-4">
                      <div className="date">
                        <span>
                          <i className="icofont-ui-calendar"></i> 20 April 2020
                        </span>
                      </div>
                      <div className="fav_icon">
                        <span>
                          <i className="icofont-ui-love"></i> 568
                        </span>
                        <span>
                          <i className="icofont-speech-comments"></i> 986
                        </span>
                      </div>
                    </div>
                    <div className="blog_title">
                      <h4>
                        <Link to="#">
                          What are the Benefits of Organics Spices & Herbs?
                        </Link>
                      </h4>
                    </div>
                    <div className="blog_details">
                      <p>
                        When it comes to finding the best spices in Noida,
                        organic spices and herbs stand out for their exceptional
                        health benefits and superior quality. Grown without
                        synthetic pesticides or chemicals, organic spices offer
                        a natural, clean flavor and are packed with essential
                        nutrients. They retain higher levels of antioxidants,
                        essential oils, and beneficial compounds, making them a
                        healthy addition to your meals. Organic spices are not
                        only great for enhancing flavor but also for supporting
                        overall well-being.
                      </p>
                      <div>
                        <strong>Enhanced Nutritional Profile</strong>
                      </div>
                      <p>
                        Organic spices and herbs are rich in essential nutrients
                        like vitamins, minerals, and antioxidants. For example,
                        organic turmeric contains curcumin, a powerful
                        anti-inflammatory and antioxidant compound that promotes
                        health and well-being.
                      </p>
                      <strong>Better Taste and Aroma</strong>
                      <p>
                        Organic spices often have a more vibrant flavor and
                        stronger aroma due to the absence of artificial
                        chemicals. When grown naturally, these spices retain
                        their full spectrum of essential oils, providing richer
                        taste and enhancing the culinary experience.
                      </p>
                      <strong> Environmental Benefits</strong>
                      <p>
                        Organic farming practices are better for the
                        environment. These methods use fewer resources and
                        reduce chemical pollution. By supporting organic
                        farming, you re contributing to the preservation of the
                        environment and sustainable agriculture.
                      </p>
                      <strong>Supports Immunity and Wellness</strong>
                      <p>
                        Many organic spices and herbs, such as ginger, garlic,
                        and cinnamon, are known for their natural healing
                        properties. These spices are packed with antioxidants
                        that boost the immune system and support overall health.
                      </p>{" "}
                      <strong>Suitable for Sensitive Diets</strong>
                      <p>
                        Organic spices are an excellent choice for those with
                        allergies or sensitivities to preservatives or
                        artificial additives. Since they are grown without
                        chemicals and contain no preservatives, they are ideal
                        for clean eating and allergy-conscious diets.
                      </p>
                      <div className="details_img mt-3 mb-3">
                        <div className="row">
                          <div className="col-xs-4 col-sm-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                            <img
                              src="http://res.cloudinary.com/sanyuktifood/image/upload/v1731304941/kwahvleq60du4mbvaw2p.jpg"
                              className="w-100 img-fluid"
                              alt="blogdetails1"
                            />
                          </div>

                          <div className="col-xs-4 col-sm-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                            <img
                              src="http://res.cloudinary.com/sanyuktifood/image/upload/v1731304942/biem8utltwgkq8hckeo2.jpg"
                              className="w-100 img-fluid"
                              alt="blogdetails2"
                            />
                          </div>
                          <div className="col-xs-4 col-sm-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                            <img
                              src="http://res.cloudinary.com/sanyuktifood/image/upload/v1731304941/kwahvleq60du4mbvaw2p.jpg"
                              className="w-100 img-fluid"
                              alt="blogdetails3"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p>
                      Whether you&#39;re sourcing from a spices manufacturer, a
                      spices exporter, or browsing masala brands in India,
                      choosing organic spices ensures you&#39;re getting the
                      highest quality and most flavorful ingredients for your
                      cooking. Organic spices are a fantastic choice for those
                      who want to enjoy healthy, flavorful meals while
                      supporting sustainable farming practices. covered. Contact
                      us to experience the difference with Spice Manufactures
                      Mills today.
                    </p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetails;
