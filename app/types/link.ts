export interface LinkDTO {
  href: string;
  title: string;
  targetBlank?: boolean;
}

export const navLinks: LinkDTO[] = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
  {
    title: "Code",
    href: "https://github.com/arrooxa/website",
    targetBlank: true,
  },
];
