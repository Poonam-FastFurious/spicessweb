import Banner from "./Banner";
import Feature from "./Features";
import AboutUs from "./AboutUs";
import OurbestSeller from "./OurbestSeller";

import Blog from "./Blog";
import Partner from "./Partner";
import Testimonial from "./Testimonial";
import Offer from "./Offer";
import Offers2 from "./Offers2";

import Ourproducts from "./Product";

function Home() {
  return (
    <div>
      <Banner />
      <Feature />
      <Ourproducts />
      <AboutUs />

      <Offer />
      <Partner />
      <OurbestSeller />
      <Testimonial />
      <Offers2 />
      <Blog />
    </div>
  );
}

export default Home;
