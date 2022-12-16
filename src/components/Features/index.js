import React, { useEffect, useState } from "react";
import Feature from "./FeatureItem";
import { getFeaturesList } from "../../firebase";
const data = [
  {
    id: 1,
    title: "feature1_title",
    text: "feature1_text",
    imgSrc: "feature/01.png",
  },
  {
    id: 2,
    title: "feature2_title",
    text: "feature2_text",
    imgSrc: "feature/02.png",
  },
  {
    id: 3,
    title: "feature3_title",
    text: "feature3_text",
    imgSrc: "feature/03.png",
  },
];

function Features({ classes }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getFeaturesList(setItems);
    console.log(items);
  }, []);

  return (
    <div className={`feature-area-wrapper ${classes}`}>
      <div className="container">
        <div className="row mtn-sm-60 mtn-md-5">
          {items.map((item) => (
            <Feature item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
