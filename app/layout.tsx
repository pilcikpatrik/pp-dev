import Projects from "@/app/home/projects";
import Services from "@/app/home/services";
import Nav from "../components/Nav";
import Skills from "@/app/home/skills"
import WorkExperience from "@/app/home/workExperience"
import "../styles/globals.css";
import { ReactNode } from "react";
import Footer from "./home/footer";
import MobileNav from "@/components/Mobile-nav";

export const metadata = {
  title: "Pilčík Patrik",
  description: "Web developer",
};

interface LayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => (
  <html lang='en'>
    <body>
        <div className=''>
            <div className='gradient' />
        </div>
        <main className=''>
          <MobileNav />
          <Nav />
          <section id="home">
            {children}
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="exp">
            <WorkExperience />
          </section>

          <section id="services">
            <Services />
          </section>

          <section id="references">
            <Projects />
          </section>
          
          <Footer />
        </main>
    </body>
  </html>
);

export default RootLayout;
