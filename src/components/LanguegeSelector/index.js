import React from "react";
import i18next from "i18next";

const LanguageSelect = () => {
  let [language, setLanguage] = React.useState("tr");
  function languageChange() {
    language === "en"
      ? i18next.changeLanguage("en")
      : i18next.changeLanguage("tr");
    language === "en" ? setLanguage("tr") : setLanguage("en");
  }

 

  return (
    <p
      style={{ position: "relative", bottom: 4.2, color: "white"}}
      onClick={languageChange}
    >
      {language.toUpperCase()}
    </p>
  );
};

export default LanguageSelect;
