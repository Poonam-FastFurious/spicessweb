import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useParams } from "react-router-dom";
import demoimg from "../../assets/img/Chole.jpeg";
import demoimg2 from "../../assets/img/MeatMasale.jpg";
import chatmasala from "../../assets/img/ChatMasala.jpg";
import chickenmasala from "../../assets/img/chickenMasala.jpg";
import HaldiPowder from "../../assets/img/Turmaric.jpg";
import redchilly from "../../assets/img/redchilly.jpg";
import dhaniya from "../../assets/img/loose-dhaniya.jpg";
import garammasala from "../../assets/img/Garam-Masala.jpg";
const relatedproduct = [
  {
    title: "Haldi-Powder",
    image: HaldiPowder,
    description: `Kafal  Turmeric Powder is known for its potency, with even a small quantity enhancing the color and flavor of your dish. This potency ensures that you get the authentic taste of turmeric in every dish, bringing alive the vibrant colors and flavors of Indian cuisine.
    The brand is committed to providing consumers with the finest products, using carefully selected ingredients processed with the same care you put into your cooking. Kafal offers a wide range of products, including flour, clarified butter, salt, spices, and instant mixes, designed to suit various tastes and lifestyles.
    
    Kafal is a leading Indian company, with a presence in FMCG, Hotels, Packaging, Paperboards & Specialty Papers, Agri & IT Businesses. Kafal Brands are crafted to meet a variety of tastes, needs, and lifestyles. With a focus on quality and innovation, along with modern packaging and customer insights, Kafal is dedicated to delivering excellence.
    `,
  },
  {
    title: "Red-Chili-Powder",
    image: redchilly,
    description: `When you're looking to add a bit of spice, Chile Powder is the perfect choice. It's distinct from blended Chili Powder, as it's made solely from a specific type of chili pepper. The fine texture of this powder makes it easy to blend into sauces or use in dry rubs, allowing you to customize the level of pepper flavor in your dishes. You can easily control the amount you use by measuring out as little or as much as you need. It's advisable to start with a small quantity and adjust to your taste. Due to their ground nature, it's recommended to purchase these powders in smaller quantities compared to other chili products, as they may lose freshness more quickly due to the larger exposed surface area. Additionally, we offer a variety of Chile Flakes and Whole Dried Chiles for you to explore different flavors.
    `,
  },
  {
    title: "Dhaniya-Powder",
    image: dhaniya,
    description: `For generations, the delightful aroma of farm-fresh coriander seeds has enhanced Indian cuisine with its unique flavor. At Kafal, we take pride in creating our Coriander Powder from the finest green coriander seeds, handpicked from select Indian farms. Our process begins with the freshest dhaniya (coriander) seeds, ground carefully to achieve perfection.
    Kafal's Coriander Powder has gained the trust and appreciation of homemakers for its outstanding quality and the culinary wonders it brings to everyday cooking. It's a hidden gem that enhances your dishes, elevating them to a new level of taste and aroma, meeting your culinary needs with unmatched excellence.
    Savor the essence of goodness and joy with every sprinkle of Kafal's Coriander Powder. Let its rich, fragrant aroma and burst of flavor transform your cooking into a memorable experience, just as it has for countless households. Experience the true essence of quality and taste with Kafal. Purchase Kafal dhania powder now and witness the magic for yourself
    `,
  },
  {
    title: "Garam-Masala",
    image: garammasala,
    description: `Garam masala is a popular Indian spice blend known for its warm and aromatic flavor. It typically includes spices like cumin, coriander, cardamom, cloves, cinnamon, nutmeg, and black pepper, among others. These spices are often toasted and ground together to create a fragrant mixture that enhances the taste of various dishes. Garam masala adds depth and complexity to recipes such as curries, stews, and roasted vegetables.`,
  },
  {
    title: "Chat-Masala",
    image: chatmasala,
    description: `Chaat masala is a tangy and aromatic spice blend commonly used in Indian cuisine, particularly in chaat dishes such as pani puri, bhel puri, and aloo chaat. It typically includes spices like cumin, coriander, black salt, dried mango powder (amchur), and chili powder, giving it a zesty and slightly sour flavor. Chaat masala adds a burst of flavor and excitement to snacks, salads, and street food, enhancing the overall taste of the dish`,
  },
  {
    title: "Chole-masala",
    image: demoimg,
    description: ` Masala is a flavorful Indian dish made with chickpeas cooked in a spiced tomato-based sauce. It features a blend of aromatic spices like cumin, coriander, turmeric, and garam masala, which give the dish its rich, bold flavor. Chole Masala is often garnished with fresh cilantro and served with rice, naan, or bhature. It's a popular vegetarian option that offers a hearty, satisfying meal.`,
  },
  {
    title: "Meat-Masala",
    image: demoimg2,
    description: `
    Meat masala is a flavorful spice blend commonly used in Indian cuisine to season and enhance the taste of meat dishes such as chicken, lamb, or beef. It typically includes a mix of aromatic spices like cumin, coriander, turmeric, black pepper, and chili powder, as well as warm spices like cinnamon, cloves, and cardamom. This versatile blend adds depth and complexity to meat dishes, making them rich and savory.`,
  },
  {
    title: "Chicken-Masala",
    image: chickenmasala,
    description: `Chicken masala is a popular Indian spice blend specifically crafted for enhancing chicken dishes. It typically contains a mixture of spices such as cumin, coriander, turmeric, black pepper, and chili powder, along with warm spices like cardamom, cloves, and cinnamon. The blend may also include ginger and garlic powder for added depth. Chicken masala adds a rich and savory flavor to chicken curries, grills, and roasts, making them more aromatic and delicious.`,
  },
];
function ProductDetails() {
  const { title } = useParams();
  const matchingProduct = relatedproduct.find(
    (product) => product.title === title
  );
  const filteredRelatedProducts = relatedproduct.filter(
    (product) => product.title !== title
  );
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  console.log(matchingProduct);
  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,

    arrows: true,

    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };
  const formatTitleForURL = (title) => {
    return title.replace(/\s+/g, "-");
  };
  return (
    <>
      <div className="container">
        <div className="product_details">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div className="product_img d-flex">
                  {matchingProduct && (
                    <img
                      src={matchingProduct.image}
                      className="w-100 img-fluid"
                      alt={matchingProduct.title}
                    />
                  )}
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div className="producudetails_content">
                  <h3>{title}</h3>
                  <div className="customer_review"></div>

                  <p>{matchingProduct.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="full-bestSeller">
          <div className="container">
            <div className="row">
              <div className="col-12 text-left">
                <h3 className="section-title">Related Product</h3>
              </div>
            </div>

            <Slider {...settings} className="row mt-5 ">
              {filteredRelatedProducts.map((product, index) => (
                <div
                  key={index}
                  className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-12"
                >
                  <div className="product">
                    <div className="product-img">
                      <img
                        className="w-100"
                        src={product.image}
                        alt="product.image"
                      />
                    </div>
                    <div className="product-content">
                      <div className="product-details position-bottom-left">
                        <h3 className="product-name">
                          <Link
                            to={`/product/${formatTitleForURL(product.title)}`}
                            onClick={scrollToTop}
                          >
                            {product.title}
                          </Link>
                        </h3>
                      </div>
                      <div className="buttons">
                        <span className="sold-out-tag position-top-right">
                          Sold out
                        </span>
                      </div>

                      <div className="icons position-center">
                        <div className="rounded-icon">
                          <i className="icofont-eye"></i>
                        </div>

                        <div className="rounded-icon">
                          <i className="icofont-heart-alt"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
