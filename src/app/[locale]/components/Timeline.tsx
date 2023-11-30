import { TimelineProps } from "@app/types/timeline";
import { useTranslations } from "next-intl";

const Timeline: React.FC<TimelineProps> = ({ timelineInfo }: TimelineProps) => {
  const t = useTranslations("experience");

  return (
    <ol className="border-l-2 border-primary-400 m-5">
      {timelineInfo.map((item, index) => (
        <li key={index}>
          <div className="flex-start flex items-center">
            <div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary-500"></div>
            <h4 className="-mt-2 text-xl font-semibold text-white">
              {item.title}
            </h4>
            <p className="hidden md:block ml-2 text-sm text-primary-gray">
              {item.subtitle}
            </p>
          </div>
          <div className="mb-6 ml-5 pb-6">
            <p className="text-sm text-primary-400">{t(item.date)}</p>
            <p className="mb-4 mt-2 text-primary-gray">{t(item.content)}</p>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
