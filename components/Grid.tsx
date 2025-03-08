import { gridItems } from "@/data/Index";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <h1 className="heading text-custom-darkOlive font-bold text-center mb-10">
        Learn more <span className="text-custom-lightOlive font-bold">about</span> me
      </h1>
      <BentoGrid className="w-full py-20">
        {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg }) => (
          <BentoGridItem
            id={id}
            key={id}
            title={title}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;