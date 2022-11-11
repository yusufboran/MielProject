import React, { Fragment } from "react";
import Header from "../components/Header";
import ServiceDetails from "../components/ProjectDetails";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import BrandLogo from "../components/BrandLogo";

const PageProjectDetails = () => {
  return (
    <Fragment>
      <Header />
      <ServiceDetails />
      <BrandLogo />
      <Funfact />
      <CallToAction />
      <Footer />
      <LoginRegister />
      <MobileMenu />
    </Fragment>
  );
};

export default PageProjectDetails;