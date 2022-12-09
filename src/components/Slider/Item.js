import React from "react";

const Item = (image) => {
  console.log(image.item);
  return (
    <div>
      {image.item ? (
        <div
          className="slider-item"
          style={{
            backgroundImage: `url(${image.item})`,
          }}
        >
         <img src={image.item} alt="Trulli" width="100%" height="100%" />
        </div>
      ) : null}
    </div>
  );
};

export default Item;
