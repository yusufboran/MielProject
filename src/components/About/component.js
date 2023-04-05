import { useTranslation } from "react-i18next";
import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import Thumbnail from "../UI/Thumbnail";
import Content from "../UI/Content";

const About = ({ content, imgUrl, disable }) => {
  const { t } = useTranslation();
  return (
    <div className="about-area-wrapper sm-top">
      <div className="container">
        <div className="row align-items-lg-center">
          <div className="col-md-6 col-lg-5">
            <Thumbnail
              classes="about-thumb"
              imgSrc={`https://mielproje.com.tr/api/upload/${imgUrl}`}
            />
          </div>

          <div className="col-md-6 col-lg-7">
            <Content classes="about-content">
              <h6>{t("about")}</h6>
              <p>{parse(t(content))}</p>
              {disable ? (
                <Link
                  to={`${process.env.PUBLIC_URL + "/about"}`}
                  className="btn-about"
                >
                  {t("More Details")} <i className="fa fa-angle-double-right" />
                </Link>
              ) : null}
            </Content>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
