"use-client"
import React from 'react'
import Head from 'next/head'
import { Modal, useModal } from "@nextui-org/react";
import { SkillsProps } from "../types"

const Skills: React.FC<{skillsData: SkillsProps}> = ({ skillsData: {imgSrc, percentage, title, description, projects, experience} }) => {
    const { setVisible, bindings } = useModal();

  return (
    <>
    <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
    </Head>
    <div className='group relative flex cursor-pointer'>
        <img 
            src={imgSrc}
            className='rounded-full border-2 w-16 h-16 lg:w-24 lg:h-24 filter group-hover:grayscale transition duration-300 ease-in-out object-center object-contain'
        />
        <div onClick={() => setVisible(true)} className='absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 lg:w-24 lg:h-24 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-2xl font-bold text-white opacity-100'>{percentage}</p>
            </div>
        </div>
        <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            animated

            {...bindings}
        >
            <div className='p-10 gap-2'>
                <h2 className='bg-gradient-to-r text-2xl font-medium from-purple-600 to-pink-600 bg-clip-text text-transparent'>{title}</h2>
                <p className='mt-1 text-left'>{description}</p>
                <p className='mt-2 font-medium'>{projects}</p>
                <p className='text-green-400'>{experience}</p>
            </div>    
        </Modal>
    </div>
    </>
  )
}

export default Skills