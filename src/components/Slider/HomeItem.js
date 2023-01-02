import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        backgroundImage: `url(${item.imageUrl})`,

        justifyContent: "center",
        alignItems: "center",
      }}
      className="slider-item"
    >
      <img
        className="slider-blurred"
        style={{ position: "absolute" }}
        src={item.imageUrl}
        width="100%"
        height="600px"
      />

      <img
        style={{
          position: "absolute",
        }}
        src={item.imageUrl}
      />

      <div style={{ zIndex: 3 }} className="container">
        <div className="col-xl-7">
          <div className="slider-content">
            <h2>{t(item.projectName)}</h2>

            <Link
              to={`${process.env.PUBLIC_URL + `/projects/$}?id=${item.id}`}`}
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
