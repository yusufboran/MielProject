import React, { Fragment, useContext, useState } from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import About from "../components/About/component";
import Features from "../components/Features";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";

import Footer from "../components/Footer/footer";
import MobileMenu from "../components/MobileMenu";
import { ProjectContext } from "../App";
import i18next from "i18next";
import { getPage } from "../db";
const HomePage = () => {
  React.useEffect(() => {
    document.title = `Welcome`;
  }, []);

  const projects = useContext(ProjectContext);

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

      <Slider images={projects} page="home" />
      <About
        disable={true}
        imgUrl={content.image_path}
        content={aboutContext}
      />

      <Features classes="sp-top" />
      <Funfact />
      <CallToAction />
      <Footer />
      <MobileMenu />
    </Fragment>
  );
};

export default HomePage;
