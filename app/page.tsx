import { Github, LinkedIn, Twitter } from "@/components/shared/icons";
import { Dribbble, Instagram } from "lucide-react";

const Home = () => (
  <section className='w-full flex-center flex-col pb-10 pt-10'>
    <h1 className='head_text text-center'>
      Patrik
      <br className='max-md:hidden' />
      <span className='bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-center'>Web developer</span>
    </h1>
    <p className='desc text-center'>
      Specializuji se na vývoj webových stránek
    </p>
    <div className="mx-auto mt-10 flex max-w-fit space-x-4">
        <a
          href=""
          className="rounded-full border border-black bg-black px-5 py-2 text-sm text-white shadow-lg transition-all hover:bg-white hover:text-black"
        >
          Zobrazit CV
        </a>
        <a
          className="flex items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 shadow-lg transition-all hover:border-gray-800"
          href="https://github.com/pilcikpatrik"
          target="_blank"
          rel="noreferrer"
        >
          <Github className="h-5 w-5 text-black" />
          <p className="text-sm">GitHub</p>
        </a>
      </div>
      <div className="mt-10 relative">
        <img 
          src="images/profile.jpg" 
          alt="profile" 
          className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[300px] lg:h-[300px] rounded-full object-cover"  
        />
      </div>
      <div className=" mt-5 flex items-center justify-center space-x-4">
          <a    
            href="https://www.linkedin.com/in/patrik-pil%C4%8D%C3%ADk-6a7166239/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn className="h-10 w-10 hover:border-gray-800 p-2 rounded-lg border border-gray-300 bg-white shadow-lg transition-all"/>
          </a>
          <a    
            href="https://dribbble.com/pilcikpatrik"
            target="_blank"
            rel="noreferrer"
          >
            <Dribbble className="h-10 w-10 hover:border-gray-800 p-2 rounded-lg border border-gray-300 bg-white shadow-lg transition-all"/>
          </a>
          <a    
            href="https://www.instagram.com/patriik074/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram className="h-10 w-10 hover:border-gray-800 p-2 rounded-lg border border-gray-300 bg-white shadow-lg transition-all" />
          </a>
          <a    
            href="https://twitter.com/PPilcik"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter className="h-10 w-10 hover:border-gray-800 p-2 rounded-lg border border-gray-300 bg-white shadow-lg transition-all"/>
          </a>
        </div>
  </section>
);

export default Home;
