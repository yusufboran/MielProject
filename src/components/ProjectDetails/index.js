import React, { Fragment, useState, useEffect, useContext } from "react";
import PageWrapper from "../../components/PageWrapper";
import ServiceContentWrap from "./ServiceContentWrap";
import RelatedServices from "../../components/RelatedServices";
import Slider from "../Slider";
import { useLocation } from "react-router-dom";
import { getProject } from "../../db";
import i18next from "i18next";

const ServiceDetails = () => {
  const location = useLocation();
  const serviceID = new URLSearchParams(location.search).get("id");
  const [item, setItem] = useState();

  useEffect(async () => {
    await getProject(serviceID, setItem);
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
