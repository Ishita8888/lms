import React from "react";
import ImageSlider from "./ImageSlider";
import myImage1 from "./images/pexels-andrea-piacquadio-3807755.jpg";
import myImage2 from "./images/software-development-i1.jpg";
import myImage3 from "./images/pexels-andrea-piacquadio-3807754.jpg";
import myImage4 from "./images/computer-software-coding-with-abstract-binary-data_163855-142.avif";
//import reactImage from "./images/Ekran-Resmi-2019-11-18-18.08.13.png";

function Home({ displayRazorpay }) {
  const slides = [
    {
      url: myImage1,
    },
    {
      url: myImage2,
    },
    {
      url: myImage3,
    },
    { url: myImage4 },
  ];

  const containerStyles = {
    width: "100%",
    height: "380px",
    margin: "0 auto",
  };

  return (
    <div
      style={{
        backgroundColor: "#E8EEF1",
      }}
    >
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>

      <div
        style={{
          display: "flex",
          //flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "100px 20px 0 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "40vh",
            margin: "0 50px",
          }}
        >
          <h3>React for Beginners</h3>
          <img
            src="https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"
            alt="loading..."
            style={{
              width: "290px",
              height: "170px",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              margin: "20px 0 30px 0",
            }}
          />
          <button
            style={{ cursor: "pointer" }}
            className="donate-button"
            onClick={displayRazorpay}
          >
            Buy Course Rs499
          </button>
          <p>View Syllabus</p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "40vh",
            margin: "0 50px",
          }}
        >
          <h3>NodeJS for Beginners</h3>
          <img
            src="https://www.loginradius.com/blog/static/6ee159acf6c294342ec04f86aede5d14/701ee/coverImage.jpg"
            alt="loading..."
            style={{
              width: "300px",
              height: "170px",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              margin: "20px 0 30px 0",
            }}
          />
          <button
            style={{ cursor: "pointer" }}
            className="donate-button"
            onClick={displayRazorpay}
          >
            Buy Course Rs499
          </button>
          <p>View Syllabus</p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "40vh",
            margin: "0 50px",
          }}
        >
          <h3>Django for Beginners</h3>
          <img
            src="https://img-c.udemycdn.com/course/750x422/4152006_54df_5.jpg"
            alt="loading..."
            style={{
              width: "300px",
              height: "170px",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              margin: "20px 0 30px 0",
            }}
          />
          <button
            style={{ cursor: "pointer" }}
            className="donate-button"
            onClick={displayRazorpay}
          >
            Buy Course Rs499
          </button>
          <p>View Syllabus</p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "40vh",
            margin: "0 50px",
          }}
        >
          <h3>Python Course</h3>
          <img
            src="https://developers.redhat.com/sites/default/files/styles/article_feature/public/Python-01%20%282%29.png?itok=TEVIQBQo"
            alt="loading..."
            style={{
              width: "250px",
              height: "300px",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              margin: "20px 0 30px 0",
            }}
          />

          <button
            style={{ cursor: "pointer" }}
            className="donate-button"
            onClick={displayRazorpay}
          >
            Buy Course Rs499
          </button>
          <p>View Syllabus</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
