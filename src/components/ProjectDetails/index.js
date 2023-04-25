import React, { Fragment, useState, useEffect, useContext } from "react";
import PageWrapper from "../../components/PageWrapper";
import ServiceContentWrap from "./ServiceContentWrap";
import RelatedServices from "../../components/RelatedServices";
import Slider from "../Slider";
import { getProject } from "../../db";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
const ServiceDetails = () => {
  var projectId = window.location.href.split("/").pop();
  const [project, setProject] = useState();

  const { t } = useTranslation();

  useEffect(async () => {
    await getProject(projectId, setProject);
  }, []);

  React.useEffect(() => {
    console.log("dil değişti...");
  }, [t]);

  return (
    <Fragment>
      {project && (
        <>
          {project.projectname}
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
            {/* <embed
              src={`${url}${pdfStyle}`}
              type="application/pdf"
              width="90%"
              height="500px"
              style={{
                border: "0px solid",
                marginLeft: "5%",
                marginRight: "5%",
              }}
            /> */}
          </PageWrapper>

          {/* <RelatedServices /> */}
        </>
      )}
    </Fragment>
  );
};

export default ServiceDetails;
