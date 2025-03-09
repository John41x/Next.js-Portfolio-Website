import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="darkOlive"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="olive"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="lightOlive" />
      </div>

      <div
        className="h-screen w-full dark:bg-custom-cream bg-custom-cream dark:bg-grid-custom-sage/[0.1] bg-grid-custom-sage/[0.15]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-custom-cream
         bg-custom-cream [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-custom-sage font-bold font-heading max-w-80">
            Enjoy The Moment
          </p>

          <h1 className="font-display text-center text-[50px] md:text-6xl lg:text-7xl uppercase tracking-[0.15em] text-custom-darkOlive leading-tight mt-5 mb-2 font-bold">
            John&apos;s Portfolio
          </h1>

          <p className="text-center md:tracking-wider mb-8 text-sm md:text-lg lg:text-xl font-body text-custom-olive font-medium">
            A Full Stack Developer with a Passion for Innovation
          </p>

          <a href="#about">
            <MagicButton
              title="Discover My Work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
