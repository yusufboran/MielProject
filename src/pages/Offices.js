import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import LoginRegister from "../components/LoginRegister";
import MapView from "../components/MapsView";

const OfficesPage = () => {
  React.useEffect(() => {
    document.title = `Offices`;
  });

  return (
    <Fragment>
      <Header />
      <MapView />
      <Footer />
      <MobileMenu />
      <LoginRegister />
    </Fragment>
  );
};

export default OfficesPage;
