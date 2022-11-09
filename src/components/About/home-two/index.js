import React from "react";
import parse from "html-react-parser";

const About = ({ content, imgUrl }) => {
  return (
    <div
      className="home-two-about-area"
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-content about-content--2 bg-red">
              <p>{parse(content)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
