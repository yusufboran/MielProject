import React, { Fragment } from "react";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import About from "../components/About/home-two";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import Testimonial from "../components/Testimonials/home-one";

const PageAbout = () => {
  React.useEffect(() => {
    document.title = `About`;
  });

  return (
    <Fragment>
      <Header />
      <PageHeader
        bgImg={
          "https://wallpaperaccess.com/full/3155150.jpg"
        }
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
        content="<b>İstanbul</b> bin altı yüz yıl boyunca, 330'dan 1922'ye kadar bulunan dönemde; 4 farklı imparatorluğa başkentlik yapmış , şiirlere konu olmuş bir şehir.<br>
        Pek çok kültüre ev sahipliği yapan , tarihi , sanatı , geçmişi kalbinde taşıyan bu şehir aynı zamanda dünyanın en büyük metropollerinden biri. <br>
        Miel Proje Pazarlama ,bu eşsiz şehrin kalbinde , gerçek İstanbul’u yaşayabileceğiniz lokasyonlarda sizleri doğru yatırımlarla buluşturuyor. <br>
        Sürekli yenilenen  sektörümüzdeki inovatif çözümleri tecrübesi ile bir araya getirerek , bağımsız çözümlerle müşterilerinin ve işbirlikçileri ile güçlü ve güvenilir bir partner olmayı amaç edinen Miel Proje Pazarlama , müşteri memnuniyetini arttırmak, ekonomik çözümler sunmak, alıcısını doğru yatırım ile gerçek fiyatlarda buluşturmak misyonu ile yola çıkıyor.
        "
      />
      <Testimonial />
      <CallToAction />
      <Footer />
      <LoginRegister />
      <MobileMenu />
    </Fragment>
  );
};

export default PageAbout;
