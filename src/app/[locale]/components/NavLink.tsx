import { LinkDTO } from "@app/types/link";
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

const NavLink: React.FC<LinkDTO> = ({ href, title, targetBlank }: LinkDTO) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-primary-gray sm:text-xl rounded md:p-0 hover:text-white"
      target={targetBlank ? "_blank" : "_self"}
    >
      {targetBlank ? <CodeBracketIcon className="h-7 w-7" /> : title}
    </Link>
  );
};

export default NavLink;
