import React from "react";
import PdfView from "../../components/PdfView/index";

const ServiceContentWrap = ({ prevService, nextService, description, url }) => {
  return (
    <div className="col-lg-12">
      <div className="service-details-content">
        <div className="service-details-info">
          <div className="about-service mt-50 mt-sm-35">
            {<div dangerouslySetInnerHTML={{ __html: description }} />}
          </div>

          <PdfView url={url} />

          <div className="pagination-wrap">
            <ul className="pagination">
              <li className="prev">
                <a
                  href={`${
                    process.env.PUBLIC_URL +
                    `/projects/${prevService.title
                      .split(" ")
                      .join("-")
                      .toLocaleLowerCase()}?id=${prevService.id}`
                  }`}
                >
                  <i className="fa fa-long-arrow-left" /> Previous
                </a>
              </li>
              <li className="next">
                <a
                  href={`${
                    process.env.PUBLIC_URL +
                    `/projects/${nextService.title
                      .split(" ")
                      .join("-")
                      .toLocaleLowerCase()}?id=${nextService.id}`
                  }`}
                >
                  Next <i className="fa fa-long-arrow-right" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceContentWrap;
