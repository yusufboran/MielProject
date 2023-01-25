import React, { Fragment } from "react";
import Header from "../components/Header";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer/footer";
import MobileMenu from "../components/MobileMenu";

import Projects from "../components/Projects";

const ProjectsPage = () => {
  React.useEffect(() => {
    document.title = `Projects`;
  });

  return (
    <Fragment>
      <Header />
      <Projects />
      <CallToAction />
      <Footer />
      <MobileMenu />
    </Fragment>
  );
};

export default ProjectsPage;
