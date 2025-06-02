import bgimg from "../assets/img/offer-bg.jpg";
function Offer() {
  return (
    <>
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#F3F4F6",
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center", // Center align the content
          padding: "2rem 0", // Add padding for better spacing
        }}
        className="bg-gray-50"
      >
        <h3
          style={{
            fontSize: "1.5rem",
            lineHeight: "1.75rem",
            fontWeight: "600",
            color: "#FFFFFF",
            marginBottom: "1rem", // Adjust margin for smaller screens
          }}
          className="text-xl font-semibold leading-tight text-gray-900"
        >
          Manufacturing Process
        </h3>
        <p
          style={{
            color: "#FFFFFF",
            fontSize: "1.2rem",
            marginBottom: "2rem", // Adjust margin for smaller screens
          }}
        >
          Hygienic process
        </p>
        <div
          style={{
            overflow: "hidden",
            margin: "0 auto",
            maxWidth: "90vw",
          }}
        >
          <div
            style={{
              marginTop: "8rem",
              marginBottom: "8rem",
              display: "grid",
              gap: "2rem 0.75rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(10rem, 1fr))",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "4rem",
                  height: "4rem",
                  backgroundColor: "#57B416",
                  border: "0.125rem solid #E5E7EB",
                  borderRadius: "9999px",
                  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
                }}
                className="flex items-center justify-center w-16 h-16 mx-auto border-2 border-gray-200 rounded-full shadow"
              >
                <span
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: "600",
                    color: "#374151",
                  }}
                  className="text-4xl font-bold text-gray-700"
                >
                  1
                </span>
              </div>
              <h3
                style={{
                  marginTop: "1.5rem",
                  fontSize: "1.5rem",
                  lineHeight: "1.75rem",
                  fontWeight: "600",
                  color: "#FFFFFF",
                }}
                className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 md:mt-10"
              >
                Sourcing raw material
              </h3>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "4rem",
                  height: "4rem",
                  backgroundColor: "#57B416",
                  border: "0.125rem solid #E5E7EB",
                  borderRadius: "9999px",
                  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
                }}
                className="flex items-center justify-center w-16 h-16 mx-auto border-2 border-gray-200 rounded-full shadow"
              >
                <span
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: "600",
                    color: "#374151",
                  }}
                  className="text-4xl font-bold text-gray-700"
                >
                  2
                </span>
              </div>
              <h3
                style={{
                  marginTop: "1.5rem",
                  fontSize: "1.5rem",
                  lineHeight: "1.75rem",
                  fontWeight: "600",
                  color: "#FFFFFF",
                }}
                className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 md:mt-10"
              >
                Cleaning
              </h3>
            </div>{" "}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "4rem",
                  height: "4rem",
                  backgroundColor: "#57B416",
                  border: "0.125rem solid #E5E7EB",
                  borderRadius: "9999px",
                  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
                }}
                className="flex items-center justify-center w-16 h-16 mx-auto border-2 border-gray-200 rounded-full shadow"
              >
                <span
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: "600",
                    color: "#374151",
                  }}
                  className="text-4xl font-bold text-gray-700"
                >
                  3
                </span>
              </div>
              <h3
                style={{
                  marginTop: "1.5rem",
                  fontSize: "1.5rem",
                  lineHeight: "1.75rem",
                  fontWeight: "600",
                  color: "#FFFFFF",
                }}
                className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 md:mt-10"
              >
                Drying
              </h3>
            </div>{" "}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "4rem",
                  height: "4rem",
                  backgroundColor: "#57B416",
                  border: "0.125rem solid #E5E7EB",
                  borderRadius: "9999px",
                  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
                }}
                className="flex items-center justify-center w-16 h-16 mx-auto border-2 border-gray-200 rounded-full shadow"
              >
                <span
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: "600",
                    color: "#374151",
                  }}
                  className="text-4xl font-bold text-gray-700"
                >
                  4
                </span>
              </div>
              <h3
                style={{
                  marginTop: "1.5rem",
                  fontSize: "1.5rem",
                  lineHeight: "1.75rem",
                  fontWeight: "600",
                  color: "#FFFFFF",
                }}
                className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 md:mt-10"
              >
                Grinding
              </h3>
            </div>{" "}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "4rem",
                  height: "4rem",
                  backgroundColor: "#57B416",
                  border: "0.125rem solid #E5E7EB",
                  borderRadius: "9999px",
                  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
                }}
                className="flex items-center justify-center w-16 h-16 mx-auto border-2 border-gray-200 rounded-full shadow"
              >
                <span
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: "600",
                    color: "#374151",
                  }}
                  className="text-4xl font-bold text-gray-700"
                >
                  5
                </span>
              </div>
              <h3
                style={{
                  marginTop: "1.5rem",
                  fontSize: "1.5rem",
                  lineHeight: "1.75rem",
                  fontWeight: "600",
                  color: "#FFFFFF",
                }}
                className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 md:mt-10"
              >
                Product Testing
              </h3>
            </div>{" "}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "4rem",
                  height: "4rem",
                  backgroundColor: "#57B416",
                  border: "0.125rem solid #E5E7EB",
                  borderRadius: "9999px",
                  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
                }}
                className="flex items-center justify-center w-16 h-16 mx-auto border-2 border-gray-200 rounded-full shadow"
              >
                <span
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: "600",
                    color: "#374151",
                  }}
                  className="text-4xl font-bold text-gray-700"
                >
                  6
                </span>
              </div>
              <h3
                style={{
                  marginTop: "1.5rem",
                  fontSize: "1.5rem",
                  lineHeight: "1.75rem",
                  fontWeight: "600",
                  color: "#FFFFFF",
                }}
                className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 md:mt-10"
              >
                final product dispatch
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Offer;
