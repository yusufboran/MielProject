import React, { Fragment } from "react";
import Header from "../components/Header";
import ServiceDetails from "../components/ProjectDetails";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer/footer";
import MobileMenu from "../components/MobileMenu";

const PageProjectDetails = () => {
  return (
    <Fragment>
      <Header />
      <ServiceDetails />
      <CallToAction />
      <Footer />
      <MobileMenu />
    </Fragment>
  );
};

export default PageProjectDetails;
