import React, { Fragment } from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import About from "../components/About/home-one";
import Features from "../components/Features";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";

import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import SliderData from "../data/Slider/home-1";

const HomePage = () => {
  React.useEffect(() => {
    document.title = `Welcome`;
  });

  return (
    <Fragment>
      <Header  />
      <Slider data={SliderData} />
      <About
        disable={true}
        imgUrl="https://plus.unsplash.com/premium_photo-1661962705507-2c4e47d37282?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1158&q=80"
        content="about_context"
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
