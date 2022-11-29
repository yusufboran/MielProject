import React from "react";
import FunfactItem from "./funfactItem";

import Funfacts from "../../data/Funfact/funfact";
import { useTranslation } from "react-i18next";

function Funfact() {
  const { t } = useTranslation();

  return (
    <div
      className="fun-fact-area sm-top parallax"
    >
      <div className="container">
        <div className="row mtn-40">
          {Funfacts.map((funfact) => (
            <FunfactItem
              key={funfact.id}
              counterNumber={funfact.counterNumber}
              counterText={t(funfact.counterText)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Funfact;
