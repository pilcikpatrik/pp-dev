'use client'
import { useState, useEffect } from "react";
import ProjectCard from "../../components/ProjectCard";
import ProjectsNavbar from "../../components/ProjectsNavbar";
import { projects as projectsData } from "../../data";
import { Category } from "../../types";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("Vše");
  const [showMore, setShowMore] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();  // Call the function initially
    return () => window.removeEventListener("resize", handleResize);  // Clean up
  }, []);

  const handlerFilterCategory = (category: Category | "Vše") => {
    if (category === "Vše") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  const displayedProjects = showMore ? projects : projects.slice(0, isMobile ? 3 : 6);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <MaxWidthWrapper className="pb-10 pt-24">
      <div className="w-full flex-center flex-col" style={{ height: "auto" }}>
          <div className="mx-auto max-w-md text-center sm:max-w-xl">
            <h2 className="font-display text-4xl font-extrabold leading-tight text-black sm:text-5xl sm:leading-tight">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Projekty
              </span>{" "}
            </h2>
            <p className="mt-5 text-gray-600 sm:text-lg">
              Prohlédněte si některé z mých hotových prací
            </p>
          </div>
        <div className="flex justify-center items-center">
          <ProjectsNavbar
            handlerFilterCategory={handlerFilterCategory}
            active={active}
          />
        </div>
        <motion.div className="relative grid grid-cols-12 gap-4 my-3"
          layout 
        >
          {displayedProjects.map((project) => (
            <motion.div
              className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
              key={project.name}
              layout
              layoutId={project.name}
            >
              <ProjectCard project={project} key={project.name} />
            </motion.div>
          ))}
        </motion.div>
        {projects.length > (isMobile ? 3 : 6) && (
          <div className="flex justify-center">
            <button
              className="rounded-full border border-black bg-black px-5 py-2 text-sm text-white shadow-lg transition-all hover:bg-white hover:text-black"
              onClick={handleShowMore}
            >
              {showMore ? 'Zobrazit méně' : 'Více'}
            </button>
          </div>
        )}
      </div>
    </MaxWidthWrapper>
  );
};

export default Projects;


