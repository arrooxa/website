"use client";

import { ProjectTags, projectsData } from "@app/types/project";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { useRef, useState } from "react";
import { Variants, motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";

const ProjectSection: React.FC = () => {
  const t = useTranslations("projects");

  const [tag, setTag] = useState<ProjectTags>("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants: Variants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  function handleTagChange(newTag: ProjectTags) {
    setTag(newTag);
  }

  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white" id="projects">
        {t("projectsTitle")}
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          title="all"
          onClick={handleTagChange}
          isSelected={tag === "all"}
        />
        <ProjectTag
          title="web"
          onClick={handleTagChange}
          isSelected={tag === "web"}
        />
        <ProjectTag
          title="mobile"
          onClick={handleTagChange}
          isSelected={tag === "mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData
          .filter((project) => project.tag.includes(tag))
          .map((project, index) => (
            <motion.li
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              key={index}
              transition={{ duration: 0.3, delay: index * 0.3 }}
            >
              <ProjectCard
                title={project.title}
                description={t(project.description)}
                image={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
