import SectionHeader from "../../components/SectionHeader";
import ProjectCard from "../projects/ProjectCard";
import ExploreButton from "./ExploreButton";
import { projects } from "../../assets/projectsData";

const ProjectsSection = () => {
  const description =
    "I love to develop creative projects and explore new technologies";

  return (
    <section className="my-56">
      <SectionHeader text={"My"} description={description}>
        Projects
      </SectionHeader>
      <div className="grid gap-10  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5">
        {projects.slice(0, 3).map((project, idx) => (
          <ProjectCard project={project} key={idx} />
        ))}
      </div>
      <ExploreButton link="/projects" text="Explore All" />
    </section>
  );
};

export default ProjectsSection;
