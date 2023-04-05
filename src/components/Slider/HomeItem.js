import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const { t } = useTranslation();
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
      className="slider-item"
    >
      <img
        className="slider-blurred"
        style={{ position: "absolute" }}
        src={`https://mielproje.com.tr/api/upload/${item.paths[0].path}`}
        width="100%"
        height="600px"
      />

      <img
        style={{
          position: "absolute",
        }}
        src={`https://mielproje.com.tr/api/upload/${item.paths[0].path}`}
      />

      <div style={{ zIndex: 3 }} className="container">
        <div className="col-xl-7">
          <div className="slider-content">
            <h2>{t(item.projectname)}</h2>

            <Link
              to={`${process.env.PUBLIC_URL + `/projects/${item.id}`}`}
              className="btn btn-brand"
            >
              {t("learn_more")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
