import { Link } from "react-router-dom";
import Pagetop2 from "../PageTop/Pagetop2";
import blogsimage from "../../assets/img/blogs.jpg";
import useBlogStore from "../../Store/useBlogStore";
import { useEffect } from "react";
function Bloglist() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
 const { blogList, fetchBlogList } = useBlogStore();

  useEffect(() => {
    fetchBlogList();
  }, [fetchBlogList]);

  if (!blogList)
    return <div className="text-center py-10">Blog not found.</div>;
  const blogPosts = [
    {
      date: "23 April 2025",
      likes: 50,
      comments: 45,
      title: "What is the Difference Between Ground Spice and Mixed Spice?",
      img: blogsimage,
      link: "/blogdetails/what-is-the-difference-between-ground-spice-and-mixed-spice",
    },
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
    <>
      <Pagetop2 title="Latest Blogs" />
      <div className="full-latest-news py-12 bg-gray-50">
        <div className="container mb-12">
          <div className="text-center mb-12  m-4"></div>

          <div className="row">
             {blogList.map((blog) => {
              const title =
                blog.sections.find((sec) => sec.type === "title")?.content ||
                "Untitled";

              const images = blog.sections
                .filter((sec) => sec.type === "image")
                .flatMap((sec) => sec.content);
              const firstImage =
                images.length > 0
                  ? images[0]
                  : "https://via.placeholder.com/300x200";
              return (
                <div className="col-md-6 col-lg-4 mb-4" key={blog._id}>
                  <div className="border rounded-lg overflow-hidden shadow-sm h-100 d-flex flex-column">
                    <div className="news-img">
                      <img src={firstImage} alt={title} className="w-100" />
                    </div>
                    <div className="p-3 flex-grow-1 d-flex flex-column justify-content-between">
                      <div>
                        <div className="d-flex justify-content-between text-muted text-sm mb-2">
                          <span>
                            {new Date(blog.createdAt).toLocaleDateString(
                              "en-GB",
                              {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              }
                            )}
                          </span>
                          
                        </div>
                        <h5 className="mb-0">
                          <Link
                            to={`/${blog?.link}`}
                            onClick={scrollToTop}
                            className="text-dark"
                          >
                            {title}
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
    </>
  );
}

export default Bloglist;
