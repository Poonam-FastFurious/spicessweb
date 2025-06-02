import { Link } from "react-router-dom";
import Card from "./Card";
import { FaArrowRight } from "react-icons/fa";
import img from "../../assets/img/singleform.jpg";
import img1 from "../../assets/img/Blended.jpg";
import img3 from "../../assets/img/Spray Dried fruit Powder.webp";
import img4 from "../../assets/img/Spray Dried Vegetable Products.jpg";
import img5 from "../../assets/img/Dehydrated Vegetable.jpeg";
import img6 from "../../assets/img/Seasoning Products.jpg";
import leaff from "../../assets/img/leaf.png";

const masalaArray = [
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
];
const blendedMasale = [
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
  " Madrash Curry Powder",
];
const dryfruitPowderList = [
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
];
const SingleFormSpices = [
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
];
const dryvegetablePowderList = [
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
];

function ThirdParty() {
  return (
    <>
    
      <div className="hero_section">
        <div className="png_img">
          <img className="w-100 img-fluid" src={leaff} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="herosection_content">
                <h2>labeling services tailored to suit our clients needs</h2>
                <Link to="/" className="btn border-radius-0 border-transparent">
                  Home - Pages
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row p-5">
          <div className="col-12 text-center">
            <h3 className="section-title">Our Third Party Category</h3>
          </div>
        </div>
        <div className="row px-5">
          <Card
            product="single form spices"
            image={img}
            description="Kafal's single-form spices are expertly crafted blends of high-quality spices"
          />
          <Card
            product="blended spices"
            image={img1}
            description="Kafal's blended spices are expertly crafted using premium-quality ingredients"
          />
          <Card
            product="spray dried fruit powder"
            image={img3}
            description="Kafal's Spray-dried fruit powder is a convenient and versatile ingredient crafted from fresh fruits"
          />
        </div>
      </div>
      <div className="container">
        <div className="row px-5">
          <Card
            product="spray dried vegetable"
            image={img4}
            description="Kafal's spray-dried vegetable powder is a convenient and versatile ingredient made from fresh vegetables"
          />
          <Card
            product="dehydrated vegetable"
            image={img5}
            description="Kafal's dehydrated vegetable products are crafted from fresh vegetables,"
          />
          <Card
            product="seasoning products"
            image={img6}
            description="Kafal seasoning blends are expertly crafted to add depth and flavor to your dishes"
          />
        </div>
      </div>

      <div className="container p-5">
        <div className="card-header bg-secondary">
          <h3 className=" text-white">Product</h3>
        </div>
        <div className="row pt-2">
          <div className="col-lg-4 col-md-6">
            <div className="card mb-2">
              <ul className="list-group list-group-flush">
                <h3 className="product-name list-group-item">
                  <Link to="#">Blended Spices</Link>
                </h3>

                {blendedMasale.map((blend, index) => (
                  <li key={index}>
                    <FaArrowRight className=" pr-2" />
                    {blend}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card mb-2">
              <ul className="list-group list-group-flush">
                <h3 className="product-name list-group-item">
                  <Link to="#">Spray Dried Fruit Powder</Link>
                </h3>
                {dryfruitPowderList.map((fruitpowder, index) => (
                  <li key={index}>
                    <FaArrowRight className=" pr-2" />
                    {fruitpowder}
                  </li>
                ))}
                <br />
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card mb-2">
              <ul className="list-group list-group-flush">
                <h3 className="product-name list-group-item">
                  <Link to="#">Single Form Spices</Link>
                </h3>

                {SingleFormSpices.map((single, index) => (
                  <li key={index}>
                    <FaArrowRight className=" pr-2" />
                    {single}
                  </li>
                ))}
                <br />
                <br />
                <br />
                <br />
                <br />
              </ul>
            </div>
          </div>
        </div>
        <div className="row pt-2">
          <div className="col-lg-4 col-md-6">
            <div className="card mb-2">
              <ul className="list-group list-group-flush">
                <h3 className="product-name list-group-item">
                  <Link to="#">Spray Dried Vegetable Powder</Link>
                </h3>

                {dryvegetablePowderList.map((dryveg, index) => (
                  <li key={index}>
                    <FaArrowRight className=" pr-2" />
                    {dryveg}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card mb-2">
              <ul className="list-group list-group-flush">
                <h3 className="product-name list-group-item">
                  <Link to="#">Dehydrated Vegetable</Link>
                </h3>
                <div className="container">
                  <div className="row ">
                    <div className="col-lg-6  border ">
                      <h6 className="   ">Flakes</h6>
                      <ul className="list-group list-group-flush">
                        <li> Garlic</li>
                        <li>Onion</li>
                        <li> Ginger</li>
                        <li> Carrot</li>
                        <li> Green Chilli</li>
                        <li> Red Chilli</li>
                        <li> Beetroot</li>
                        <li> Oregano</li>
                        <li> Cabbage</li>
                      </ul>
                    </div>
                    <div className="col-lg-6 border ">
                      <h6 className="">Powder</h6>
                      <ul>
                        <li> Garlic</li>
                        <li>Onion</li>
                        <li> Ginger</li>
                        <li> Carrot</li>
                        <li> Green Chilli</li>
                        <li> Red Chilli</li>
                        <li> Beetroot</li>
                        <li> Spinach</li>
                        <li> Amchur</li>
                        <li> Mint</li>
                        <li> Curry Leaves</li>
                        <li> Coriander Leaves</li>
                        <li> Fenugreek Leaves</li>
                        <li> Bitter Gourd</li>
                        <li> Bottle Gourd</li>
                        <br />
                        <br />
                      </ul>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card mb-2">
              <ul className="list-group list-group-flush">
                <h3 className="product-name list-group-item">
                  <Link to="#">Seasoning Products</Link>
                </h3>

                {masalaArray.map((masala, index) => (
                  <li key={index}>
                    <FaArrowRight className=" pr-2" />
                    {masala}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThirdParty;
