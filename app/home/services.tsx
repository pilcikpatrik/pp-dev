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
      "Vývoj webových stránek pomocí CMS systému wordpress nebo custom řešení pomocí kódu.",
    demo: "https://d2vwwcvoksz7ty.cloudfront.net/analytics.mp4",
    thumbnail: "/_static/features/analytics.png",
  },
  {
    key: "qr",
    title: "Tvorba Eshopů",
    icon: <QR className="h-5 w-5 text-gray-600" />,
    description:
      "QR codes and short links are like peas in a pod. That's why we've built a QR code generator right into Dub.",
    demo: "https://d2vwwcvoksz7ty.cloudfront.net/qr.mp4",
  },
  {
    key: "domains",
    title: "Optimalizace a SEO webu",
    icon: <Airplay className="h-5 w-5 text-gray-600" />,
    description:
      "Optimalizace a SEO webových stránek, .",
    demo: "https://d2vwwcvoksz7ty.cloudfront.net/custom-domain.mp4",
  },
  {
    key: "link",
    title: "Tvorba loga",
    icon: <Link2 className="h-5 w-5 text-gray-600" />,
    description:
      "Tvorba loga na míru, včetně několika verzí a barev",
    demo: "videos/logo.mp4",
  },
  {
    key: "social",
    title: "Grafické práce",
    icon: <Photo className="h-5 w-5 text-gray-600" />,
    description:
      "Tvorba letáku, brožur, vizitek bradu atd...",
    demo: "videos/graphic.mp4",
  },
  {
    key: "team",
    title: "Copywriting",
    icon: <Users className="h-5 w-5 text-gray-600" />,
    description:
      "With Dub, you can invite unlimited team members to collaborate on your project for free - no more sharing logins via Google groups.",
    demo: "https://d2vwwcvoksz7ty.cloudfront.net/team.mp4",
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
            Nabízím širokou škálu služeb od vývoje až po grafické práce
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
                        <video
                          autoPlay
                          muted
                          loop
                          width={900}
                          height={600}
                        >
                          <source src={feature.demo} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
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
