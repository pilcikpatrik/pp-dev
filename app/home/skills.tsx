"use client"
import React from 'react'
import MaxWidthWrapper from '@/components/shared/max-width-wrapper'
import Skill from '@/components/Skill'
import { motion } from 'framer-motion'
import { skillsData as skillsData } from "../../data";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const skills = () => {
  return (
    <MaxWidthWrapper className="pb-10 pt-24">
      <div className="mx-auto max-w-md text-center sm:max-w-xl">
        <h2 className="font-display text-4xl font-extrabold leading-tight text-black sm:text-5xl sm:leading-tight">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Skills
          </span>{" "}
        </h2>
        <p className="mt-5 text-gray-600 sm:text-lg">
          Prohlédněte si některé z technologií které ovládám
        </p>
      </div>
      <div className='flex justify-center'>
        <div className='border border-gray-300 p-2 rounded-md inline-flex justify-center items-center mt-5'>
          <p className='bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>Pro zobrazení detailu klikněte na ikonu</p>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-5 mt-10 justify-items-center md:grid-cols-5'>
      {skillsData.map((skills, index) =>
        <motion.div
              key={index}
              variants={fadeIn}
              initial={{ opacity: 0 }}
              transition={{ delay: index * .05 }}
              whileInView={{ opacity: 1 }}  // Delay each card by 0.2 seconds
              viewport={{ once: true }}
        >     
          <Skill skillsData={skills} />
        </motion.div> 
      )}
      </div> 
    </MaxWidthWrapper>
  )
}

export default skills