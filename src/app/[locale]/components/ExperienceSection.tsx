import { TimelineDTO } from "@app/types/timeline";
import Timeline from "./Timeline";
import { useTranslations } from "next-intl";

const experienceData: TimelineDTO[] = [
  {
    title: "Software Developer",
    subtitle: "igc partners",
    date: "igcDate",
    content: "igcContent",
  },
  {
    title: "Web Developer",
    subtitle: "Haste Design",
    date: "hasteDate",
    content: "hasteContent",
  },
  {
    title: "Intern",
    subtitle: "Virtues Media & Apps",
    date: "virtuesDate",
    content: "virtuesContent",
  },
];

const educationData: TimelineDTO[] = [
  {
    title: "Higher Technology Course",
    subtitle: "USJT",
    date: "usjtDate",
    content: "usjtContent",
  },
  {
    title: "Higher Technology Course",
    subtitle: "Santos College of Technology",
    date: "fatecDate",
    content: "fatecContent",
  },
];

const ExperienceSection: React.FC = () => {
  const t = useTranslations("experience");

  return (
    <section className="grid md:grid-cols-2">
      <div className="">
        <h3 className="text-white text-3xl font-bold">
          {t("experienceTitle")}
        </h3>
        <Timeline timelineInfo={experienceData} />
      </div>
      <div className="">
        <h3 className="text-white text-3xl font-bold">{t("educationTitle")}</h3>
        <Timeline timelineInfo={educationData} />
      </div>
    </section>
  );
};

export default ExperienceSection;
