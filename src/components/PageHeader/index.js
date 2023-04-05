import React from "react";
import parse from "html-react-parser";
import { useTranslation } from "react-i18next";

const PageHeader = ({ bgImg, content }) => {
  const { t } = useTranslation();
  return (
    <div
      className="page-header-area bg-img"
      style={{ backgroundImage: `url(https://mielproje.com.tr/api/upload/${bgImg})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-8 m-auto">
            <div className="page-header-content-inner">
              <div className="bg-b-opacity text-center p-4 poem">
                <span className="about-since">{parse(t(content))}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
