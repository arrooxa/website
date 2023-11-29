import { TimelineDTO } from "@app/types/timeline";
import Timeline from "./Timeline";

const experienceData: TimelineDTO[] = [
  {
    title: "Software Developer",
    subtitle: "igc partners",
    start: "Jul 2022",
    end: null,
    content:
      "IGC is the largest M&A (Mergers and Acquisitions) company in Latin America and a powerhouse in the global financial market, competing head-to-head with major banks. With a recently established technology sector, I contributed by training new professionals, managing teams, and developing internal CRMs that managed financial processes involving hundreds of millions of Brazilian reais.",
  },
  {
    title: "Web Developer",
    subtitle: "Haste Design",
    start: "Apr 2021",
    end: "Jun 2022",
    content:
      "Haste Design was a software house combined with a design studio where all aspects of software development were solved. My role was to participate in these projects from architecture to deployment, and I learned a lot not only in coding but also in infrastructure. Unfortunately, the company has ceased its operations.",
  },
  {
    start: "Jan 2021",
    subtitle: "Virtues Media & Apps",
    end: "Apr 2021",
    title: "Intern",
    content:
      "Virtues was a mobile app development company with a focus on radio stations. I was hired to develop the company's website because it was quite outdated with outdated features. Additionally, I initiated the creation of a browser extension for radio playback",
  },
];

const educationData: TimelineDTO[] = [
  {
    title: "Higher Technology Course",
    subtitle: "USJT",
    start: "Jan 2023",
    end: "Dec 2023",
    content:
      "What I have learned: React.js | Microservices | Express.js | Node.js | Python",
  },
  {
    title: "Higher Technology Course",
    subtitle: "Santos College of Technology",
    start: "Jan 2020",
    end: "Dec 2022",
    content:
      "What I have learned:  Data Structure | Algorithms | Object-Oriented Programming | C | Functional Programming | SQL",
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section className="grid md:grid-cols-2">
      <div className="">
        <h3 className="text-white text-3xl font-bold">Experience</h3>
        <Timeline timelineInfo={experienceData} />
      </div>
      <div className="">
        <h3 className="text-white text-3xl font-bold">Education</h3>
        <Timeline timelineInfo={educationData} />
      </div>
    </section>
  );
};

export default ExperienceSection;
