import React from "react";
import parse from "html-react-parser";
const PageHeader = ({ bgImg, title, content }) => {
  return (
    <div
      className="page-header-area bg-img"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-8 m-auto">
            <div className="page-header-content-inner">
              <div className="page-header-content bg-b-opacity text-center p-4 ">
                <h2>{title}</h2>
                <span className="about-since">{parse(content)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
