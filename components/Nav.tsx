"use client";

import Link from "next/link";
import { useParams, useSelectedLayoutSegment } from "next/navigation";
import useScroll from "@/lib/hooks/use-scroll";
import clsx from "clsx";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { useEffect } from "react";
import { MouseEvent } from "react";

const transparentHeaderSegments = new Set(["metatags", "pricing"]);

export default function Nav() {
  const { domain = "dub.sh" } = useParams() as { domain: string };

  const scrolled = useScroll(80);
  const segment = useSelectedLayoutSegment();
  
  useEffect(() => {
    const smoothScroll = (event: MouseEvent) => {
      event.preventDefault();
      const targetId = (event.currentTarget as HTMLAnchorElement).getAttribute("href");
      
      if (targetId) {
        const targetElement = document.querySelector(targetId) as HTMLElement;
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      }
    };
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", smoothScroll as any);
    });
  
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.removeEventListener("click", smoothScroll as any);
      });
    };
  }, []);
  

  return (
    <div
      className={clsx(`sticky inset-x-0 top-0 z-30 w-full transition-all`, {
        "border-b border-gray-200 bg-white/75 backdrop-blur-lg": scrolled,
        "border-b border-gray-200 bg-white":
          segment && !transparentHeaderSegments.has(segment),
      })}
    >
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          <Link
            href={
              domain === "dub.sh"
                ? "/"
                : `https://dub.sh?utm_source=${domain}&utm_medium=referral&utm_campaign=custom-domain`
            }
          >
            <img
              src="pp-dev/public/images/profile.jpg"
              alt="Pilčík Patrik"
              className="w-8 h-8 rounded-full object-cover object-center"
            />
          </Link>

          <div className="hidden items-center space-x-6 sm:flex">
            <Link
              href="#home"
              className={`rounded-md text-sm font-medium ${
                segment === "home" ? "text-black" : "text-gray-500"
              } transition-colors ease-out hover:text-black`}
            >
              Domů
            </Link>
            <Link
              href="#skills"
              className={`rounded-md text-sm font-medium ${
                segment === "about" ? "text-black" : "text-gray-500"
              } transition-colors ease-out hover:text-black`}
            >
              Skills
            </Link>
            <Link
              href="#exp"
              className={`rounded-md text-sm font-medium ${
                segment === "about" ? "text-black" : "text-gray-500"
              } transition-colors ease-out hover:text-black`}
            >
              Zkušenosti
            </Link>
            <Link
              href="#services"
              className={`rounded-md text-sm font-medium ${
                segment === "services" ? "text-black" : "text-gray-500"
              } transition-colors ease-out hover:text-black`}
            >
              Služby
            </Link>
            <Link
              href="#references"
              className={`rounded-md text-sm font-medium ${
                segment === "references" ? "text-black" : "text-gray-500"
              } transition-colors ease-out hover:text-black`}
            >
              Reference
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

