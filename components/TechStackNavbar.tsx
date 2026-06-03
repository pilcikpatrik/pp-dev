import { FunctionComponent } from "react";
import { TechStack, Category } from "../types";

export const TechStackNavItem: FunctionComponent<{
  value: TechStack | "All";
  handlerFilterTechStack: Function;
  activeStack: string;
}> = ({ value, handlerFilterTechStack, activeStack }) => {
  let className =
    "capitalize cursor-pointer text-gray-500 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent";
  if (activeStack === value)
    className +=
      " bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent";

  if (value === "All") className += " mt-auto";

  return (
    <li
      className={`border border-gray-300 p-2 rounded-md m-1 inline-flex items-center ${className}`}
      onClick={() => handlerFilterTechStack(value)}
    >
      {value}
    </li>
  );
};

const TechStackNavbar: FunctionComponent<{
  handlerFilterTechStack: Function;
  activeStack: string;
  category: Category;
}> = (props) => {
  if (props.category !== "Projects") {
    return null;
  }

  return (
    <div className="flex flex-wrap justify-center items-center px-3 py-2 space-x-1 space-y-1 overflow-x-auto list-none">
      <TechStackNavItem value="All" {...props} />
      <TechStackNavItem value="Javascript" {...props} />
      <TechStackNavItem value="React" {...props} />
      <TechStackNavItem value="Nextjs" {...props} />
    </div>
  );
};

export default TechStackNavbar;
