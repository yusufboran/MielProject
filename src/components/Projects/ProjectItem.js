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
              src={`http://localhost:3000/uploads/${props.thumb}`}
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
              {props.features && (
                <li>
                  {props.features.map((text) => (
                    <li>{text}</li>
                  ))}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
