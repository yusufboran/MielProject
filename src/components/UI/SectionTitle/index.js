import React from "react";
import parse from "html-react-parser";
import { useTranslation } from "react-i18next";

function SectionTitle(props) {
  const { t } = useTranslation();

  return (
    <div
      className={`section-title ${
        props.variant === "light" ? "section-title--light" : ""
      }`}
    >
      <h6>{t(props.title)}</h6>
      <h2>{parse(t(props.heading))}</h2>
      {(() => {
        if (props.text) {
          return <p>{parse(t(props.text))}</p>;
        }
        if (props.tagline) {
          return <h5 className="tagline">{parse(props.tagline)}</h5>;
        }
      })()}
    </div>
  );
}

export default SectionTitle;
