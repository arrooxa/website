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
    previewUrl: "https://dogs-npvc8xo3t-arrooxa.vercel.app/",
  },
  {
    id: 1,
    title: "Genius App",
    description: "Mobile app to play the genius game",
    image: "images/genius.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/arrooxa/geniusapp",
  },
  {
    id: 3,
    title: "Discord Bot",
    description: "Bot for Discord to manage servers",
    image: "images/discord-bot.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arrooxa/discord-bot",
  },
  {
    id: 4,
    title: "Exchange Rate API",
    description:
      "API based on web scraping to obtain the exchange rate of some currencies",
    image: "images/exchange-rate.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arrooxa/discord-bot",
  },
];
