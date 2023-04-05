import React, { useEffect, useContext } from "react";
import { ProjectContext } from "../../App";
import SectionTitle from "../UI/SectionTitle";
import ProjectItem from "./ProjectItem";

function Services() {
  const projects = useContext(ProjectContext);

  return (
    <div className={`service-area-wrapper`}>
      <div
        className="service-area-top"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1244&q=80)`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-5 m-auto text-center">
              <SectionTitle
                variant="light"
                title="projects"
                heading="project_heading"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="service-content-area">
        <div className="container">
          <div className="row mtn-30">

            {projects &&
              projects.map((project,index) => {
                const randomFile = Math.floor(
                  Math.random() * project.paths.length
                );

                console.log(project.paths)
                return (
                  <ProjectItem
                    key={index}
                    project={project}
                    id={project.pid}
                    title={project.projectname}
                    features={project.features}
                    thumb={project.paths}
                    promotional_text={"project.promotional_text"}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
