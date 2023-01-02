import React from "react";

const Item = (image) => {
  return (
    <div>
      {image.item ? (
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
            src={image.item}
            width="100%"
            height="600px"
          />

          <img
            style={{
              position: "absolute",
            }}
            src={image.item}
          />

          <div style={{ zIndex: 3 }} className="container"></div>
        </div>
      ) : null}
    </div>
  );
};

export default Item;
