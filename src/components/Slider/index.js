import React from "react";
import SlickSlider from "../UI/Slick";
import Item from "./Item";

const Arrow = ({ className, onClick, icon }) => {
  return (
    <button className={className} onClick={onClick}>
      <i className={icon} />
    </button>
  );
};

const Slider = (props) => {
  const settings = {
    arrows: true,
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow icon={"fa fa-angle-right"} />,
    prevArrow: <Arrow icon={"fa fa-angle-left"} />,
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
          <Item item={item} />
        ))}
      </SlickSlider>
    </div>
  );
};
export default Slider;
