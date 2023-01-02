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

        // backgroundImage: `url(${item.imageUrl})`,
        backgroundImage: `url(https://images.unsplash.com/photo-1666396251085-4bf5b2a7fca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80)`,
      }}
      className="slider-item"
    >
        <img
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
