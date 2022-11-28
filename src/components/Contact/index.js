import React from "react";
import From from "./From";
import ContactInfo from "./ContactInfo";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <div className={"contact-page-area-wrapper sp-y"}>
      <div className="container">
        <div className="contact-content-wrap">
          <div className="row">
            <div className="col-lg-8">
              <div className="contact-form-area contact-method">
                
                <h3>{t("Send us a Message")}</h3>
                <From />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="contact-information contact-method">
                <div className="contact-info-con">
                  <h3>{t("contact_Info")}</h3>
                  <ContactInfo address="Huzur Mahallesi Azarbeycan Caddesi Skyland Office B blok Kat:13 no:201" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
