import React from "react";
import Feature from "./FeatureItem";

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
  return (
    <div className={`feature-area-wrapper ${classes}`}>
      <div className="container">
        <div className="row mtn-sm-60 mtn-md-5">
          {data.map((feature) => (
            <Feature
              key={feature.id}
              title={feature.title}
              text={feature.text}
              img={feature.imgSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
