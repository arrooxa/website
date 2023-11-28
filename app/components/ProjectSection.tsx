"use client";

import { ProjectTags, projectsData } from "@app/types/project";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { useState } from "react";

const ProjectSection: React.FC = () => {
  const [tag, setTag] = useState<ProjectTags>("All");

  function handleTagChange(newTag: ProjectTags) {
    setTag(newTag);
  }

  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          title="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          title="Web"
          onClick={handleTagChange}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          title="Mobile"
          onClick={handleTagChange}
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData
          .filter((project) => project.tag.includes(tag))
          .map((project, index) => (
            <ProjectCard
              key={index}
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
