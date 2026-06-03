export interface SkillsProps {
  imgSrc: string;
  percentage: string;
  title: string;
  description: string;
  projects: string;
  experience: string;
}

export interface IProject {
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  techStack: TechStack[];
  key_techs: string[];
  mockups: string[];
  dribble_url: string;
}

export type Category = "Websites" | "Logos" | "Print Materials" | "Projects";

export type TechStack = "Javascript" | "React" | "Nextjs";
