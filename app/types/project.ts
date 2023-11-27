interface ProjectDataDTO {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl?: string;
}

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
  {
    id: 3,
    title: "Dogs",
    description: "Social Network instagram-based for Dogs",
    image: "#",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arrooxa/dogs",
  },
];
