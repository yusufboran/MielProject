import React, { Fragment, useEffect, useState } from "react";
import Header from "../components/Header";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer/footer";
import MobileMenu from "../components/MobileMenu";

import Projects from "../components/Projects";
import { getProjectsList } from "../db";

const ProjectsPage = () => {
  useEffect(() => {
    document.title = `Projects`;
    getItem();
  }, []);

  const getItem = () => {
    getProjectsList(setProjects);
  };

  const [projects, setProjects] = useState([]);
  return (
    <Fragment>
      <Header />
      <Projects projects={projects} />
      <CallToAction />
      <Footer />
      <MobileMenu />
    </Fragment>
  );
};

export default ProjectsPage;
