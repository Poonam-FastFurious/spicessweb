import "./App.css";
import "../src/assets/css/icofont.min.css";
import "../src/assets/css/slick.css";
import "../src/assets/css/slick-theme.css";
import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/style.css";
import "../src/assets/css/responsive.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

import About_Us from "./Components/AboutUs/About_Us";
import ContactUs from "./Components/ContactUs/ContactUs";
import ThirdParty from "./Components/ThirdParty/ThirdParty";
import ProductDetails from "./Components/Product/ProductDetails";
import Horeca from "./Components/Horeca/Horeca";
import BlogDetails from "./Components/BlogDetails";
import Detail from "./Components/ThirdParty/Detail";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader/Loader";

import Error404 from "./Components/Error404";
import FAQ from "./FAQ";
import TopSices from "./Components/BlogsDetails/TopSices";
import Seo from "./Utils/Seo";
import { HelmetProvider } from "react-helmet-async";
import Mixandground from "./Components/BlogsDetails/Mixandground";
import BulkSpice from "./Components/BlogsDetails/BulkSpice";
import Noida from "./Components/SEOPAGES/Noida";
import Delhi from "./Components/SEOPAGES/Delhi";
import Ghaziabaad from "./Components/SEOPAGES/Ghaziabaad";
import Faridabaad from "./Components/SEOPAGES/Faridabaad";
import Gurgaon from "./Components/SEOPAGES/Gurgaon";
import Bloglist from "./Components/Bloglist/Bloglist";
import BlogDetail from "./Components/BlogsDetails/Blogdetail";
import useBlogStore from "./Store/useBlogStore";

function App() {
  const { fetchBlogList } = useBlogStore();

  useEffect(() => {
    fetchBlogList();
  }, [fetchBlogList]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <HelmetProvider>
        {isLoading && (
          <div
            className=""
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100vw",
              height: "100vh",
              position: "fixed",
              top: 0,
              left: 0,
            }}
          >
            <Loader />
          </div>
        )}

        {!isLoading && (
          <BrowserRouter>
            <Seo />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About_Us />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/thirdparty" element={<ThirdParty />} />
              <Route path="/thirdparty/:name" element={<Detail />} />
              <Route path="/blog" element={<Bloglist />} />
              <Route path="/product/:title" element={<ProductDetails />} />
              <Route path="/horeca" element={<Horeca />} />
              <Route path="/:link" element={<BlogDetail />} />
              <Route
                path="/blogdetails/benefits-of-organics-spices"
                element={<BlogDetails />}
              />
              <Route
                path="/blogdetails/what-is-the-difference-between-ground-spice-and-mixed-spice"
                element={<Mixandground />}
              />
              <Route
                path="/blogdetails/bulk-spice-buying-guide-for-restaurants-and-caterers"
                element={<BulkSpice />}
              />
              <Route path="/blogdetails/Top-Spice" element={<TopSices />} />
              <Route path="/*" element={<Error404 />} status={404} />
              <Route path="/faq" element={<FAQ />} status={404} />
              {/* seo pages */}

              <Route path="/noida" element={<Noida />} />
              <Route path="/delhi" element={<Delhi />} />
              <Route path="/ghaziabad" element={<Ghaziabaad />} />
              <Route path="/faridabad" element={<Faridabaad />} />
              <Route path="/gurgaon" element={<Gurgaon />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        )}
      </HelmetProvider>
    </>
  );
}

export default App;
