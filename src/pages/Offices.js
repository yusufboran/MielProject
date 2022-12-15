import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer/footer";
import MobileMenu from "../components/MobileMenu";
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
    </Fragment>
  );
};

export default OfficesPage;
