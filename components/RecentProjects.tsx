"use client";

import React from 'react';
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

import { projects } from "@/data/Index";
import { PinContainer } from "./ui/3d-pin";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20">
      <h1 className="heading text-custom-darkOlive font-bold">
        A handful of {" "}
        <span className="text-custom-lightOlive font-bold">projects</span>
      </h1>
      <p className="uppercase text-center text-custom-olive text-s font-bold font-heading ">and more...</p>
          
      {/* First 4 cards in grid layout */}
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.slice(0, 4).map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title="/github.com"
              href="https://github.com/John41x"
            >
<div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
  {/* Border wrapper with green background */}
  <div className="relative w-full h-full lg:rounded-3xl p-2" style={{ backgroundColor: "#A4A676" }}>
    {/* Check if it's a "Coming Soon" image and adjust size */}
    <div
      className={`overflow-hidden mx-auto my-auto border-2 border-custom-lightOlive ${
        item.img === "/coming_soon.png" ? "w-[85%] h-[85%]" : "w-[95%] h-[95%]"
      } lg:rounded-2xl`}
    >
      <Image
        src={item.img}
        alt={item.title || "Project"}
        width={400}
        height={300}
        className="w-full h-full object-cover lg:rounded-2xl"
      />
    </div>
  </div>
</div>




              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-custom-darkOlive">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-medium font-medium text-sm line-clamp-2 text-custom-olive"
                style={{
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-custom-olive/50 rounded-full bg-custom-darkOlive lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        src={icon}
                        alt="Technology icon"
                        width={32}
                        height={32}
                        className="p-1.5"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <a href={item.link} className="flex items-center hover:underline">
                    <p className="flex lg:text-xl md:text-xs text-sm text-custom-darkOlive font-bold">
                      Click here
                    </p>
                    <FaLocationArrow className="ms-1" color="#384001" />
                  </a>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>

      {/* Fifth card as horizontal card spanning full width */}
      {projects.length > 4 && (
        <div className="flex justify-center p-4 mt-8">
          <div className="w-full max-w-6xl">
            <PinContainer
              title="/hackutd.co"
              href="https://hackutd.co/"
            >
              <div className="flex flex-col lg:flex-row items-center gap-8 p-6">
                {/* Image section */}
                <div className="flex-shrink-0">
                  <div className="relative w-full lg:w-80 h-48 overflow-hidden rounded-2xl">
                    <div className="relative w-full h-full p-2" style={{ backgroundColor: "#A4A676" }}>
                      <div className="w-full h-full overflow-hidden rounded-xl">
                        <Image
                          src={projects[4].img}
                          alt={projects[4].title}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content section */}
                <div className="flex-1 text-center lg:text-left">
                  <h1 className="font-bold text-2xl lg:text-3xl text-custom-darkOlive mb-4">
                    {projects[4].title}
                  </h1>

                  <p className="text-lg lg:text-xl text-custom-olive mb-6">
                    {projects[4].des}
                  </p>

                  <div className="flex justify-center lg:justify-start">
                    <a href={projects[4].link} className="flex items-center hover:underline">
                      <p className="text-lg text-custom-darkOlive font-bold">
                        Click here
                      </p>
                      <FaLocationArrow className="ms-1" color="#384001" />
                    </a>
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentProjects;