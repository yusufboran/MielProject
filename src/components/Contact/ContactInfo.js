import React, { Fragment, useEffect, useState } from "react";
import socialNetworks from "../../data/SocialNetworks/socials";
import { getSocialMedia } from "../../firebase";

const ContactInfo = ({ address }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getSocialMedia(setItems);
    console.log(items);
  }, []);

  return (
    <Fragment>
      <div className="widget-item m-0">
        <address>
          <span dangerouslySetInnerHTML={{ __html: address }} />
        </address>
      </div>
      <div className="member-social-icons mt-30">
        {items.map((item) => {
          return (
            <a
              href={`https://${item.socialMedia}.com/${item.username}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`fa fa-${item.socialMedia}`} />
            </a>
          );
        })}
      </div>
    </Fragment>
  );
};

export default ContactInfo;
