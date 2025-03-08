import React from 'react'

const MagicButton = ({
    title,
    icon,
    position,
    handleClick,
    otherClasses,
  }: {
    title: string;
    icon: React.ReactNode;
    position: string;
    handleClick?: () => void;
    otherClasses?: string;
  }) => {
    return (
      <button
        className="relative inline-flex h-14 w-full md:w-60 md:mt-5 overflow-hidden rounded-full p-[1px] focus:outline-none font-heading"
        onClick={handleClick}
      >
        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#565902_0%,#707314_50%,#565902_100%)]" />
  
        <span
          className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full
               bg-custom-darkOlive px-7 text-sm font-medium text-custom-cream backdrop-blur-3xl gap-2 uppercase tracking-widest ${otherClasses}`}
        >
          {position === "left" && icon}
          {title}
          {position === "right" && icon}
        </span>
      </button>
    );
  };
  
  export default MagicButton;