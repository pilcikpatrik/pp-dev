"use client";

import { Airplay, Chart, QR, Users, Photo } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/Accordion";
import { AnimatePresence, motion } from "framer-motion";
import { Link2 } from "lucide-react";

const featureList = [
  {
    key: "analytics",
    title: "Vývoj webových stránek",
    icon: <Chart className="h-5 w-5 text-gray-600" />,
    description:
      "Nabízím komplexní služby v oblasti vývoje webových stránek. Jedná se o custom naprogramované weby nebo weby přes Wordpress. Ať už potřebujete jednoduchou prezentaci, blog nebo složitý web, jsem připraven vám pomoci.",
    demo: "images/website.svg",
    thumbnail: "/_static/features/analytics.png",
  },
  {
    key: "qr",
    title: "Tvorba Eshopů",
    icon: <QR className="h-5 w-5 text-gray-600" />,
    description:
      "Poskytuji profesionální služby v oblasti vývoje e-shopů. S využitím platformy Woocommerce vytvářím e-shopy, které jsou přizpůsobeny potřebám vašeho podnikání. Mým cílem je vytvořit e-shop, který je snadno použitelný, efektivní a optimalizovaný pro vyhledávače, aby vaše produkty byly snadno dostupné pro potenciální zákazníky.",
    demo: "images/eshop.svg",
  },
  {
    key: "domains",
    title: "Optimalizace a SEO webu",
    icon: <Airplay className="h-5 w-5 text-gray-600" />,
    description:
      "Poskytuji komplexní služby v oblasti optimalizace a SEO pro webové stránky. Tyto služby zahrnují zlepšení rychlosti načítání stránky, optimalizaci pro mobilní zařízení, vytváření SEO přátelského obsahu a další. Cílem je zvýšit viditelnost vašeho webu ve vyhledávačích a přilákat více návštěvníků.",
    demo: "images/seo.svg",
  },
  {
    key: "link",
    title: "Tvorba loga",
    icon: <Link2 className="h-5 w-5 text-gray-600" />,
    description:
      "Nabízím služby v oblasti tvorby loga. Vytvářím jedinečná a atraktivní loga, která odrážejí identitu vaší značky. Každé logo je vytvořeno s ohledem na vaše specifické požadavky a cíle, včetně více variací a barev.",
    demo: "images/logo.svg",
  },
  {
    key: "social",
    title: "Grafické práce",
    icon: <Photo className="h-5 w-5 text-gray-600" />,
    description:
      "Nabízím širokou škálu grafických služeb, včetně tvorby letáků, brožur, vizitek a dalších marketingových materiálů. Vytvářím vizuálně poutavé a efektivní designy, které posílí vaši značku a pomohou vám dosáhnout vašich obchodních cílů.",
    demo: "images/graphic.svg",
  },
  {
    key: "team",
    title: "Copywriting",
    icon: <Users className="h-5 w-5 text-gray-600" />,
    description:
      "Nabízím copywritingové služby, které zahrnují vytváření působivých a přesvědčivých textů pro vaše webové stránky, blogy, marketingové materiály a další. Vytvářím obsah, který nejen přitahuje pozornost, ale také motivuje čtenáře k akci. Ať už potřebujete prodat produkt, sdělit svůj příběh nebo informovat své publikum.",
    demo: "images/copywriting.svg",
  },
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div id="features">
      {featureList.map(({ key, demo }) => (
        // preload videos
        <link key={key} rel="preload" as="video" href={demo} />
      ))}
      <MaxWidthWrapper className="pb-10 pt-24">
        <div className="mx-auto max-w-md text-center sm:max-w-xl">
          <h2 className="font-display text-4xl font-extrabold leading-tight text-black sm:text-5xl sm:leading-tight">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Služby
            </span>{" "}
          </h2>
          <p className="mt-5 text-gray-600 sm:text-lg">
            Nabízím širokou škálu služeb jako vývoj webů a eshopů, grafické práce nebo SEO a copywriting
          </p>
        </div>

        <div className="my-10 h-[840px] w-full overflow-hidden rounded-xl border border-gray-200 bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur lg:h-[630px]">
          <div className="grid grid-cols-1 gap-10 p-5 lg:grid-cols-3">
            <Accordion
              type="single"
              defaultValue="analytics"
              onValueChange={(e) => {
                setActiveFeature(featureList.findIndex(({ key }) => key === e));
              }}
            >
              {featureList.map(({ key, title, icon, description }) => (
                <AccordionItem key={key} value={key}>
                  <AccordionTrigger>
                    <div className="flex items-center space-x-3 p-3">
                      {icon}
                      <h3 className="text-base font-semibold text-gray-600">
                        {title}
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="p-3">
                      <p className="mb-4 text-sm text-gray-500">
                        {description}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {featureList.map((feature, index) => {
                  if (index === activeFeature) {
                    return (
                      <motion.div
                        key={feature.title}
                        initial={{
                          y: 10,
                          opacity: 0,
                        }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{
                          y: -10,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.15,
                          stiffness: 300,
                          damping: 30,
                        }}
                        className="relative min-h-[600px] w-full overflow-hidden whitespace-nowrap rounded-2xl bg-white shadow-2xl lg:mt-10 lg:w-[800px]"
                      >
                        <img
                          width={900}
                          height={600}
                          className="object-contain w-[900px] h-[600px]"
                          src={feature.demo}
                        
                        />
                      </motion.div>
                    );
                  }
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
