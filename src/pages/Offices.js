import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import LoginRegister from "../components/LoginRegister";
import GoogleMap from "../components/MapsView/GoogleMap";

const OfficesPage = () => {

  React.useEffect(() => {
    document.title = `Offices`;
  });

  return (
    <Fragment>
      <Header />
      <GoogleMap />
      <Footer />
      <MobileMenu />
      <LoginRegister />
    </Fragment>
  );
};

export default OfficesPage;
