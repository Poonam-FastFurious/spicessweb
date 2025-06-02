import { Link, useParams } from "react-router-dom";
import useBlogStore from "../../Store/useBlogStore";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const BlogDetail = () => {
  const { link } = useParams();
  const { blogDetails, fetchBlogDetail } = useBlogStore();

  useEffect(() => {
    const load = async () => {
      await fetchBlogDetail(link);
    };
    load();
  }, [link, fetchBlogDetail]);

  const blog = blogDetails[link];
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{blog?.metaTitle}</title>
        <meta name="description" content={blog?.metaDescription} />
        <meta name="keywords" content={blog?.metakeywords} />
        <link rel="canonical" href={`/${blog?.metaTitle}`} />

        {/* Open Graph / Facebook Meta Tags */}
      </Helmet>
      <div className="hero_section">
        <div className="png_img">
          <img
            className="w-100 img-fluid"
            src="https://soyonexpress.com/html-demos/tazza/img/leaf.png"
            alt="leaf"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="herosection_content">
                <h2>Blog Details</h2>
                <Link
                  to="//"
                  className="btn border-radius-0 border-transparent"
                >
                  Home - Pages
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blogdetails_part">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className="populer_tag">
                    <div className="sidebar">
                      <h4 className="border-0">Populer Tag</h4>
                    </div>
                    <div className="populer_btn">
                      <ul>
                        <li>spicy indian </li>
                        <li>indian spice manufacturers,</li>
                        <li>Third-Party Spices Manufacturers</li>
                        <li>Spices Exporter in India</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8 col-xl-8">
              <div className="container mt-5 blog_dynamic_content">
                {blog?.sections.map((section, index) => {
                  const delay = 0.2 + index * 0.1;

                  if (section.type === "title") {
                    return (
                      <div className="blog_title" key={section._id}>
                        <h4>
                          <Link to="#">{section.content}</Link>
                        </h4>
                      </div>
                    );
                  }

                  if (section.type === "paragraph") {
                    return (
                      <div key={section._id} className="mb-60 ">
                        <p
                          className="blog-"
                          dangerouslySetInnerHTML={{ __html: section.content }}
                        ></p>
                      </div>
                    );
                  }

                  if (section.type === "image") {
                    const images = Array.isArray(section.content)
                      ? section.content
                      : [section.content];

                    return (
                      <div
                        key={section._id}
                        className="mb-60 wow fadeInUp"
                        data-wow-delay={`${delay}s`}
                      >
                        <div className="d-flex gap-lg-4 gap-md-3 gap-2 mt-4">
                          {images.map((img, i) => (
                            <div className="blog-straght-thumb w-100" key={i}>
                              <img
                                src={img}
                                alt={`image-${i}`}
                                className="rounded-3 w-100"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  return null;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
