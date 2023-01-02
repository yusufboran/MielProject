import React, { Fragment } from "react";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import About from "../components/About/home-one";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer/footer";
import MobileMenu from "../components/MobileMenu";

const PageAbout = () => {
  React.useEffect(() => {
    document.title = `About`;
  });

  return (
    <Fragment>
      <Header />
      <PageHeader
        bgImg={"https://wallpaperaccess.com/full/3155150.jpg"}
        content={"poem"}
      />
      <About
        imgUrl={
          "https://images.unsplash.com/photo-1564407727371-3eece6c58961?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        }
        content="about_context"
      />
      <CallToAction />
      <Footer />
      <MobileMenu />
    </Fragment>
  );
};

export default PageAbout;
