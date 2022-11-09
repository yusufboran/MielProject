import React from "react";
import { Link } from "react-router-dom";
import error from "../assets/img/404.png";
import { useTranslation } from "react-i18next";

const Error404 = () => {
  React.useEffect(() => {
    document.title = `Error 404`;
  });

  const { t } = useTranslation();
  return (
    <div style={styles}>
      <div>
        <img src={error} alt="404" />
        <Link
          to="/"
          className={"btn-brand"}
          style={{ display: "inline-Block", marginTop: 30 }}
        >
          {t("go_back_home")}
        </Link>
      </div>
    </div>
  );
};

const styles = {
  maxWidth: 500,
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  textAlign: "center",
  padding: 30,
};

export default Error404;
