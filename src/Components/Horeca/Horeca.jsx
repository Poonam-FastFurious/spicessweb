/* eslint-disable react/no-unescaped-entities */
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Card from "../ThirdParty/Card";
import img from "../../assets/img/singleform.jpg";
import img1 from "../../assets/img/Blended.jpg";
import wholespices from "../../assets/img/Wholespices.jpg";
import Pagetop2 from "../PageTop/Pagetop2";


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
const Wholespices = [
  "DalChini (Cinnamon)",
  "Kali Mirch (Black Pepper)",
  "Badi Elaichi (Black Cardamom)",
  "Hari Elaichi (Green Cardamom)",
  "Laung (Clove)",
  "Jayphal (Nutmeg)",
  "Javitri (Mace)",
  "Long Pepper (Peepal)",
  "Star Anise (Star Phool)",
  "Badi Elaichi (Black Cardamom)", // Removed duplicate
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
];

function Horeca() {
  return (
    <>
      
      <Pagetop2 title="HoReCa" />
      <div className="container">
        <div className="row p-5">
          <div className="col-12 text-center">
            <h3 className="section-title">Our Horeca Category</h3>
            <p className="section-subtitle">
              Kafal offers a range of high-quality products specifically
              tailored for the HORECA (Hotel, Restaurant, and Catering)
              industry. Our products are designed to meet the unique needs of
              businesses in the hospitality sector, ensuring exceptional quality
              and flavor in every dish. Experience the convenience and quality
              of Kafal's HORECA supply and elevate your culinary offerings.
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
          <div className="col-lg-4 col-md-6">
            <div className="card">
              <ul className="list-group list-group-flush">
                <h3 className="product-name list-group-item">
                  <Link to="#">Whole Spices</Link>
                </h3>
                {Wholespices.map((single, index) => (
                  <li key={index}>
                    <FaArrowRight className=" pr-2" />
                    {single}
                  </li>
                ))}
                <br /> <br /> <br /> <br /> <br />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Horeca;
