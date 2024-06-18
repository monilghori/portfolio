import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { aboutItems } from "../../Data";

const Grid = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center gap-4 min-w-full px-4 mb-4"
    >
      <div className="flex gap-4 max-[525px]:flex-col w-full">
        <div className="lg:col-span-3 md:col-span-6 md:row-span-4 w-[60%] max-[525px]:w-full">
          <BentoGridItem
            key={aboutItems[0].id}
            title={aboutItems[0].title}
            description={aboutItems[0].description}
            img={aboutItems[0].img}
            imgClassName={aboutItems[0].imgClassName}
            id={aboutItems[0].id}
            //className={aboutItems[0].className}
          />
        </div>
        <div className="flex flex-col space-y-4">
          <div className="lg:col-span-2 md:col-span-3 md:row-span-2">
            <BentoGridItem
              key={aboutItems[1].id}
              title={aboutItems[1].title}
              description={aboutItems[1].description}
              img={aboutItems[1].img}
              imgClassName={aboutItems[1].imgClassName}
              id={aboutItems[1].id}
              //className={aboutItems[1].className}
            />
          </div>
          <div className="lg:col-span-2 md:col-span-3 md:row-span-2">
            <BentoGridItem
              key={aboutItems[2].id}
              title={aboutItems[2].title}
              description={aboutItems[2].description}
              img={aboutItems[2].img}
              imgClassName={aboutItems[2].imgClassName}
              id={aboutItems[2].id}
              //className={aboutItems[2].className}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 max-[525px]:flex-col-reverse w-full">
        <div className="flex flex-col space-y-4">
          <div className="lg:col-span-2 md:col-span-3 md:row-span-1">
            <BentoGridItem
              key={aboutItems[3].id}
              title={aboutItems[3].title}
              description={aboutItems[3].description}
              imgClassName={aboutItems[3].imgClassName}
              img={aboutItems[3].img}
              id={aboutItems[3].id}
              //className={aboutItems[3].className}
            />
          </div>
          <div className="lg:col-span-2 md:col-span-3 md:row-span-1">
            <BentoGridItem
              key={aboutItems[5].id}
              title={aboutItems[5].title}
              description={aboutItems[5].description}
              imgClassName={aboutItems[5].imgClassName}
              img={aboutItems[5].img}
              id={aboutItems[5].id}
              titleClassName={aboutItems[5].titleClassName}
              //className={aboutItems[5].className}
            />
          </div>
        </div>
        <div className="md:col-span-3 md:row-span-2 w-[60%] max-[525px]:w-full">
          <BentoGridItem
            key={aboutItems[4].id}
            title={aboutItems[4].title}
            description={aboutItems[4].description}
            img={aboutItems[4].img}
            id={aboutItems[4].id}
            imgClassName={aboutItems[4].imgClassName}
            //className={aboutItems[4].className}
          />
        </div>
      </div>
    </section>
  );
};

export default Grid;
