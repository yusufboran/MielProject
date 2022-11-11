import React from "react";
import parse from "html-react-parser";
import { useTranslation } from "react-i18next";

const About = ({ content, imgUrl }) => {
  const { t } = useTranslation();
  return (
    <div
      className="home-two-about-area"
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-content about-content--2 bg-red">
              <p>{parse(t(content))}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
