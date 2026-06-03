import { FunctionComponent } from "react";
import { Category, TechStack } from "../types";

export const NavItem: FunctionComponent<{
  value: Category | "All";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className =
    "capitalize cursor-pointer text-gray-500 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent";
  if (active === value)
    className +=
      " bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent";

  return (
    <li
      className={`border border-gray-300 p-2 rounded-md m-1 inline-flex items-center ${className}`}
      onClick={() => handlerFilterCategory(value)}
    >
      {value}
    </li>
  );
};

export const TechItem: FunctionComponent<{
  value: TechStack | "Projects";
  handlerFilterTechStack: (techStack: TechStack | "Projects") => void;
  activeStack: string;
}> = ({ value, handlerFilterTechStack, activeStack }) => {
  let className =
    "capitalize cursor-pointer text-gray-500 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent";

  if (activeStack === value)
    className +=
      " bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent";

  return (
    <li
      className={`border border-gray-300 p-2 rounded-md m-1 inline-flex items-center ${className}`}
      onClick={() => handlerFilterTechStack(value)}
    >
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: (category: Category | "All") => void;
  handlerFilterTechStack: (techStack: TechStack | "Projects") => void;
  active: string;
  activeStack: string;
}> = (props) => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center px-3 pt-2 space-x-1 overflow-x-auto list-none">
        <NavItem value="All" {...props} />
        <NavItem value="Websites" {...props} />
        <NavItem value="Logos" {...props} />
        <NavItem value="Print Materials" {...props} />
        <NavItem value="Projects" {...props} />
      </div>

      {props.active === "Projects" && (
        <div className="flex flex-wrap justify-center items-center px-3 pb-2 space-x-1 overflow-x-auto list-none mt-2">
          <TechItem value="Javascript" {...props} />
          <TechItem value="React" {...props} />
          <TechItem value="Nextjs" {...props} />
        </div>
      )}
    </>
  );
};

export default ProjectsNavbar;
