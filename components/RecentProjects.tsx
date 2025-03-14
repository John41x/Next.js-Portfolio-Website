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
          
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title="/github.com"
              href="https://github.com/John41x"
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#A4A676" }}
                >
                  <Image
                    src="/bg.png"
                    alt="Background"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <Image
                  src={(item.img && item.img.trim()) || "/placeholder.png"}
                  alt={item.title || "Project"}
                  width={400}
                  height={300}
                  className="z-10 absolute bottom-0 w-auto h-auto max-h-[80%]"
                />
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
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline">
                    <p className="flex lg:text-xl md:text-xs text-sm text-custom-darkOlive font-bold">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#384001" />
                  </a>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;