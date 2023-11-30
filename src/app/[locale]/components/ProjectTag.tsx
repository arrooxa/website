import { ProjectTagProps } from "@app/types/project";
import { useTranslations } from "next-intl";

const ProjectTag: React.FC<ProjectTagProps> = ({
  title,
  onClick,
  isSelected,
}: ProjectTagProps) => {
  const buttonStyles = isSelected
    ? "text-white bg-primary-500"
    : "text-primary-gray border-slate-600 hover:border-white";

  const t = useTranslations("projects");

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(title)}
    >
      {t(title)}
    </button>
  );
};

export default ProjectTag;
