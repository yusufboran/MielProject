import React from "react";
import SlickSlider from "../../UI/Slick";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NextArrow = ({ className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      <i className="fa fa-angle-right" />
    </button>
  );
};

const PrevArrow = ({ className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      <i className="fa fa-angle-left" />
    </button>
  );
};

const Slider = (props) => {
  const { t } = useTranslation();
  const settings = {
    arrows: true,
    dots: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className={"slider-area"}>
      <SlickSlider settings={settings}>
        {props.data.map((item) => (
          <div key={item.id}>
            <div
              className="slider-item"
              style={{
                backgroundImage: `url(${require("../../../assets/img/project/" +
                  item.bg)})`,
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-7">
                    <div className="slider-content">
                      <h2>{t(item.title)}</h2>
                      <p>{item.text}</p>
                      {item.btnText ? (
                        <Link
                          to={`${process.env.PUBLIC_URL + item.btnLink}`}
                          className="btn btn-brand"
                        >
                          {item.btnText}
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </SlickSlider>
    </div>
  );
};
export default Slider;
