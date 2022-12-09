import React from "react";
import SlickSlider from "../UI/Slick";
import HomeItem from "./HomeItem";
import Item from "./Item";

const Arrow = ({ className, onClick, icon }) => {
  return (
    <button className={className} onClick={onClick}>
      <i className={icon} />
    </button>
  );
};

const Slider = ({ images, page }) => {
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
        {images.map((image) =>
          page === "home" ? (
            <HomeItem item={image} />
          ) : (
            <Item item={image} />
          )
        )}
      </SlickSlider>
    </div>
  );
};
export default Slider;
