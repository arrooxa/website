interface ProjectDataDTO {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl?: string;
}

export type ProjectTags = "All" | "Web" | "Mobile";

export type ProjectCardProps = Omit<ProjectDataDTO, "id" | "tag">;

interface ProjectDataDTO {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl?: string;
}

export interface ProjectTagProps {
  title: ProjectTags;
  onClick: (newTag: ProjectTags) => void;
  isSelected: boolean;
}

export const projectsData: ProjectDataDTO[] = [
  {
    id: 0,
    title: "Dogs",
    description: "Social Network instagram-based for Dogs",
    image: "images/dogs-project.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arrooxa/dogs",
  },
  {
    id: 1,
    title: "Dogs",
    description: "Social Network instagram-based for Dogs",
    image: "images/dogs-project.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arrooxa/dogs",
  },
  {
    id: 2,
    title: "Dogs",
    description: "Social Network instagram-based for Dogs",
    image: "images/dogs-project.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arrooxa/dogs",
  },
];
