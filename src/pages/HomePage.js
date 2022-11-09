import React, { Fragment } from "react";
import Header from "../components/Header";
import Slider from "../components/Slider/home-one";
import About from "../components/About/home-one";
import Features from "../components/Features";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import SliderData from "../data/Slider/home-1";

const HomePage = () => {
  React.useEffect(() => {
    document.title = `Welcome`;
  });

  return (
    <Fragment>
      <Header />
      <Slider data={SliderData} />
      <About
        imgUrl="https://plus.unsplash.com/premium_photo-1661962705507-2c4e47d37282?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1158&q=80"
        content="<b>İstanbul</b> bin altı yüz yıl boyunca, 330'dan 1922'ye kadar bulunan dönemde; 4 farklı imparatorluğa başkentlik yapmış , şiirlere konu olmuş bir şehir.<br>
        Pek çok kültüre ev sahipliği yapan , tarihi , sanatı , geçmişi kalbinde taşıyan bu şehir aynı zamanda dünyanın en büyük metropollerinden biri. <br>
        Miel Proje Pazarlama ,bu eşsiz şehrin kalbinde , gerçek İstanbul’u yaşayabileceğiniz lokasyonlarda sizleri doğru yatırımlarla buluşturuyor. <br>
        Sürekli yenilenen  sektörümüzdeki inovatif çözümleri tecrübesi ile bir araya getirerek , bağımsız çözümlerle müşterilerinin ve işbirlikçileri ile güçlü ve güvenilir bir partner olmayı amaç edinen Miel Proje Pazarlama , müşteri memnuniyetini arttırmak, ekonomik çözümler sunmak, alıcısını doğru yatırım ile gerçek fiyatlarda buluşturmak misyonu ile yola çıkıyor.
        "
      />
      <Features classes="sp-top" />
      <Funfact />
      <CallToAction />
      <Footer />
      <MobileMenu />
      <LoginRegister />
    </Fragment>
  );
};

export default HomePage;
