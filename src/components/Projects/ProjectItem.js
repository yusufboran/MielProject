import React from "react";
import { Link } from "react-router-dom";

function ProjectItem(props) {
  const projectUrl = `/projects/${props.title
    .split(" ")
    .join("-")
    .toLowerCase()}?id=${props.id}`;

  return (
    <div className="col-sm-6 col-lg-4">
      <div className="service-item">
        <figure className="service-thumb">
          <Link to={`${process.env.PUBLIC_URL + projectUrl}`}>
            <img
              src={require("../../assets/img/" + props.thumb)}
              alt={props.title}
            />
          </Link>

          <figcaption className="service-txt">
            <h5>{props.title}</h5>
          </figcaption>
        </figure>
        <div className="service-content">
          <div className="service-content-inner">
            <ul>
              {props.promotional_text.map((item) => {
                return <li>{titleCase(item)}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


function titleCase(str) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
}

export default ProjectItem;
