import React, { Fragment } from "react";
import Header from "../components/Header";
import ProjectDetails from "../components/ProjectDetails";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer/footer";
import MobileMenu from "../components/MobileMenu";

const PageProjectDetails = () => {
  return (
    <Fragment>
      <Header />
      <ProjectDetails />
      <CallToAction />
      <Footer />
      <MobileMenu />
    </Fragment>
  );
};

export default PageProjectDetails;
