interface ProjectDataDTO {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl?: string;
}

export type ProjectTags = "all" | "web" | "mobile";

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
    description: "dogsDescription",
    image: "images/dogs-project.png",
    tag: ["all", "web"],
    gitUrl: "https://github.com/arrooxa/dogs",
    previewUrl: "https://dogs-npvc8xo3t-arrooxa.vercel.app/",
  },
  {
    id: 1,
    title: "Genius App",
    description: "geniusDescription",
    image: "images/genius.jpg",
    tag: ["all", "mobile"],
    gitUrl: "https://github.com/arrooxa/geniusapp",
  },
  {
    id: 3,
    title: "Discord Bot",
    description: "discordDescription",
    image: "images/discord-bot.png",
    tag: ["all", "web"],
    gitUrl: "https://github.com/arrooxa/discord-bot",
  },
  {
    id: 4,
    title: "Exchange Rate API",
    description: "exchangeDescription",
    image: "images/exchange-rate.jpg",
    tag: ["all", "web"],
    gitUrl: "https://github.com/arrooxa/discord-bot",
  },
];
