import React from "react";
import parse from "html-react-parser";

const MarkerInfoBox = (props) => {
  return (
    <div>
      <div className="team-mem-item">
        <figure className="member-pic">
          <img
            src={props.info.profilePic}
            alt="Girl in a jacket"
            width="500"
            height="600"
          />
        </figure>
        <div className="member-info">
          <h5>{props.info.title}</h5>
          <p className="designation">{props.info.phone}</p>
          <span className="designation">{parse(props.info.address)}</span>
        </div>
      </div>
    </div>
  );
};

export default MarkerInfoBox;
