"use client";

import Link from "next/link";
import { Github, LinkedIn, Twitter } from "@/components/shared/icons";
import { useParams } from "next/navigation";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { Dribbble, Instagram } from "lucide-react";

const navigation = {
  links: [
    { name: "Domů", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Zkušenosti", href: "#exp" },
    { name: "Služby", href: "#services" },
    { name: "Reference", href: "#references" },
    { name: "Kontakt", href: "#contact" },  
  ],
  company: [
    { name: "C.I.S.", href: "https://www.cisvp.cz/" },
    { name: "UTB", href: "https://www.utb.cz/" }
  ],
  legal: [
    { name: "Privacy", href: "/privacy/page" },
  ],
  resources: [
    { name: "Telefon: +420 605 584 635" },
    { name: "Email: pilcikpatrik@seznam.cz" },
    { name: "Location: Valašská Polanka 259, 75611" },
  ],
};

export default function Footer() {
  const { domain = "dub.sh" } = useParams() as { domain: string };

  const createHref = (href: string) =>
    domain === "pp-dev"
      ? href
      : ``;

  return (
    <footer className="z-10 border-t border-gray-200 bg-white/50 py-8 backdrop-blur-lg">
      <MaxWidthWrapper className="pt-10 px-5">
        <div className="xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="space-y-4 xl:col-span-2">
            <Link href={createHref("/")}>
              <span className="sr-only">Patrik Pilčík</span>
              <img src="images/profile.jpg" className="h-10 w-10 rounded-full text-gray-600 object-cover" />
            </Link>
            <p className="max-w-xs text-sm text-gray-500">
            Jsem profesionální web developer a designér, který nabízí širokou škálu služeb, včetně vývoje webových stránek, tvorby e-shopů, optimalizace a SEO pro webové stránky, tvorby loga, grafických prací a copywritingu. Mé služby jsou navrženy tak, aby podporovaly růst vašeho podnikání a zvýšily vaši online přítomnost.
            </p>
            <div className="flex items-center space-x-2">
            <a
                href="https://dribbble.com/pilcikpatrik"
                target="_blank"
                rel="noreferrer"
                className="rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200"
              >
                <span className="sr-only">Dribble</span>
                <Dribbble className="h-5 w-5 text-gray-600" />
              </a>
              <div className="h-8 border-l border-gray-200" />
              <a
                href="https://github.com/pilcikpatrik"
                target="_blank"
                rel="noreferrer"
                className="rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200"
              >
                <span className="sr-only">Github</span>
                <Github className="h-5 w-5 text-gray-600" />
              </a>
              <div className="h-8 border-l border-gray-200" />
              <a
                href="https://www.linkedin.com/in/patrik-pil%C4%8D%C3%ADk-6a7166239/"
                target="_blank"
                rel="noreferrer"
                className="rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200"
              >
                <span className="sr-only">LinkedIn</span>
                <LinkedIn className="h-5 w-5" fill="#52525B" />
              </a>
              <div className="h-8 border-l border-gray-200" />
              <a
                href="https://twitter.com/PPilcik"
                target="_blank"
                rel="noreferrer"
                className="rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5 text-gray-600" />
              </a>
              <div className="h-8 border-l border-gray-200" />
              <a
                href="https://www.instagram.com/patriik074/"
                target="_blank"
                rel="noreferrer"
                className="rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5 text-gray-600" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-3 xl:mt-0">
            <div className="md:grid md:grid-cols-4 md:gap-32">
              <div>
                <h3 className="text-sm font-semibold text-gray-600">Links</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.links.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={createHref(item.href)}
                        className="text-sm text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-600">Praxe</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={createHref(item.href)}
                        className="text-sm text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-600">Legal</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={createHref(item.href)}
                        className="text-sm text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0 w-52">
              <h3 className="text-sm font-semibold text-gray-600">Kontakt</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name} className="text-sm text-gray-500 hover:text-gray-900">
                        {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-sm leading-5 text-gray-500">
            © {new Date().getFullYear()} Patrik Pilčík
          </p>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
