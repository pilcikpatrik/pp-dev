import React from 'react'

interface ExperienceCardProps {
  imgSrc: string;
  altText: string;
  title: string;
  subtitle: string;
  period: string;
  points: string[];
}

const ExperienceCard = (props: ExperienceCardProps) => {
  const { imgSrc, altText, title, subtitle, period, points } = props;

  return (
    <article className='flex flex-col rounded-lg h-auto items-center space-y-7 border border-gray-200 bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur py-5 px-5 cursor-pointer w-[300px] md:w-[320px]'>
        <img
            className='w-24 h-24 rounded-full object-cover object-center'
            src={imgSrc}
            alt={altText}
        />

        <div className=''>
            <h4 className='text-2xl font-light'>{title}</h4>
            <p className='font-bold text-1xl mt-1'>{subtitle}</p>
            <p className='uppercase py-5 text-gray-500'>{period}</p>

            <ul className='space-y-4 ml-5 list-disc text-1xl'>
              {points.map((point: string, index: number) => <li key={index}>{point}</li>)}
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard
