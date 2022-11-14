import React, { Fragment } from "react";
import Header from "../components/Header";
import ServiceDetails from "../components/ProjectDetails";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";

const PageProjectDetails = () => {
  return (
    <Fragment>
      <Header />
      <ServiceDetails />
      <CallToAction />
      <Footer />
      <LoginRegister />
      <MobileMenu />
    </Fragment>
  );
};

export default PageProjectDetails;
