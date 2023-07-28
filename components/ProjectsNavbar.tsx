import { FunctionComponent } from "react";
import { Category, TechStack } from "../types";

export const NavItem: FunctionComponent<{
  value: Category | "Vše";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className = "capitalize cursor-pointer text-gray-500 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent";
  if (active === value) className += " bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent";
  
  return (
    <li className={`border border-gray-300 p-2 rounded-md m-1 inline-flex items-center ${className}`} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

export const TechItem: FunctionComponent<{
  value: TechStack | "Projekty";
  handlerFilterTechStack: (techStack: TechStack | "Projekty") => void;
  activeStack: string;
}> = ({ value, handlerFilterTechStack, activeStack }) => {
  let className = "capitalize cursor-pointer text-gray-500 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent";
  
  if (activeStack === value) className += " bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent";
  
  return (
    <li className={`border border-gray-300 p-2 rounded-md m-1 inline-flex items-center ${className}`} onClick={() => handlerFilterTechStack(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: (category: Category | "Vše") => void;
  handlerFilterTechStack: (techStack: TechStack | "Projekty") => void;
  active: string;
  activeStack: string;
}> = (props) => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center px-3 pt-2 space-x-1 overflow-x-auto list-none">
        <NavItem value="Vše" {...props} />
        <NavItem value="Weby" {...props} />
        <NavItem value="Loga" {...props} />
        <NavItem value="Tiskoviny" {...props} />
        <NavItem value="Projekty" {...props} />
      </div>

      {props.active === "Projekty" && (
        <div className="flex flex-wrap justify-center items-center px-3 pb-2 space-x-1 overflow-x-auto list-none mt-2">
          <TechItem value="Javascript" {...props} />
          <TechItem value="React" {...props} />
          <TechItem value="C#" {...props} />
          <TechItem value="Nextjs" {...props}/>
          <TechItem value="C++" {...props}/>
          <TechItem value="C" {...props}/>
          <TechItem value="Python" {...props} />
        </div>
      )}
    </>
  );
};

export default ProjectsNavbar;
