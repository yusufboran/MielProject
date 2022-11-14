import React from "react";
import { useTranslation } from "react-i18next";
import FormInput from "../../components/UI/Input";

const From = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-form-wrap">
      <form id="contact-form">
        <div className="row">
          <div className="col-md-6">
            <FormInput
              tag={"input"}
              type={"text"}
              name={"first_name"}
              placeholder={t("First Name") + " *"}
            />
          </div>

          <div className="col-md-6">
            <FormInput
              tag={"input"}
              type={"text"}
              name={"last_name"}
              placeholder={t("Last Name") + " *"}
            />
          </div>

          <div className="col-md-6">
            <FormInput
              tag={"input"}
              type={"email"}
              name={"email_address"}
              placeholder={t("Email address") + " *"}
            />
          </div>

          <div className="col-md-6">
            <FormInput
              tag={"input"}
              type={"text"}
              name={"phone_no"}
              placeholder={t("Phone No") + " *"}
            />
          </div>

          <div className="col-12">
            <FormInput
              tag={"textarea"}
              name={"con_message"}
              placeholder={t("Write Your Message") + " *"}
            />

            <FormInput
              tag={"button"}
              classes={"btn-outline"}
              buttonText={t("Send Message")}
            />

            <div className="form-message" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default From;
