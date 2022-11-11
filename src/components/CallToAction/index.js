import React from "react";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function CallToAction() {
  const { t } = useTranslation();
  return (
    <div className="call-top-action-wrap sp-y">
      <div className="container">
        <div className="footer-top-content">
          <div className="row align-items-center">
            <div className="col-md-8 col-lg-6">
              <h2> {t("get_started_today")}</h2>
              <p>{parse(t("call_to_action_text"))}</p>
            </div>
            <div className="col-md-4 col-lg-6 text-md-right mt-sm-25">
              <Link
                to={`${process.env.PUBLIC_URL + "/contact"}`}
                className="btn-outline"
              >
                {t("contact_us")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
