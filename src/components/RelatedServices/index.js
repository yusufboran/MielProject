import React from "react";
import SectionTitle from "../UI/SectionTitle";
import ServiceItem from "../Projects/ProjectItem";

import ProjectData from "../../data/Projects/projects.json";

const RelatedServices = () => {
  return (
    <div className="related-service-area sm-top-wt">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 m-auto text-center">
            <SectionTitle title="More Services" heading="Related Services" />
          </div>
        </div>

        <div className="row mtn-30">
          {ProjectData.reverse()
            .slice(0, 3)
            .map((relatedService) => (
              <ServiceItem
                key={relatedService.id}
                id={relatedService.id}
                title={relatedService.title}
                text={relatedService.shortDesc}
                thumb={relatedService.thumb}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedServices;
