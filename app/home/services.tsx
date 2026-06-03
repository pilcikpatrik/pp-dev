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
    title: "Website Development",
    icon: <Chart className="h-5 w-5 text-gray-600" />,
    description:
      "I offer comprehensive website development services, including custom-coded websites and WordPress websites. Whether you need a simple presentation website, a blog, or a more complex website, I am ready to help.",
    demo: "images/website.svg",
    thumbnail: "/_static/features/analytics.png",
  },
  {
    key: "domains",
    title: "Website Optimization and SEO",
    icon: <Airplay className="h-5 w-5 text-gray-600" />,
    description:
      "I provide comprehensive website optimization and SEO services. These include improving page loading speed, mobile optimization, creating SEO-friendly content, and more. The goal is to increase your website’s visibility in search engines and attract more visitors.",
    demo: "images/seo.svg",
  },
  {
    key: "link",
    title: "Logo Design",
    icon: <Link2 className="h-5 w-5 text-gray-600" />,
    description:
      "I offer logo design services. I create unique and attractive logos that reflect your brand identity. Each logo is designed with your specific requirements and goals in mind, including multiple variations and color options.",
    demo: "images/logo.svg",
  },
  {
    key: "social",
    title: "Graphic Design",
    icon: <Photo className="h-5 w-5 text-gray-600" />,
    description:
      "I offer a wide range of graphic design services, including flyers, brochures, business cards, and other marketing materials. I create visually appealing and effective designs that strengthen your brand and help you achieve your business goals.",
    demo: "images/graphic.svg",
  },
  {
    key: "team",
    title: "Copywriting",
    icon: <Users className="h-5 w-5 text-gray-600" />,
    description:
      "I offer copywriting services, including engaging and persuasive texts for websites, blogs, marketing materials, and more. I create content that not only attracts attention but also motivates readers to take action. Whether you need to sell a product, tell your story, or inform your audience.",
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
              Service
            </span>{" "}
          </h2>
          <p className="mt-5 text-gray-600 sm:text-lg">
            I offer a wide range of services, including website development,
            graphic design, SEO, and copywriting.
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
                          className=" object-cover w-[900px] h-[600px]"
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
