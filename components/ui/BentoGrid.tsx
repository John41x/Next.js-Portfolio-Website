"use client";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Image from "next/image";

// Replace the direct import with dynamic import
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { EvervaultCard } from "./evervault-card";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["NextJS", "PostgreSQL", "Python"];
  const rightLists = ["Selenium", "TailwindCSS", "Java"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "John41x4@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/10 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(56, 64, 1)",
        backgroundImage:
          "linear-gradient(90deg, rgba(56, 64, 1, 0.95) 0%, rgba(86, 89, 2, 0.95) 100%)",
      }}
    >
      {id === 2 ? (
        <div className="absolute inset-0 w-full h-full">
          <EvervaultCard text="Transform " subtitle="challenges into breakthroughs" className="w-full h-full" />
        </div>
      ) : (
        <div className={`${id === 6 && "flex justify-center"} h-full`}>
          <div className="w-full h-full absolute">
            {img && (
              <Image
                src={img}
                alt={title?.toString() || "Grid item"}
                width={500}
                height={300}
                className={cn(imgClassName, "object-cover object-center")}
              />
            )}
          </div>
          <div
            className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
              } `}
          >
            {spareImg && (
              <Image
                src={spareImg}
                alt="Decorative image"
                width={500}
                height={300}
                className="object-cover object-center w-full h-full"
              />
            )}
          </div>
          {id === 6 && (
            <BackgroundGradientAnimation>
              <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
            </BackgroundGradientAnimation>
          )}

          <div
            className={cn(
              titleClassName,
              "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
            )}
          >
            <div className="font-body font-semibold md:max-w-32 md:text-xs lg:text-base text-sm text-custom-cream z-10">
              {description}
            </div>
            <div
              className={`font-heading text-lg lg:text-2xl max-w-96 font-extrabold z-10 text-custom-cream`}
            >
              {title}
            </div>

            {id === 3 && (
              <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                  {leftLists.map((item, i) => (
                    <span
                      key={i}
                      className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-100 
                      lg:opacity-100 rounded-lg text-center bg-custom-darkOlive text-custom-cream font-medium"
                    >
                      {item}
                    </span>
                  ))}
                  <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-custom-darkOlive"></span>
                </div>
                <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                  <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-custom-darkOlive"></span>
                  {rightLists.map((item, i) => (
                    <span
                      key={i}
                      className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-100 
                      lg:opacity-100 rounded-lg text-center bg-custom-darkOlive text-custom-cream font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {id === 6 && (
              <div className="mt-5 relative">
                <div
                  className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                    }`}
                >
                  <Lottie options={defaultOptions} height={200} width={400} />
                </div>

                <MagicButton
                  title={copied ? "Email is Copied!" : "Copy my email address"}
                  icon={<IoCopyOutline />}
                  position="left"
                  handleClick={handleCopy}
                  otherClasses="!bg-custom-darkOlive"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};