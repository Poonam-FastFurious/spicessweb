import { Link } from "react-router-dom";

function Blog() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const blogPosts = [
    {
      date: "23 April 2025",
      likes: 50,
      comments: 45,
      title: "Bulk Spice Buying Guide for Restaurants and Caterers",
      img: "http://res.cloudinary.com/sanyuktifood/image/upload/v1731304941/kwahvleq60du4mbvaw2p.jpg",
      link: "/blogdetails/bulk-spice-buying-guide-for-restaurants-and-caterers",
    },
    {
      date: "11 January’20",
      likes: 10,
      comments: 120,
      title: "Top Spice Manufacturer Exporters and Suppliers",
      img: "http://res.cloudinary.com/sanyuktifood/image/upload/v1731304942/biem8utltwgkq8hckeo2.jpg",
      link: "/blogdetails/top-spice",
    },
    {
      date: "14 November 24",
      likes: 56,
      comments: 98,
      title: "What are the Benefits of Organics Spices & Herbs?",
      img: "http://res.cloudinary.com/sanyuktifood/image/upload/v1731302132/l6ekyq9wdislqfksbtmp.webp",
      link: "/blogdetails/benefits-of-organics-spices",
    },
  ];
  return (
    <div className="full-latest-news py-12 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold">
            <Link to="/blog">Latest Blogs</Link>
          </h3>
          <p className="text-gray-600 m-4">
            In-Depth Insights: Explore the Latest Trends and Tips
          </p>
        </div>

        <div className="row">
          {blogPosts.map((post, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="border rounded-lg overflow-hidden shadow-sm h-100 d-flex flex-column">
                <div className="news-img">
                  <img src={post.img} alt={post.title} className="w-100" />
                </div>
                <div className="p-3 flex-grow-1 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex justify-content-between text-muted text-sm mb-2">
                      <span>{post.date}</span>
                      <span>
                        <i className="icofont-ui-love me-1"></i>
                        {post.likes}
                      </span>
                      <span>
                        <i className="icofont-speech-comments me-1"></i>
                        {post.comments}
                      </span>
                    </div>
                    <h5 className="mb-0">
                      <Link
                        to={post.link}
                        onClick={scrollToTop}
                        className="text-dark"
                      >
                        {post.title}
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
