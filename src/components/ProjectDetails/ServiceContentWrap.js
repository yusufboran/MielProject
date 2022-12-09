import React from "react";
import List from "../UI/List";
import LI from "../UI/List/Item";
import IconBox from "../IconBox";
import Text from "../UI/Text";

import HowWeWorksData from "../../data/HowWeWorks/how-we-works";
import Sidebar from "../Sidebar";
import SidebarItem from "../Sidebar/SidebarItem";
import Anchor from "../UI/Anchor";

const ServiceContentWrap = ({ prevService, nextService, description }) => {
  return (
    <div className="col-lg-12">
      <div className="service-details-content">
        <div className="service-details-info">
          <div className="about-service mt-50 mt-sm-35">
            {<div dangerouslySetInnerHTML={{ __html: description }} />}
          </div>

          <div className="download-documents">
            <Sidebar classes={"col-lg-8 mtn-40"}>
              <SidebarItem title="Download Brochure">
                <List classes="service-list">
                  <LI>
                    <Anchor path="/">
                      <i className="fa fa-file-pdf-o" />
                      Brochures.PDF
                    </Anchor>
                  </LI>
                  <LI>
                    <Anchor path="/">
                      <i className="fa fa-file-word-o" />
                      Brochures.DOC
                    </Anchor>
                  </LI>
                </List>
              </SidebarItem>
            </Sidebar>
          </div>

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
