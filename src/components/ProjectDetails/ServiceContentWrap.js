import React from "react";
import List from "../UI/List";
import LI from "../UI/List/Item";
import IconBox from "../IconBox";
import Text from "../UI/Text";
import parse from "html-react-parser";
import HowWeWorksData from "../../data/HowWeWorks/how-we-works";
import SidebarItem from "../Sidebar/SidebarItem";
import Anchor from "../UI/Anchor";

const ServiceContentWrap = ({
  service,
  totalService,
  prevService,
  nextService,
}) => {
  function titleCase(str) {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    var text = splitStr.join(" ");
    text = parse(text);
    return text;
  }

  return (
    <div className="col-lg-12">
      
      <div className="service-details-content">
        <div className="service-details-info">
          <h3>{service.title}</h3>
          <p>{titleCase(service.shortDesc)}</p>

          <div className="about-service mt-50 mt-sm-35">
            <h4>About this Service</h4>
            {
              <div
                dangerouslySetInnerHTML={{ __html: service.aboutServiceDesc }}
              />
            }
            <List classes="service-feature mt-30">
              {service.features.map((feature, indx) => (
                <LI key={indx}>{feature}</LI>
              ))}
            </List>
          </div>

          <div className="how-we-works-wrap mt-50 mt-sm-35">
            <h4>How we work</h4>
            <Text styles={{ marginBottom: 20 }}>
              voluptatum deleniti atque corrupti is es et quas stias cepturi
              sint aete non provident, similique sunt dunt ut labore et dolore
              magnam aliquam quaerat Neque porro quisquam est, qui dolorem ipsum
            </Text>

            <div className="how-we-works-content service-details-page">
              <div className="row">
                {HowWeWorksData.map((iconbox) => (
                  <IconBox
                    key={iconbox.id}
                    icon={iconbox.icon}
                    title={iconbox.title}
                    text={iconbox.text}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="download-documents">
            <SidebarItem title="Download Brochure">
              <List classes="service-list">
                <LI>
                  <Anchor path="/">
                    <i className="fa fa-file-pdf-o" />
                    Brochures.PDF
                  </Anchor>
                </LI>
                <LI>
                  <Anchor path="/">
                    <i className="fa fa-file-word-o" />
                    Brochures.DOC
                  </Anchor>
                </LI>
              </List>
            </SidebarItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceContentWrap;
