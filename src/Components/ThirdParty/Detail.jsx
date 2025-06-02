import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useParams } from "react-router-dom";
import img from "../../assets/img/singleform.jpg";
import img1 from "../../assets/img/Blended.jpg";
import img3 from "../../assets/img/Spray Dried fruit Powder.webp";
import img4 from "../../assets/img/Spray Dried Vegetable Products.jpg";
import img5 from "../../assets/img/Dehydrated Vegetable.jpeg";
import img6 from "../../assets/img/Seasoning Products.jpg";
import wholespices from "../../assets/img/Wholespices.jpg";
import { useState } from "react";
const relatedproduct = [
  {
    title: "single-form-spices",
    image: img,
    list: [
      "Turmeric Powder",
      "Red Chilli Powder",
      "Cumin Powder",
      "Coriander Powder",
      "Black Pepper Powder",
      "Clove Powder",
      "Cinnamon Powder",
      "Cardamom Powder",
      "Bay Leaves Powder",
      "Dry Mango Powder",
      "Dry Ginger Powder",
      "Onion Powder",
      "Garlic Powder",
      "Dry Tomato Powder",
      "Nutmeg Powder",
      "Fennel Powder",
      "White Pepper Powder",
      "Kashmiri Mirch Powder",
      "Yellow Chilli Powder",
      "Paprika Powder",
      "Fenugreek Powder",
      "Hing (Asafoetida)",
    ],
    description: `Kafal's single-form spices are expertly crafted blends of high-quality spices, meticulously curated to enhance the flavor of your favorite dishes. Our convenient packaging ensures that you get the perfect balance of flavors every time, making cooking a delightful experience. Experience the essence of authentic Indian cuisine with Kafal's single-form spices.
    `,
  },
  {
    title: "blended-spices",
    image: img1,
    list: [
      "Curry masala",
      "Garam masala",
      "Kitchen king masala",
      "Meat masala",
      "Chicken Masala",
      "Bar be que masala",
      "Fish masala",
      "Tea masala",
      "Sabji masala",
      "Dhai bhala masala",
      "Egg curry masala",
      "Chat masala",
      "Chole masala",
      "Chana masala",
      "Sahi Paneer masala",
      "Matar Paneer masala",
      "Sambhar masala",
      "Biryani masala",
      "Jaljeera masala",
      "Paw bhaji masala",
      "Rayta masala",
      "Rajma masala",
      "Dal makhani masala",
      "PaniPuri masala",
      "Sikanji masala",
      "SoyaChap masala",
      "Madrash Curry Powder",
    ],
    description: `Kafal's blended spices are expertly crafted using premium-quality ingredients, ensuring exceptional flavor and aroma in every blend. We offer customization options for bulk buyers, allowing them to tailor the blends according to their specific needs or unique formulas. Experience the finest in spice blending with Kafal
    `,
  },
  {
    title: "spray-dried-fruit-powder",
    image: img3,
    list: [
      "Mango Powder",
      "Banana Powder",
      "Pineapple Powder",
      "Strawberry Powder",
      "Orange Powder",
      "Pomegranate Powder",
      "Custard Apple Powder",
      "Guava Powder",
      "Litchi Powder",
      "Amla Powder",
      "Papaya Powder",
      "Chikoo Powder",
      "Coconut Water Powder",
      "Peach Powder",
      "Watermelon Powder",
      "Jack Fruit Powder",
      "Honey Powder",
      "Apple Powder",
      "Sugarcane Powder",
      "Black Jamun Powder",
      "Blueberry Powder",
      "Mulberry Powder",
      "Raspberry Powder",
      "Elderberry Powder",
      "Cranberry Powder",
      "Acaiberry Powder",
    ],
    description: `Kafal's Spray-dried fruit powder is a convenient and versatile ingredient crafted from fresh fruits. The spray drying process preserves the fruit's natural flavor, color, and nutrients, resulting in a fine powder that can be easily integrated into various applications. This powder is ideal for enhancing the natural fruit flavor and sweetness in beverages, baking, confectionery, and savory products. It's a popular choice among manufacturers seeking to enrich the taste and nutritional value of their products
    `,
  },
  {
    title: "spray-dried-vegetable",
    image: img4,
    list: [
      "Tomato Powder",
      "Tamarind Powder",
      "Lemon Powder",
      "Lime Powder",
      "Spinach Powder",
      "Carrot Powder",
      "Beetroot Powder",
      "Ginger Powder",
      "Pumpkin Powder",
      "Green Chilli Powder",
      "Onion Powder",
      "Garlic Powder",
      "Soya Sauce Powder",
      "Capsicum Powder",
      "Bitter Gourd Powder",
      "Mint Powder",
      "Bottle Gourd Powder",
      "Cucumber Powder",
    ],
    description: `Kafal's spray-dried vegetable powder is a convenient and versatile ingredient made from fresh vegetables. Through the spray drying process, the vegetables' natural flavor, color, and nutrients are preserved, resulting in a fine powder that can be easily incorporated into a variety of applications. Spray-dried vegetable powder can be used in soups, sauces, seasonings, and other food products to add natural vegetable flavor and nutrients. It is a popular choice for manufacturers looking to enhance the taste and nutritional profile of their products.
    `,
  },
  {
    title: "dehydrated-vegetable",
    image: img5,
    list: [
      "Garlic Flakes",
      "Onion Flakes",
      "Ginger Flakes",
      "Carrot Flakes",
      "Green Chilli Flakes",
      "Red Chilli Flakes",
      "Beetroot Flakes",
      "Oregano Flakes",
      "Cabbage Flakes",
      "Garlic Powder",
      "Onion Powder",
      "Ginger Powder",
      "Carrot Powder",
      "Green Chilli  Powder",
      "Red Chilli Powder",
      "Beetroot Powder",
      "Spinach Powder",
      "Amchur Powder",
      "Mint Powder",
      "Curry Leaves Powder",
      "Coriander Leaves Powder",
      "Fenugreek Leaves Powder",
      "Bitter Gourd Powder",
      "Bottle Gourd Powder",
    ],
    description: `Kafal's dehydrated vegetable products are crafted from fresh vegetables, preserving their natural flavors and nutrients. Our dehydration process ensures that the vegetables retain their quality and nutritional value, making them a versatile and convenient ingredient for a variety of dishes. Add Kafal's dehydrated vegetables to your recipes for a burst of flavor and nutrition.
    `,
  },
  {
    title: "seasoning-products",
    image: img6,
    list: [
      "Navratan Masala",
      "Aalu Bhujia masala",
      "nimbu masala",
      "chatpata masala",
      "jhurja mixtur masala",
      "daal biji masala",
      "hari matar masala",
      "hing jeera",
      "ratlaami sev masala",
      "punjabi tadka",
      "nut cracker masala",
      "Raita bundi masala",
      "bhel puri masala",
      "kurkura masala",
      "italian pasta masala",
      "green chilly pasta masala",
      "tangi tomato",
      "tomato puff",
      "tomato chilly",
      "Yellow magic",
      "chatpata katori masala",
      "cocktail masala",
      "garlic gold masala",
      "maggi masala",
      "pola masala",
      "khatta meetha masala",
      "tangi podina masala",
      "spanish tomato chips",
      "nimbu puff masala",
      "green chilli puff",
      "curls masala",
      "cheese ball masala",
      "schezwan masala",
      "chinese tadka masala",
      "hot & sweet masala",
      "green bhel masala",
      "noodles masala",
    ],
    description: `Kafal seasoning blends are expertly crafted to add depth and flavor to your dishes. Made from a harmonious combination of premium herbs and spices, Kafal seasoning enhances the taste of your food, giving it a delicious and aromatic twist. Experience the rich flavors of Kafal seasoning and elevate your culinary creations to new heights
    `,
  },
  {
    title: "whole-spices",
    image: wholespices,
    list: [
      "DalChini (Cinnamon)",
      "Kali Mirch (Black Pepper)",
      "Badi Elaichi (Black Cardamom)",
      "Hari Elaichi (Green Cardamom)",
      "Laung (Clove)",
      "Jayphal (Nutmeg)",
      "Javitri (Mace)",
      "Long Pepper (Peepal)",
      "Star Anise (Star Phool)",
      "Badi Elaichi (Black Cardamom)",
      "Anar Dana (Pomegranate Seeds)",
      "Bay Leaf (Tejpatta)",
      "Emli (Tamarind)",
      "Kasoori Methi (Fenugreek)",
      "Jeera (Cumin)",
      "Ajwain (Carom Seeds)",
      "Rai",
      "Sauf (Fennel)",
      "Whole Coriander",
      "Whole Red Chilli",
      "Black Mustard (Kali Sarso)",
      "Methi Dana (Fenugreek Seeds)",
    ],
    description: `Whole spices offer a robust, full-bodied flavor and aroma to dishes. They bring authenticity and depth to culinary creations, enriching them with a complex blend of tastes. Whole spices like cinnamon sticks, cardamom pods, and cumin seeds release their essential oils when cooked, enhancing both the texture and taste of meals.`,
  },
];
function Detail() {
  const { name } = useParams();
  const [activetab, setActivtab] = useState("description");
  const handeltab = (tab) => {
    setActivtab(tab);
  };
  const matchingProduct = relatedproduct.find(
    (product) => product.title === name
  );

  const filteredRelatedProducts = relatedproduct.filter(
    (product) => product.title !== name
  );
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
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
                  <div className="big_img">
                    {matchingProduct && (
                      <img
                        src={matchingProduct.image}
                        className="w-100 img-fluid"
                        alt="matchingProduct"
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div className="producudetails_content">
                  <h3>{name}</h3>

                  <p>{matchingProduct.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product_tabber">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ul
                  className="nav nav-tabs nav_custom"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      onClick={() => handeltab("description")}
                      className={`nav-link nav-link-custom ${
                        activetab === "description" ? "active" : ""
                      }`}
                      id="description-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="description"
                      aria-selected={activetab === "description"}
                    >
                      DESCRIPTION
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      onClick={() => handeltab("information")}
                      className={`nav-link nav-link-custom ${
                        activetab === "information" ? "active" : ""
                      }`}
                      id="information-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="information"
                      aria-selected={activetab === "information"}
                    >
                      List of Products
                    </button>
                  </li>
                </ul>

                <div className="tab-content" id="myTabContent">
                  <div
                    className={`tab-pane fade ${
                      activetab === "description" ? "show active" : ""
                    }`}
                    id="description"
                    role="tabpanel"
                    aria-labelledby="description-tab"
                  >
                    <p>{matchingProduct.description}</p>
                  </div>
                  <div
                    className={`tab-pane fade ${
                      activetab === "information" ? "show active" : ""
                    }`}
                    id="information"
                    role="tabpanel"
                    aria-labelledby="information-tab"
                  >
                    {matchingProduct && (
                      <p>
                        <strong>List of Products:</strong>
                        <br />
                        {matchingProduct.list.map((item, index) => (
                          <span key={index}>
                            <button
                              type="button"
                              className=" btn-secondary  m-1"
                            >
                              {item}
                            </button>
                          </span>
                        ))}
                      </p>
                    )}
                  </div>
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
                        alt="product.image}"
                      />
                    </div>
                    <div className="product-content">
                      <div className="product-details position-bottom-left">
                        <h3 className="product-name">
                          <Link
                            to={`/thirdparty/${formatTitleForURL(
                              product.title
                            )}`}
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

export default Detail;
