import React, { Fragment } from "react";
import Header from "../components/Header";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";

import Services from "../components/Projects";

const ProjectsPage = () => {
  React.useEffect(() => {
    document.title = `Projects`;
  });
  return (
    <Fragment>
      <Header />
      <Services  />
      <CallToAction />
      <Footer />
      <MobileMenu />
    </Fragment>
  );
};

export default ProjectsPage;
