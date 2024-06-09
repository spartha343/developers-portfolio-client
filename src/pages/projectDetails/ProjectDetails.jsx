/* eslint-disable react/no-children-prop */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProjectDetailsHeader from "../../components/ProjectDetailsHeader";
import { projects } from "../../assets/projectsData";
import SectionHeader from "../../components/SectionHeader";
import ProjectDetailCard from "./ProjectDetailCard";

const ProjectDetails = () => {
  const { id } = useParams();
  const [projectData] = projects.filter(
    (project) => project.id === parseInt(id)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ProjectDetailsHeader projectData={projectData}></ProjectDetailsHeader>
      <div className="my-20"></div>
      <SectionHeader
        children={projectData.title}
        text={"All features of"}
        description={""}
      ></SectionHeader>
      <ProjectDetailCard data={projectData.details}></ProjectDetailCard>
    </div>
  );
};

export default ProjectDetails;
