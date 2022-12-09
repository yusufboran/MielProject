import React, { useEffect } from "react";
import SectionTitle from "../UI/SectionTitle";
import ProjectItem from "./ProjectItem";

function Services({ projects }) {
  useEffect(() => {
    console.log(projects[0]);
  });

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
              projects.map((project) => {
                const randomFile = Math.floor(
                  Math.random() * project.files.length
                );
                return (
                  <ProjectItem
                    key={1}
                    id={project.id}
                    title={project.projectName}
                    features={project.features}
                    thumb={project.files[randomFile]}
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
