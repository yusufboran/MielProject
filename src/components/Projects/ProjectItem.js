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
            <h5>
              <Link
                to={`${process.env.PUBLIC_URL + projectUrl}`}
                className="stretched-link"
              >
                {props.title}
              </Link>
            </h5>
            <p>{props.text + "asdasd"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
