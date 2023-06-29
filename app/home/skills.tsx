"use client"
import React from 'react'
import MaxWidthWrapper from '@/components/shared/max-width-wrapper'
import Skill from '@/components/Skill'

const skillsData = [
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    percentage: '100%',
    title: 'HTML',
    description: 'Pokročilá znalost prvků HTML. Zkušenost s tvorbou moderních responzivních webových stránek. Znalost fungováni internetu, Seo optimalizace webových stránek, hostingů a domén.',
    projects: '10+ dokončených projektů',
    experience: 'Zkušenost s komerčním vývojem',
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    percentage: '100%',
    title: 'CSS',
    description: 'CSS ovládám velmi dobře a mám za sebou několik projektů, kde jsem pracoval jak na stylování layoutu, tak i animací a interakcí stránek.',
    projects: '10+ dokončených projektů',
    experience: 'Zkušenost s komerčním vývojem',
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    percentage: '100%',
    title: 'Tailwind CSS',
    description: 'Mám zasebou několik porjektů v Next.js, kde jsem pro stylování využíval Tailwind css, který jsem si momentálně oblíbil.',
    projects: '5+ dokončených projektů',
    experience: 'Zkušenost s vývojem osobních projektů',
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    percentage: '100%',
    title: 'Javascript',
    description: 'Zkušenosti s javascriptem mám především při tvorbě jednoduchých webových stránek, ale jinak spíše využívám jeho frameworky a knihovny u osobních projektů ',
    projects: '10+ dokončených projektů',
    experience: 'Zkušenost s komerčním vývojem',
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    percentage: '80%',
    title: 'Typescript',
    description: 'Typescript jsem začal používat teprve nedávno a stále se sním seznamuji. Využívám jej spíše u osobních projektů jako jsou webové aplikace',
    projects: '5+ dokončených projektů',
    experience: 'Zkušenost s vývojem osobních projektů',
  },
  {
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    percentage: '100%',
    title: 'React Js',
    description: 'Zkušenost s tvorbou webů v Reactu. Při tvorbě jsem používal komponenty a balíčky třetích stran. Znalost hooků, routeru, statu atd...',
    projects: '5+ Dokončených projektů',
    experience: 'Zkušenost s komerčním vývojem',
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    percentage: '80%',
    title: 'Next Js',
    description: 'Pomocí Next js jsem vytvořil několik osobních projektů. Naučil jsem se principy jako server a client components, data fetching, authorization a API endpoints.',
    projects: '5+ Dokončených projektů',
    experience: 'Zkušenost s vývojem osobních projektů',
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
    percentage: '100%',
    title: 'Wordpress',
    description: 'Přes wordpress tvořím především webové stránky a prezentace s pomocí elementor builderu a custom kódu. Mám také zkušenost s tvorbou Eshopů přes woocomerce.',
    projects: '10+ Dokončených projektů',
    experience: 'Zkušenost s komerčním vývojem',
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    percentage: '100%',
    title: 'Vs Code',
    description: 'Vs Code používám při každém svém projektu a dokážu se v jeho prostředí dobře orientovat, hlavně co se týče konzole a debugování.',
    projects: '',
    experience: 'Zkušenost s komerčním vývojem',
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
    percentage: '100%',
    title: 'Visual studio',
    description: 'Visual studio používám denně v mém zaměstnání, kde programuji nové prvky do informačních systémů. Umím pracovat s Nuget balíčky, konzolí a debugováním kódu.',
    projects: '',
    experience: 'Zkušenost s komerčním vývojem',
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    percentage: '50%',
    title: 'Python',
    description: 'V pythonu jsem zkoušel jen projekty jako je voice chatbot, práce s daty, scrapování a podobně',
    projects: '5+ Dokončených projektů',
    experience: 'Zkušenost s vývojem osobních projektů',
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    percentage: '100%',
    title: 'C#',
    description: 'V C# jsme pracovali v některých předmětech ve škole, kde jsme se učili například základy algoritmizace, objektově orientované programování a návrhové vzory a aplikační frameworky. Dále jej používám při práci kdy implementuju nové prvky do již existujících informačních systémů.',
    projects: '10+',
    experience: 'Zkušenost s komerčním vývojem informačních systémů',
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    percentage: '50%',
    title: 'C++',
    description: 'V C++ jsem si vytvořil pár konzolových projektů a taky jsem měl ve škole předmět programování v c++, který byl zaměřen na OPP a práci s ukazateli.',
    projects: '5+',
    experience: 'Zkušenost v oblasti základů objektového programování',
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    percentage: '50%',
    title: 'C',
    description: 'V jazyku C jsem na škole dokončil předměty jako základy C, algoritmy a datové struktury a embdeed systémy s mikropočítači.',
    projects: '',
    experience: 'Zkušenost v oblasti základů paměti, ukazatelů, algoritmů a datových struktur',
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg",
    percentage: '100%',
    title: 'MSSQL',
    description: 'MSSQL používám denně při zaměstnání, kde načítám data z MSSQL pomocí Nhiberante do našeho informačního systému. Také jsem s MSSQL pracoval při studiu v předmětech jako databázové systémy, webové aplikace nebo praktikum programování.',
    projects: '',
    experience: 'Zkušenost s databází MSSQL při komerčním vývoji',
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    percentage: '40%',
    title: 'Mongo DB',
    description: 'Mongo DB používám u některých mých osobních projektů jako jsou webové aplikace.',
    projects: '5+',
    experience: 'Zkušenost s vývojem osobních projektů',
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    percentage: '100%',
    title: 'Git',
    description: 'Git používám denně při zaměstnání u verzování projektů a také jsem jej používal při studiu.',
    projects: '',
    experience: 'Zkušenost s verzováním v komerčním vývoji',
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
    percentage: '80%',
    title: 'Adobe illustrator',
    description: 'V illustrátoru kreslím především loga nebo některé grafické prvky které poté využívám v Canvě.',
    projects: '',
    experience: 'Zkušenost s komerční tvorbou grafiky',
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    percentage: '50%',
    title: 'Figma',
    description: 'Figmu využívám především pro grafické návrhy mých projektů, kde navrhuji jenom layout stránek. S animacemi a interakcí ve figmě zkušenost nemám.',
    projects: '',
    experience: 'Zkušenost s komerční tvorbou grafiky',
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
    percentage: '100%',
    title: 'Canva',
    description: 'V Canvě tvořím především grafiku pro bannery, letáky nebo zde kompletuji moje předtvořené grafické návrhy s Adobe Illustrátor.',
    projects: '',
    experience: 'Zkušenost s komerční tvorbou grafiky',
  },
]

type Props = {}

const skills = (props: Props) => {
  return (
    <MaxWidthWrapper className="pb-10 pt-24">
      <div className="mx-auto max-w-md text-center sm:max-w-xl">
        <h2 className="font-display text-4xl font-extrabold leading-tight text-black sm:text-5xl sm:leading-tight">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Skills
          </span>{" "}
        </h2>
        <p className="mt-5 text-gray-600 sm:text-lg">
          Mám zkušenosti v oblasti vývoje informačních systému a tvorby webů, včetně grafických prací
        </p>

      </div>
      <div className='grid grid-cols-4 gap-5 mt-10 justify-items-center md:grid-cols-5'>
      {skillsData.map((skills, index) =>      
        <Skill key={index} imgSrc={skills.imgSrc} percentage={skills.percentage} title={skills.title} description={skills.description} projects={skills.projects} experience={skills.experience} />
      )}
      </div> 
    </MaxWidthWrapper>
  )
}

export default skills