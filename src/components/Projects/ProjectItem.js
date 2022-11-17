import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

function ProjectItem(props) {
  function titleCase(str) {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    var text = splitStr.join(" ");
    text = parse(text);
    return text;
  }

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
            <p>{titleCase(props.text)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
