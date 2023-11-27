import { projectsData } from "@app/types/project";
import ProjectCard from "./ProjectCard";

const ProjectSection: React.FC = () => {
  return (
    <section>
      <h2>Projects</h2>
      <div className="">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            gitUrl={project.gitUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
