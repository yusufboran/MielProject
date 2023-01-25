import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function FeatureItem({ item }) {
  const { t } = useTranslation();
  return (
    <div className="col-md-4">
      <div className="icon-box-item">
        <div className="icon-box__icon">
          <img
            src={require("../../assets/img/feature/0" + item.id + ".png")}
            alt="Feature"
          />
        </div>
        <div className="icon-box__info">
          <h5>{t(item.title)}</h5>

          {i18next.language == "en" ? (
            <p>{t(item.entext)}</p>
          ) : (
            <p>{t(item.trtext)}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default FeatureItem;
