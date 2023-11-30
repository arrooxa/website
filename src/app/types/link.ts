export interface LinkDTO {
  href: string;
  title: string;
  targetBlank?: boolean;
}

export const navLinks: LinkDTO[] = [
  {
    title: "about",
    href: "#about",
  },
  {
    title: "projects",
    href: "#projects",
  },
  {
    title: "contact",
    href: "#contact",
  },
  {
    title: "code",
    href: "https://github.com/arrooxa/website",
    targetBlank: true,
  },
];
