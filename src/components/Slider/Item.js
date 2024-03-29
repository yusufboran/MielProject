import React from "react";

const Item = (image) => {
  console.log();
  return (
    <div>
      {image ? (
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
            src={`http://mielproje.com.tr//api/upload/${image.item.path}`}
            width="100%"
            height="600px"
          />

          <img
            style={{
              position: "absolute",
            }}
            src={`http://mielproje.com.tr//api/upload/${image.item.path}`}
          />

          <div style={{ zIndex: 3 }} className="container"></div>
        </div>
      ) : null}
    </div>
  );
};

export default Item;
