import ProductCard from "./Product/ProductCard";
import demoimg from "../assets/img/Chole.jpeg";
// import demoimg2 from "../assets/img/MeatMasale.jpg";
// import chatmasala from "../assets/img/ChatMasala.jpg";
// import chickenmasala from "../assets/img/chickenMasala.jpg";
import HaldiPowder from "../assets/img/Turmaric.jpg";
import redchilly from "../assets/img/redchilly.jpg";
import dhaniya from "../assets/img/loose-dhaniya.jpg";
// import garammasala from "../assets/img/Garam-Masala.jpg";
function OurbestSeller() {
  return (
    <>
      <div className="full-bestSeller" id="product">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="section-title">Our Best Seller Product</h3>
              <p className="section-subtitle">
                Grow your business with our premium spices in bulk quantities.
                Enjoy exclusive discounts and top-quality spices perfect for
                resale. Buy in bulk and boost your profits today
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <ProductCard images={HaldiPowder} title="Haldi Powder" />
            <ProductCard
              images={redchilly}
              title="Red Chili Powder"
              description="Red Chili Powder adds bold, spicy heat and vibrant color to dishes"
            />
            <ProductCard
              images={dhaniya}
              title="Dhaniya Powder"
              description="Dhaniya Powder, also known as coriander powder, imparts a warm,  to dishes."
            />
            <ProductCard
              images={demoimg}
              title="Chole masala"
              description="Chole Masala is a rich, aromatic blend of spices that enhances dishes  savory flavors"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OurbestSeller;
