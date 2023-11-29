import { ProjectCardProps } from "@app/types/project";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  gitUrl,
  previewUrl,
}: ProjectCardProps) => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="h-52 md:h-72 rounded-t-xl relative group bg-cover"
      >
        <div className="items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-primary-gray hover:border-white group/link"
            target="_blank"
          >
            <CodeBracketIcon className="h-10 w-10 text-primary-gray absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          {previewUrl && (
            <Link
              href="#"
              className="h-14 w-14 border-2 relative rounded-full border-primary-gray hover:border-white group/link"
              target="_blank"
            >
              <EyeIcon className="h-10 w-10 text-primary-gray absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-primary-gray">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
