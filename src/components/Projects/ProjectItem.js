import React from "react";
import { Link } from "react-router-dom";

function ProjectItem({ project }) {
  const projectUrl = `/projects/${project.id}`;
  return (
    <div className="col-sm-6 col-lg-4">
      <div className="service-item">
        <figure className="service-thumb">
          <Link to={`${process.env.PUBLIC_URL + `/projects/${project.id}`}`}>
            <img
              src={`https://mielproje.com.tr/api/upload/${project.paths[0].path}`}
              alt={project.title}
            />
          </Link>
          <figcaption className="service-txt">
            <h5>{project.title}</h5>
          </figcaption>
        </figure>
        <div className="service-content">
          <div className="service-content-inner">
            <ul>
              {project.features && (
                <li>
                  {project.features.map((text) => (
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
