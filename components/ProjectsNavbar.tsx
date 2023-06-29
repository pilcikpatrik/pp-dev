import { FunctionComponent } from "react";
import { Category } from "../types";

export const NavItem: FunctionComponent<{
  value: Category | "Vše";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className = "capitalize cursor-pointer text-gray-500 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent";
  if (active === value) className += " bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent";
  
  if (value === 'Vše') className += " mt-auto";

  return (
    <li className={`border border-gray-300 p-2 rounded-md m-1 inline-flex items-center ${className}`} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex flex-wrap justify-center items-center px-3 py-2 space-x-1 space-y-1 overflow-x-auto list-none">
      <NavItem value="Vše" {...props} />
      <NavItem value="Weby" {...props} />
      <NavItem value="Loga" {...props} />
      <NavItem value="Tiskoviny" {...props} />
      <NavItem value="Projekty" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
