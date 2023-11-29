import javascriptIcon from "@public/images/javascript-icon.png";
import nodeIcon from "@public/images/node-icon.svg";
import reactIcon from "@public/images/react-icon.png";
import typescriptIcon from "@public/images/typescript-icon.png";
import golangIcon from "@public/images/golang-icon.svg";
import awsIcon from "@public/images/aws-icon.png";

export type Tabs = "Skills" | "Education" | "Certifications";

export interface TabsData {
  title: Tabs;
  id: Lowercase<Tabs>;
  content: React.ReactNode;
}

export interface TabButtonDTO {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

export const skillsTabData = [
  {
    id: 1,
    name: "Javascript",
    image: javascriptIcon,
    website: "https://www.javascript.com/",
  },
  {
    id: 2,
    name: "Typescript",
    image: typescriptIcon,
    website: "https://www.typescriptlang.org/",
  },
  {
    id: 3,
    name: "Node.js",
    image: nodeIcon,
    website: "https://nodejs.org/en",
  },
  {
    id: 4,
    name: "React.js",
    image: reactIcon,
    website: "https://react.dev/",
  },
  {
    id: 5,
    name: "Golang",
    image: golangIcon,
    website: "https://go.dev/",
  },
  {
    id: 6,
    name: "AWS",
    image: awsIcon,
    website: "https://aws.amazon.com/pt/",
  },
];
