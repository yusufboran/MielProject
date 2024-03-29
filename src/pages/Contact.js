import React, { Fragment } from "react";
import Header from "../components/Header";
import ContactPage from "../components/Contact";
import Footer from "../components/Footer/footer";
import MobileMenu from "../components/MobileMenu";

const PageContact = () => {
  React.useEffect(() => {
    document.title = `Contact`;
  },[]);

  return (
    <Fragment>
      <Header />
      <ContactPage />
      <Footer />
      <MobileMenu />
    </Fragment>
  );
};

export default PageContact;
