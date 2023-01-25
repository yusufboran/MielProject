import React, { useState, useEffect } from "react";
import SectionTitle from "../UI/SectionTitle";
import ProjectItem from "../Projects/ProjectItem";
import { getProjectsList } from "../../db";
import { useTranslation } from "react-i18next";

const RelatedServices = () => {
  useEffect(() => {
    getItem();
  }, []);

  const getItem = () => {
    getProjectsList(setProjects);
  };
  const { t } = useTranslation();

  const [projects, setProjects] = useState([]);
  return (
    <div className="related-service-area sm-top-wt">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 m-auto text-center">
            <SectionTitle
              title={t("More Project")}
              heading={t("Related Project")}
            />
          </div>
        </div>

        <div className="row mtn-30">
          {projects
            .reverse()
            .slice(0, 3)
            .map((project) => {
              console.log("örnek projeler ", project);
              const randomFile = Math.floor(
                Math.random() * project.paths.length
              );
              return (
                <ProjectItem
                  key={project.id}
                  id={project.pid}
                  title={project.projectname}
                  features={project.features}
                  thumb={project.paths[0]}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default RelatedServices;
