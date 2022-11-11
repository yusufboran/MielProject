import React, { Fragment } from "react";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import About from "../components/About/home-one";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import Testimonial from "../components/Testimonials/home-one";
import Team from "../components/Team/home-two";

const PageAbout = () => {
  React.useEffect(() => {
    document.title = `About`;
  });

  return (
    <Fragment>
      <Header />
      <PageHeader
        bgImg={"https://wallpaperaccess.com/full/3155150.jpg"}
        content="<i>Sana dün bir tepeden baktım aziz İstanbul!<br/>
                Görmedim gezmediğim, sevmediğim hiçbir yer.<br/>
                Ömrüm oldukça, gönül tahtıma keyfince kurul!<br/>
                Sade bir semtini sevmek bile bir ömre değer.<br/>
                Nice revnaklı şehirler görülür dünyada,<br/>
                Lakin efsunlu güzellikleri sensin yaratan.<br/>
                Yaşamıştır derim, en hoş ve uzun rü’yada<br/>
                Sende çok yıl yaşayan, sende ölen, sende yatan.<br/>
                <br/></i>
                Yahya Kemal Beyatlı 
                "
      />
      <About
        imgUrl={
          "https://images.unsplash.com/photo-1564407727371-3eece6c58961?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        }
        content="about_context"
      />
      <Team />
      {/* <Testimonial />*/}
      <CallToAction />
      <Footer />
      <LoginRegister />
      <MobileMenu />
    </Fragment>
  );
};

export default PageAbout;
