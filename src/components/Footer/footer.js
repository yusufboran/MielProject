import React, { Fragment, useEffect, useState } from "react";
import "./styles.css";
import { getSocialMedia } from "../../db";
function Footer() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getSocialMedia(setItems);
    console.log(items);
  }, []);

  return (
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">
              Copyright &copy; {new Date().getFullYear()} All Rights Reserved by
              <a href="/"> Mielproje</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              {items.map((item) => {
                return (
                  <a
                    href={`https://${item.socialmedia}.com/${item.username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={`fa fa-${item.socialmedia}`} />
                  </a>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
