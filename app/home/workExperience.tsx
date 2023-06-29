"use client"
import MaxWidthWrapper from '@/components/shared/max-width-wrapper'
import { motion } from 'framer-motion'
import React from 'react'
import ExperienceCard from '@/components/ExperienceCard'

const experienceData = [
  {
    imgSrc: "/images/utb.png",
    altText: "UTB",
    title: "Univerzita Tomáše Bati",
    subtitle: "Softwarové inženýrství",
    period: "2020-2023",
    points: ["Algoritmy a datové struktury", "Objektově orientované programování", "Síťové aplikace", "Teoretická informatika", "Kryptologie", "Operační systémy" ],
  },
  {
    imgSrc: "/images/logo-cis.png",
    altText: "CIS",
    title: "C.I.S s.r.o.",
    subtitle: "Vývoj softwaru",
    period: "2020-x",
    points: ["Tvorba nových features", "Psaní dokumentace a testů", "Vývoj v jazyce C#", "Práce s databází MSSQL", "Používání knihovny DevExpress a WinForms"],
  },
  {
    imgSrc: "/images/profile.jpg",
    altText: "Freelance",
    title: "Freelance",
    subtitle: "Tvorba webů a grafiky",
    period: "2021-x",
    points: ["Tvorba custom webů", "HTML, CSS, Javasrcipt", "React.js + Next.js", "Tvorba webů běžících na wordpressu", "Tvorba grafiky (Tiskoviny, reklama, loga)"],
  },
];

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

type Props = {}

const WorkExperience = (props: Props) => {
  return (
    <MaxWidthWrapper className="pb-10 pt-24">
      <div className="mx-auto max-w-md text-center sm:max-w-xl">
        <h2 className="font-display text-4xl font-extrabold leading-tight text-black sm:text-5xl sm:leading-tight">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Zkušenosti
          </span>{" "}
        </h2>
        <p className="mt-5 text-gray-600 sm:text-lg">
          Mám zkušenosti v oblasti vývoje informačních systému a tvorby webů, včetně grafických prací
        </p>
      </div>
      <div className='flex flex-wrap justify-center gap-10 align-middle mt-10'>
      {experienceData.map((experience, index) => 
        <motion.div
          key={index}
          variants={fadeIn}
          initial={{ opacity: 0 }}
          transition={{ delay: index * .2 }}
          whileInView={{ opacity: 1 }}  // Delay each card by 0.2 seconds
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
      )}
      </div>  
    </MaxWidthWrapper>
  )
}

export default WorkExperience