import React from "react";
import NavLink from "./NavLink";
import { LinkDTO } from "@app/app/link";

const MenuOverlay: React.FC<{ links: LinkDTO[] }> = ({
  links,
}: {
  links: LinkDTO[];
}) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map(({ href, title }, index) => (
        <li key={index}>
          <NavLink href={href} title={title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
