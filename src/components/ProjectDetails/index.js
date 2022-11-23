import React, { Fragment } from "react";
import PageWrapper from "../../components/PageWrapper";
import ServiceContentWrap from "./ServiceContentWrap";
import RelatedServices from "../../components/RelatedServices";
import ProjectData from "../../data/Projects/projects.json";
import Slider from "../Slider";
import PdfView from "../PdfView";

const ServiceDetails = () => {
  const serviceID = new URLSearchParams(window.location.search).get("id");
  const service = ProjectData.find(
    (serviceItem) => serviceItem.id === parseInt(serviceID)
  );
  console.log(service);

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
      <Slider data={service.image} />
      <PageWrapper classes="sm-top service-details-wrapper">
        <ServiceContentWrap
          service={service}
          totalService={ProjectData.length}
          nextService={nextService}
          prevService={prevService}
        />
      </PageWrapper>

      <RelatedServices />
    </Fragment>
  );
};

export default ServiceDetails;
