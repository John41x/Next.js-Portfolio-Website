import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

import { socialMedia } from "@/data/Index";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 font-body" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="Grid background"
          width={1920}
          height={500}
          className="w-full h-full opacity-30 sepia-[0.2]"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-custom-darkOlive font-bold">
          I want to <span className="text-custom-lightOlive font-bold">Innovate</span> with you!
        </h1>
        <p className="text-center mb-6 max-w-md text-white/80">
        </p>
        <a href="mailto:John41x41@gmail.com">
          <MagicButton
            title="Get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light text-custom-taupe">
          A Next.js Website by your&apos;s truly ©
        </p>

        <div className="flex gap-3 mt-5 md:mt-0">
          {socialMedia.map((info) => (
            <a href="#" key={info.id}>
              <div
                key={info.id}
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
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;