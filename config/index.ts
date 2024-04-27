interface IProject {
  title: string;
  description: string;
  href: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

export const NAVIGATION = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "About",
    href: "/about",
  },
  //contact is included in the navigation by contact-form.tsx
];

export const PROJECTS: IProject[] = [
  {
    title: "DRIE",
    description: "Full-stack developer, designer, and creator.",
    href: "https://drie.cz",
    image: "/projects/drie-project.png",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer motion"],
  },
  {
    title: "yogaboskovice",
    description: "Website for yoga studio in Boskovice.",
    href: "https://yogaboskovice.cz",
    image: "/projects/yogaboskovice-project.png",
    tags: ["Wordpress", "Elementor"],
    featured: true,
  },
  {
    title: "mujqrkod.cz",
    description: "QR code generator without registration. Fast and simple.",
    href: "https://mujqrkod.vercel.app",
    image: "/projects/mujqrkod-project.png",
    tags: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    featured: true,
  },
  {
    title: "uzx-elektro",
    description: "A website for an company using Loxone technology",
    href: "https://uzx-elektro.cz",
    image: "/projects/uzxelektro-project.png",
    tags: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "uzx-security",
    description: "A website for a security company.",
    href: "https://uzx-security.cz",
    image: "/projects/uzxsecurity-project.png",
    tags: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Shortner Tool",
    description: "Fast and simple URL shortner tool.",
    href: "https://short.drie.cz",
    image: "/projects/short-project.png",
    tags: ["Next.js", "Tailwind CSS", "MongoDB"],
  },
  {
    title: "my-story",
    description: "Share your stories with the world.",
    href: "https://story-sharing-app-nu.vercel.app/",
    image: "/projects/mystory-project.png",
    tags: ["Next.js", "Tailwind CSS", "Framer motion", "Convex"],
  },
  {
    title: "LoRa",
    description: "LoRa network offered in Boskovice.",
    href: "https://lora.drie.cz",
    image: "/projects/lora-project.png",
    tags: ["Next.js", "Tailwind CSS", "Framer motion"],
  },
  {
    title: "betterUML",
    description: "Create effectively and easy class diagrams.",
    href: "https://better-uml.vercel.app",
    image: "/projects/betteruml-project.png",
    tags: ["Next.js", "Tailwind CSS", "Framer motion"],
  },
];

export const FOOTER_PAGES = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "About",
    href: "/about",
  },
];

export const SOCIALS = [
  {
    title: "Github",
    href: "https://github.com/swajp",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/miroslav-stejskal/",
  },
  {
    title: "X",
    href: "https://twitter.com/miirastejskal",
  },
];

//

export const TECH_STACK = [
  {
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    title: "React",
    href: "https://reactjs.org",
  },
  {
    title: "Git",
    href: "https://git-scm.com",
  },
  {
    title: "Figma",
    href: "https://figma.com",
  },
  {
    title: "MySQL",
    href: "https://www.mysql.com",
  },
  {
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    title: "Docker",
    href: "https://www.docker.com",
  },
  {
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    title: "Framer Motion",
    href: "https://www.framer.com/motion",
  },
  {
    title: "MongoDB",
    href: "https://www.mongodb.com",
  },
  {
    title: "Wordpress",
    href: "https://wordpress.org",
  },
  {
    title: "Convex",
    href: "https://convex.dev",
  },
  {
    title: "shadcn/ui",
    href: "https://ui.shadcn.com",
  },
];

export const PROJECT_STUDY = {
  title: "uzx-elektro / uzx-security",
  description:
    "A complete redesign of the company's website. Design was created in Figma. The website is built with Next.js and Tailwind CSS. For components, I used shadcn/ui. The company is focused on Loxone technology and JABLOTRON security.",
  href: "/uzx",
  image: "/projects/uzx-mix.png",
  tags: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"],
};
