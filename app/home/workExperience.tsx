"use client";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "@/components/ExperienceCard";

const experienceData = [
  {
    imgSrc: "images/logo-cis.png",
    altText: "CIS",
    title: "C.I.S s.r.o.",
    subtitle: "Software development and documentation",
    period: "2020-2023",
    points: [
      "Development of new features",
      "Writing documentation and tests",
      "Development in C#",
      "Working with MSSQL databases",
      "Using DevExpress and WinForms",
      "Creating forms",
    ],
  },
  {
    imgSrc: "images/profile.jpg",
    altText: "Freelance",
    title: "Freelance",
    subtitle: "Web development and graphic design",
    period: "2021-present",
    points: [
      "Development of custom websites",
      "HTML, CSS, JavaScript",
      "React.js + Next.js personal projects",
      "Building websites on WordPress",
      "Graphic design for print materials, advertising, and logos",
    ],
  },
  {
    imgSrc: "images/ecc_logo.png",
    altText: "ECC",
    title: "Software / Application Developer",
    subtitle:
      "Development and maintenance of internal enterprise applications for an international client",
    period: "02/2024-06/2026",
    points: [
      "Adding and updating features",
      "TypeScript, JavaScript, DevOps, APIs, Node.js",
      "Error handling, offline scenarios, and fallback logic",
      "Designing and modifying data models, caching, and load optimization",
      "Team collaboration with communication entirely in English",
      "Full-time cooperation as a contractor",
    ],
  },
];

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

type Props = {};

const WorkExperience = (props: Props) => {
  return (
    <MaxWidthWrapper className="pb-10 pt-24">
      <div className="mx-auto max-w-md text-center sm:max-w-xl">
        <h2 className="font-display text-4xl font-extrabold leading-tight text-black sm:text-5xl sm:leading-tight">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Experience
          </span>{" "}
        </h2>
        <p className="mt-5 text-gray-600 sm:text-lg">
          I have professional experience in JavaScript and TypeScript
          development, as well as web development and graphic design.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-10 align-middle mt-10">
        {experienceData.map((experience, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            initial={{ opacity: 0 }}
            transition={{ delay: index * 0.2 }}
            whileInView={{ opacity: 1 }} // Delay each card by 0.2 seconds
            viewport={{ once: true }}
          >
            <ExperienceCard
              imgSrc={experience.imgSrc}
              altText={experience.altText}
              title={experience.title}
              subtitle={experience.subtitle}
              period={experience.period}
              points={experience.points}
            />
          </motion.div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default WorkExperience;
