import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Item = (props) => {
  const projectUrl = `/projects/${props.item.title
    .split(" ")
    .join("-")
    .toLowerCase()}?id=2`;

  const { t } = useTranslation();
  return (
    <div key={props.item.id}>
      <div
        className="slider-item"
        style={{
          backgroundImage: `url(${require("../../assets/img/project/" +
            props.item.bg)})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <div className="slider-content">
                <h2>{t(props.item.title)}</h2>
                <p>{props.item.text}</p>
                {props.item.btnText ? (
                  <Link
                    to={`${process.env.PUBLIC_URL + projectUrl}`}
                    className="btn btn-brand"
                  >
                    {t(props.item.btnText)}
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
