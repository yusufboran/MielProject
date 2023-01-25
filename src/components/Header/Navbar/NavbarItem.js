import React from "react";
import { Link } from "react-router-dom";
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
      <LanguageSelect />
    </>
  );
}

var navbarData = [
  {
    id: 1,
    title: "home",
    link: "/",
    megaMenu: false,
    subMenu: false,
  },
  {
    id: 2,
    title: "about",
    link: "/about",
    megaMenu: false,
    subMenu: false,
  },
  {
    id: 3,
    title: "offices",
    link: "/offices",
    megaMenu: false,
    subMenu: false,
  },
  {
    id: 4,
    title: "projects",
    link: "/projects",
    megaMenu: false,
    subMenu: false,
  },

  {
    id: 5,
    title: "contact",
    link: "/contact",
  },
];
export default NavbarItem;
