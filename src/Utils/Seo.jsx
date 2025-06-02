import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const Seo = () => {
  const location = useLocation();

  const metaTags = {
    "/": {
      title:
        "Spices Manufacturer in India | Best Indian Spice Suppliers & Exporters",
      description:
        "Leading spices manufacturer in India offering premium Indian spices, masalas, and seasonings. Trusted spices suppliers & exporters worldwide. Order bulk today!",
      keywords:
        "spices manufacturers in india, spice suppliers in india, indian spice manufacturers, indian spice supplies, manufacturer of spices in india, spices supplier in india, indian spices suppliers, suppliers of spices in india, spices exporter in india, spice companies in india, export spices from india, masala companies in india, india spice company",
    },
    "/thirdparty": {
      title:
        "Third-Party Spices Manufacturer in India | Private Label Spice Suppliers",
      description:
        "Looking for third-party spices manufacturers in India? We offer private label spice manufacturing, customized packaging, and bulk spices supply worldwide.",
      keywords:
        "Best spices manufacturers in India, third party masala manufacturers in india, Best third party masala manufacturers in india, Best third party spices manufacturers in india, third party spices manufacturers in india, Spices Manufacturer Company, best third party masala manufacturers in delhi ncr, best third party Spices manufacturers in delhi ncr",
    },
    "/thirdparty/single-form-spices": {
      title: "Indian Spices Suppliers | Best Spice Exporters & Manufacturers",
      description:
        "Buy premium Indian spices from trusted spices suppliers in India. High-quality turmeric, cumin, black pepper, red chili, and more in bulk at the best prices.",
      keywords:
        "best spices exporter in india, spice exporter in india, best spices exporters in india, best spice exporter in india, Indian Spices Manufacturer, Best spices manufacturers in India",
    },
    "/thirdparty/blended-spices": {
      title: "Blended Spices Manufacturer | Best Masala Exporters in India",
      description:
        "We are a leading blended spices manufacturer in India, offering premium garam masala, chaat masala, biryani masala, and more. Private label available!",
      keywords:
        "Spices Manufacturer Company, Spices Manufacturer Near Me, Best Spices Supplier, Organic Spices Manufacturer, Masala Manufacturer in India, Wholesale Spices Supplier",
    },
    "/thirdparty/spray-dried-fruit-powder": {
      title:
        "Bulk Spices Supplier | Best Spice Manufacturers & Exporters India",
      description:
        "Leading bulk spices supplier offering premium-quality spray-dried fruit powders like mango, banana, and apple. Ideal for food industries & private labels.",
      keywords:
        "Spices Exporters in India, Indian Spices Supplier, Bulk Spices Supplier, Best Masala Manufacturer",
    },
    "/thirdparty/spray-dried-vegetable": {
      title: "Organic Spices Manufacturer | Wholesale Spice Exporters India",
      description:
        "Buy organic spices and spray-dried vegetable powders like tomato, beetroot, and spinach. Available in bulk supply with private labeling options.",
      keywords:
        "spices manufacturers in india, spice suppliers in india, indian spice manufacturers, indian spice supplies, manufacturer of spices in india",
    },
    "/thirdparty/dehydrated-vegetable": {
      title:
        "Spices Exporters in India | Leading Dehydrated Vegetables Supplier",
      description:
        "Top spices exporters in India, supplying dehydrated vegetables like onion, garlic, and carrots. Premium quality for food industries & global markets.",
      keywords:
        "spices supplier in india, indian spices suppliers, suppliers of spices in india, spices exporter in india, spice companies in india",
    },
    "/thirdparty/seasoning-products": {
      title: "Best Masala Manufacturer | Leading Spice Suppliers & Exporters",
      description:
        "Get authentic masalas and seasoning products from a top Indian spice manufacturer. Available for bulk orders, private labeling, and worldwide export.",
      keywords:
        "Spices Manufacturer Company, Spices Manufacturer Near Me, Best Spices Supplier, Organic Spices Manufacturer, Masala Manufacturer in India",
    },
    "/thirdparty/whole-spices": {
      title:
        "Whole Spices Supplier in India | Best Spices Exporter & Manufacturer",
      description:
        "Buy pure, whole spices from India's leading spices manufacturer. Get premium cardamom, cloves, black pepper, cinnamon, and more in bulk.",
      keywords:
        "export spices from india, masala companies in india, india spice company, best spices exporter in india, spice exporter in india, best spices exporters in india",
    },
    "/about-us": {
      title: "About Us | Best Indian Spices Manufacturer & Exporter",
      description:
        "Learn about India's best spices manufacturer and exporter, offering premium organic spices, blended masalas, and seasonings for global markets.",
      keywords:
        "Wholesale Spices Supplier, Spices Exporters in India, Indian Spices Supplier, Bulk Spices Supplier, Best Masala Manufacturer",
    },
    "/product/haldi-powder": {
      title:
        "Haldi Powder Manufacturer | Best Turmeric Powder Supplier in India",
      description:
        "Buy premium turmeric (haldi) powder from the leading turmeric powder manufacturer in India. 100% pure, organic, and best in quality!",
      keywords:
        "haldi powder manufacturer, turmeric powder manufacturer, turmeric powder supplier, haldi powder, turmeric powder",
    },
    "/product/red-chili-powder": {
      title:
        "Red Chili Powder Manufacturer | Best Chilli Powder Suppliers India",
      description:
        "Get fiery red chili powder from India's best red chili powder manufacturers. 100% natural, pure, and available for bulk purchase & exports.",
      keywords:
        "red chilli powder manufacturer, red chilli powder suppliers, red chilli powder",
    },
    "/product/garam-masala": {
      title:
        "Garam Masala Manufacturer | Best Blended Spices Supplier in India",
      description:
        "Buy authentic garam masala from a trusted Indian spices manufacturer. Blended with premium whole spices, available in bulk & private labeling.",
      keywords:
        "garam masala manufacturer, garam masala wholesale suppliers, garam masala, garam masala wholesale",
    },
    "/contact-us": {
      title: "Contact Best Spices Manufacturer | Indian Spice Supplier",
      description:
        "Reach out to India's top spices manufacturer for wholesale, bulk orders, or private labeling of spices. Get in touch today for the best deals!",
      keywords:
        "spices manufacturers, spice suppliers, indian spice, manufacturer of spices, suppliers of spices, spices exporter, spice companies, export spices, masala companies, spice company",
    },
    "/horeca": {
      title:
        "HORECA Spices Supplier | Bulk Spices for Hotels, Restaurants & Catering",
      description:
        "Leading HORECA spices supplier in India, offering premium bulk spices for hotels, restaurants, and catering services. Get high-quality Indian spices & seasonings in wholesale packaging.",
      keywords: "",
    },
    "/faq": {
      title: "FAQs | Spices Manufacturer in India – Your Questions Answered",
      description:
        "Find answers to common questions about spice manufacturing, bulk orders, private labeling, third-party spice production, and exports. Learn more about our spice quality, sourcing, and packaging.",
      keywords: "",
    },
    "/blogdetails/benefits-of-organics-spices": {
      title:
        "Latest Updates on Indian Spices | Spice Industry Trends & Recipes",
      description:
        "Stay updated with the latest trends, benefits, and uses of Indian spices. Explore expert guides, spice recipes, and industry insights.",
      keywords: "",
    },
    "/blogdetails/what-is-the-difference-between-ground-spice-and-mixed-spice":
      {
        title: "Ground or Mixed Spices? Ask the Best Masala Manufacturer",
        description:
          "Confused between ground and mixed spices? Get expert advice from an Organic Spices Manufacturer and the Best Masala Manufacturer trusted by chefs worldwide.",
        keywords: "Organic Spices Manufacturer Best Masala Manufacturer",
      },
    "/blogdetails/bulk-spice-buying-guide-for-restaurants-and-caterers": {
      title: "Top Spices Manufacturers & Suppliers in India for Bulk Orders",
      description:
        " Discover expert tips on buying in bulk from leading spices manufacturers in India. Kafal, trusted spice suppliers in India, deliver quality and consistency.",
      keywords: "spices manufacturers in india spice suppliers in india",
    },

    // seopages
    "/gurgaon": {
      title: "Spices Manufacturer in Gurgaon | Wholesale & Organic Spices",
      description:
        "Get the best wholesale spices in Gurgaon from a reliable masala supplier. We provide organic, bulk, and export-quality Indian spices for every need",
      keywords:
        "Spices Manufacturer in Gurgaon, Best Masala Supplier in Gurgaon, Wholesale Spices in Gurgaon, Organic Spices Supplier in Gurgaon, Spices Exporters in Gurgaon, Bulk Spices Supplier in Gurgaon",
    },
    "/faridabad": {
      title: "Spices Manufacturer in Faridabad | Best Masala Supplier",
      description:
        "Leading spices manufacturer in Faridabad, offering wholesale, organic, and bulk spices. Trusted masala supplier and exporter for premium Indian flavors.",
      keywords:
        "Spices Manufacturer in Faridabad, Best Masala Supplier in Faridabad, Wholesale Spices in Faridabad, Organic Spices Supplier in Faridabad, Spices Exporters in Faridabad, Bulk Spices Supplier in Faridabad, Indian Masala Manufacturer in Faridabad",
    },
    "/ghaziabad": {
      title: "Best Spices Manufacturer & Supplier in Ghaziabad | Wholesale",
      description:
        "Top spices manufacturer in Ghaziabad offering organic, bulk, and wholesale masala supplies. Get premium quality spices from trusted exporters. Order now!",
      keywords:
        "Spices Manufacturer in Ghaziabad, Best Masala Supplier in Ghaziabad, Wholesale Spices in Ghaziabad, Organic Spices Supplier in Ghaziabad, Spices Exporters in Ghaziabad, Bulk Spices Supplier in Ghaziabad",
    },
    "/delhi": {
      title: "Best Spices Manufacturers & Exporters in Delhi NCR | Wholesale",
      description:
        "Leading spices manufacturers in Delhi NCR. We offer third-party masala manufacturing, bulk supply, organic spices, and wholesale exports. Get premium quality spices!",
      keywords:
        "spice manufacturers in delhi, spices manufacturers in delhi, Spices Exporters in delhi ncr, spices manufacturer in delhi, Best spices manufacturers in delhi ncr, best third party masala manufacturers in delhi ncr, best third party Spices manufacturers in delhi ncr, Masala Supplier in Delhi Wholesale Spices in Delhi, Organic Spices in Delhi, Top Spices Exporter in Delhi, Bulk Spices Supplier in Delhi",
    },"/noida": {
      title: "Top Spices & Masala Manufacturers in Noida | Wholesale & Bulk",
      description:
        "Looking for the best spices in Noida? Get top-quality wholesale, organic, and bulk spices from leading third-party manufacturers and suppliers. Order now!",
      keywords:
        "third party spices manufacturers in noida, Best Spices in noida, Spices Exporters in noida, spices manufacturer in noida, Best spices manufacturers in noida, best third party masala manufacturers in noida, best third party Spices manufacturers in noida, Best Masala Supplier in Noida, Wholesale Spices in Noida, Organic Spices Supplier in Noida, Bulk Spices Supplier in Noida, Best Spices Wholesaler in Noida, Indian Masala Manufacturer in Noida",
    },
  };

  const currentMeta = metaTags[location.pathname] || {
    title: "Spices Manufacturer in India",
    description:
      "Discover the best Indian spices, masalas, and seasonings from a trusted supplier and exporter.",
    keywords: "spices, Indian spices, spice supplier, masalas",
  };

  return (
    <Helmet>
      <title>{currentMeta.title}</title>
      <meta name="description" content={currentMeta.description} />
      <meta name="keywords" content={currentMeta.keywords} />
    </Helmet>
  );
};

export default Seo;
