
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

export type Category = "Weby" | "Loga" | "Tiskoviny" | "Projekty";

export type TechStack = "Javascript" | "React" | "C#" | "Nextjs" | "C++" | "C" | "Python";