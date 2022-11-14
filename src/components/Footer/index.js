import React from "react";
import "./styles.css";
import socialNetworks from "../../data/SocialNetworks/socials";

const index = () => {
  return (
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">
              Copyright &copy; 2022 All Rights Reserved by
              <a href="/"> Mielproje</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              {socialNetworks.map((social) => (
                <li>
                  <a
                    key={social.id}
                    href={`https://${social.networkName}.com/${social.username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={`fa fa-${social.networkName}`} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
