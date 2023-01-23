import React, { Fragment, useState, useEffect } from "react";
import PageWrapper from "../../components/PageWrapper";
import ServiceContentWrap from "./ServiceContentWrap";
import RelatedServices from "../../components/RelatedServices";
import ProjectData from "../../data/Projects/projects.json";
import Slider from "../Slider";
import { useLocation } from "react-router-dom";
import { getProject } from "../../db";
import i18next from "i18next";
const ServiceDetails = () => {
  const location = useLocation();
  const serviceID = new URLSearchParams(location.search).get("id");
  const [item, setItem] = useState();

  useEffect(() => {
    getProject(serviceID, setItem);
  }, []);

  const service = ProjectData.find(
    (serviceItem) => serviceItem.id === parseInt(1)
  );

  const currentService = ProjectData.indexOf(service);
  let prevService;
  let nextService;
  currentService === 0
    ? (prevService = ProjectData[currentService])
    : (prevService = ProjectData[currentService - 1]);
  currentService + 1 === ProjectData.length
    ? (nextService = ProjectData[currentService])
    : (nextService = ProjectData[currentService + 1]);
  return (
    <Fragment>
      {item && (
        <>
          <Slider images={item.files} />

          <PageWrapper classes="sm-top service-details-wrapper">
            <ServiceContentWrap
              url={item.presentation.url}
              description={
                i18next.language == "en"
                  ? item.descriptionEN
                  : item.descriptionTR
              }
              service={service}
              totalService={ProjectData.length}
              nextService={nextService}
              prevService={prevService}
            />
          </PageWrapper>

          <RelatedServices />
        </>
      )}
    </Fragment>
  );
};

export default ServiceDetails;
