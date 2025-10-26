"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { motion } from "framer-motion";

import { socialMedia } from "@/data/Index";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 font-body" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-custom-darkOlive font-bold">
          Let&apos;s <span className="text-custom-lightOlive font-bold">Innovate</span> Together!
        </h1>
        <p className="text-center mb-6 max-w-md text-white/80">
        </p>
        <a href="mailto:John.Luke8054@gmail.com">
          <MagicButton
            title="Get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light text-custom-sage mb-16 md:mb-0">
          A Next.js Website by yours truly ©
        </p>

        <div className="flex gap-3 mt-5 md:mt-0 relative">
          {socialMedia.map((info, index) => (
            <div key={info.id} className="relative">
              {index === 1 && (
                <motion.div
                  className="absolute -top-20 -right-20 whitespace-nowrap hidden md:block"
                  animate={{ 
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="relative flex flex-col items-center">
                    <span className="text-sm font-semibold text-custom-darkOlive bg-white/90 px-2 py-1 rounded shadow-sm mb-2">
                      Check out my photography
                    </span>
                    <motion.div
                      animate={{ 
                        y: [0, 5, 0],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <svg 
                        width="40" 
                        height="40" 
                      >
                        <path
                          d="M 20 0 L 20 30"
                          stroke="#A4A676"
                          strokeWidth="3"
                          fill="none"
                          strokeLinecap="round"
                        />
                        <polygon
                          points="15,25 20,35 25,25"
                          fill="#A4A676"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              )}
              <a
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-custom-olive/50 rounded-lg border border-white/10"
                >
                  <Image
                    src={info.img}
                    alt="Social media icon"
                    width={20}
                    height={20}
                  />
                </div>
              </a>
            </div>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;