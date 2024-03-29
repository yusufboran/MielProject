import React from "react";
import i18next from "i18next";

const LanguageSelect = () => {
  let [language, setLanguage] = React.useState("en");
  function languageChange() {
    language === "en"
      ? i18next.changeLanguage("en")
      : i18next.changeLanguage("tr");
    language === "en" ? setLanguage("tr") : setLanguage("en");
  }

  return (
    <li>
      <button
        style={{ position: "relative", bottom: 4.2, color: "white" }}
        type="button"
        onClick={languageChange}
      >
        {language.toUpperCase()}
      </button>
    </li>
  );
};

export default LanguageSelect;
