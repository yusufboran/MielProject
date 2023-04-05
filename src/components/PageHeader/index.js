import React from "react";
import parse from "html-react-parser";
import { useTranslation } from "react-i18next";

const PageHeader = ({ bgImg, content }) => {
  const { t } = useTranslation();

  var item = `<pre class="stext" style="text-align: center;">Sana d&uuml;n bir tepeden baktım aziz İstanbul!
  G&ouml;rmedim, gezmediğim, sevmediğim hi&ccedil; bir yer.
  &Ouml;mr&uuml;m olduk&ccedil;a, g&ouml;n&uuml;l tahtıma keyfince kurul!
  Sade bir semtini sevmek bile bir &ouml;mre değer.
  
  Nice revnaklı şehirler g&ouml;r&uuml;l&uuml;r d&uuml;nyada,
  Lakin efsunlu g&uuml;zellikleri sensin yaratan.
  Yaşamıştır derim, en hoş ve uzun r&uuml;yada
  Sende &ccedil;ok yıl yaşayan, sende &ouml;len, sende yatan.</pre>`;

  return (
    <div
      className="page-header-area bg-img"
      style={{
        backgroundImage: `url(https://mielproje.com.tr/api/upload/${bgImg})`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-8 m-auto">
            <div className="page-header-content-inner">
              <div className="bg-b-opacity text-center p-4 ">
                {console.log(t(content))}
                <span className="about-since">{parse(item)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
