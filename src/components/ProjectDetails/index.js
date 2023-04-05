import React, { Fragment, useState, useEffect, useContext } from "react";
import PageWrapper from "../../components/PageWrapper";
import ServiceContentWrap from "./ServiceContentWrap";
import RelatedServices from "../../components/RelatedServices";
import Slider from "../Slider";
import { getProject } from "../../db";
import i18next from "i18next";

const ServiceDetails = () => {
  var projectId = window.location.href.split("/").pop();
  const [item, setItem] = useState();
  const [project, setProject] = useState();

  useEffect(async () => {
    await getProject(projectId, setProject);
  }, []);

  React.useEffect(() => {});

  return (
    <Fragment>
      {project && console.log(project[0])}
      {project && (
        <>
           <Slider images={project[0].paths} />
          <PageWrapper classes="sm-top service-details-wrapper">
            <ServiceContentWrap
              // url={item.presentation.url}
              description={
                i18next.language == "en"
                  ? project[0].descriptionen
                  : project[0].descriptionen
              }
            />
          </PageWrapper>

          {/* <RelatedServices /> */}
        </>
      )}
    </Fragment>
  );
};

export default ServiceDetails;
