import React, { Fragment, useState, useEffect, useContext } from "react";
import PageWrapper from "../../components/PageWrapper";
import ServiceContentWrap from "./ServiceContentWrap";
import RelatedServices from "../../components/RelatedServices";
import Slider from "../Slider";
import { getProject } from "../../db";
import i18next from "i18next";

const ServiceDetails = () => {
  var url = window.location.href.split("/");
  var projectId = url[url.length - 1];

  const [item, setItem] = useState();

  useEffect(async () => {
    await getProject(projectId, setItem);
  }, []);

  React.useEffect(() => {});

  return (
    <Fragment>
      {item && (
        <>
          <Slider images={item.paths} />
          <PageWrapper classes="sm-top service-details-wrapper">
            <ServiceContentWrap
              // url={item.presentation.url}
              description={
                i18next.language == "en"
                  ? item.descriptionen
                  : item.descriptiontr
              }
            />
          </PageWrapper>

          <RelatedServices />
        </>
      )}
    </Fragment>
  );
};

export default ServiceDetails;
