import { FunctionComponent } from "react";
import { IProject } from "../types";
import Image from "next/image";
import { Modal, useModal, Button, Text } from "@nextui-org/react";
import Github from "./shared/icons/github";
import { Dribbble } from "lucide-react";
import ImageSlider from './ImageSlider'

const ProjectCard: FunctionComponent<{
  project: IProject;
}> = ({
  project: {
    name,
    image_path,
    deployed_url,
    description,
    github_url,
    key_techs,
    dribble_url,
    mockups,
  },
}) => {
  const { setVisible, bindings } = useModal();
  return (
    <>
      <div className="relative overflow-hidden w-[250px] h-[125px] md:w-[250px] md:h-[125px] lg:w-[300px] lg:h-[150px]">
        <Image
          src={image_path}
          alt={name}
          className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer transform transition-transform duration-300 hover:scale-110"
          onClick={() => setVisible(true)}
          height="150"
          width="300"
        />
      </div>
      <p className="my-2 text-center">{name}</p>
      <Modal
        width="800px"
        blur
        aria-labelledby="modal-title"
        closeButton
        aria-describedby="modal-description"
        animated
        
        {...bindings}
      >
          <div className="mx-8 mt-8">
            <ImageSlider images={mockups} />
          <div className="mx-auto mt-10 flex max-w-fit space-x-4">
              <a
                href={deployed_url}
                className="rounded-full border border-black bg-black px-5 py-2 text-sm text-white shadow-lg transition-all hover:bg-white hover:text-black"
              >
                Projekt
              </a>
              {github_url && (
                <a
                  className="flex items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 shadow-lg transition-all hover:border-gray-800"
                  href={github_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="h-5 w-5 text-black" />
                  <p className="text-sm">GitHub</p>
                </a>
              )}
              {dribble_url && (
                <a
                  className="flex items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 shadow-lg transition-all hover:border-gray-800"
                  href={dribble_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Dribbble className="h-5 w-5 text-black" />
                  <p className="text-sm">Dribble</p>
                </a>
              )}
            </div>
          </div>

          <div className="m-8">
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
            <h3 className="mt-5 text-gray-600 sm:text-lg">{description}</h3>

            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider justify-center">
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounde-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
      </Modal>
    </>
  );
};

export default ProjectCard;