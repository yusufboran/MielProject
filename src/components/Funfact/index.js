import React from "react";
import FunfactItem from "./funfactItem";
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


var Funfacts = [
  {
    "id": 1,
    "counterNumber": 264,
    "counterText": "delivered house"
  },
 
  {
    "id": 3,
    "counterNumber": 2,
    "counterText": "office"
  },
  {
    "id": 4,
    "counterNumber": 18,
    "counterText": "worker"
  },
  {
    "id": 2,
    "counterNumber": 22,
    "counterText": "project"
  }
]

  
export default Funfact;
