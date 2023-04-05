import React, { Fragment, useState } from "react";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import About from "../components/About/component";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer/footer";
import MobileMenu from "../components/MobileMenu";
import { getPage } from "../db";
import i18next from "i18next";

const PageAbout = () => {
  var [header, setHeader] = useState("");
  var [content, setContent] = useState("");

  var headerContext =
    i18next.language == "tr" ? header.context_tr : header.context_en;
  var aboutContext =
    i18next.language == "tr" ? content.context_tr : content.context_en;

  React.useEffect(() => {
    getPage(setHeader, setContent);
    document.title = `About`;
  }, []);

  return (
    <Fragment>
      <Header />
      <PageHeader bgImg={header.image_path} content={headerContext} />
      <About imgUrl={content.image_path} content={aboutContext} />
      <CallToAction />
      <Footer />
      <MobileMenu />
    </Fragment>
  );
};

export default PageAbout;
