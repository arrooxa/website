import { ProjectTagProps } from "@app/types/project";

const ProjectTag: React.FC<ProjectTagProps> = ({
  title,
  onClick,
  isSelected,
}: ProjectTagProps) => {
  const buttonStyles = isSelected
    ? "text-white bg-primary-500"
    : "text-primary-gray border-slate-600 hover:border-white";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(title)}
    >
      {title}
    </button>
  );
};

export default ProjectTag;
