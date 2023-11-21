import { TimelineDTO } from "@app/types/timeline";
import Timeline from "./Timeline";

const experienceData: TimelineDTO[] = [
  {
    title: "Software Developer",
    subtitle: "igc partners",
    start: "Jul 2022",
    end: null,
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto et ducimus voluptatem corporis ipsam. Minima unde, reprehenderit quo dolore soluta, dolor recusandae, laudantium odio quam voluptatem voluptas magni reiciendis cumque?",
  },
  {
    title: "Web Developer",
    subtitle: "Haste Design",
    start: "Apr 2021",
    end: "Jun 2022",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis accusamus tenetur impedit hic consequuntur quia aliquid earum id ad, exercitationem quasi? Natus hic exercitationem omnis mollitia tempora consectetur consequuntur tenetur.",
  },
  {
    start: "Jan 2021",
    subtitle: "Virtues Media & Apps",
    end: "Apr 2021",
    title: "Intern",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem molestias perspiciatis fugit commodi necessitatibus quia possimus, ratione doloremque in blanditiis. Atque placeat at accusamus, nostrum quia necessitatibus id? Eum, excepturi!",
  },
];

const educationData: TimelineDTO[] = [
  {
    title: "Higher Technology Course",
    subtitle: "USJT",
    start: "Jan 2023",
    end: "Dec 2023",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis accusamus tenetur impedit hic consequuntur quia aliquid earum id ad, exercitationem quasi? Natus hic exercitationem omnis mollitia tempora consectetur consequuntur tenetur.",
  },
  {
    title: "Higher Technology Course",
    subtitle: "Santos College of Technology",
    start: "Jan 2020",
    end: "Dec 2022",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto et ducimus voluptatem corporis ipsam. Minima unde, reprehenderit quo dolore soluta, dolor recusandae, laudantium odio quam voluptatem voluptas magni reiciendis cumque?",
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
