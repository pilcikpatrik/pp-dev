import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { Locate, Mail, Phone } from "lucide-react";
import React from "react";

type Props = {};

const contact = (props: Props) => {
  return (
    <MaxWidthWrapper className="pb-10 pt-24">
      <div className="mx-auto max-w-md text-center sm:max-w-xl">
        <h2 className="font-display text-4xl font-extrabold leading-tight text-black sm:text-5xl sm:leading-tight">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Contact
          </span>{" "}
        </h2>
        <p className="mt-5 text-gray-600 sm:text-lg">
          Interested in working together? Feel free to contact me.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        <div className="w-72 p-10 flex-row justify-center items-center border border-gray-200 bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur rounded-lg">
          <Phone className="m-auto h-10 w-10 text-gray-600" />
          <h4 className="mt-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-2xl text-center">
            Phone
          </h4>
          <p className="text-center">+420 605 584 635</p>
        </div>
        <div className="w-72 p-10 flex-row justify-center items-center border border-gray-200 bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur rounded-lg">
          <Mail className="m-auto h-10 w-10 text-gray-600" />
          <h4 className="mt-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-2xl text-center">
            Mail
          </h4>
          <p className="text-center">pilcikpatrik@seznam.cz</p>
        </div>
        <div className="w-72 p-10 flex-row justify-center items-center border border-gray-200 bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur rounded-lg">
          <Locate className="m-auto h-10 w-10 text-gray-600" />
          <h4 className="mt-5 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-2xl text-center">
            Location
          </h4>
          <p className="text-center">Zlín - Malenovice, třída Svobody, 76302</p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default contact;
