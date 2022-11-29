import React from "react";
import { Link } from "react-router-dom";
import navbarData from "../../../data/Navbar/navbar";
import { useTranslation } from "react-i18next";
import LanguageSelect from "../../LanguegeSelector";

function NavbarItem() {
  const { t } = useTranslation();

  return (
    <>
      {navbarData.map((item) => (
        <li>
          <Link key={item.id} to={`${process.env.PUBLIC_URL + item.link}`}>
            {t(item.title)}{" "}
          </Link>
        </li>
      ))}
      <LanguageSelect/>
    </>
  );
}

export default NavbarItem;
