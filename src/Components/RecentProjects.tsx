'use client'
import React from "react";
import { projects } from "../../Data";
import { PinContainer } from "./ui/PinContainer";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20">
      <h1 className="heading max-[465px]:px-2 mt-20">
        A small section of <span className="text-purple">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => {
          return (
            <div className="lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] sm:h-[41rem] w-[80vw]" key={id}>
              <PinContainer title={"Project"} href={link}>
                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[30vh] sm:h-[40vh] mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-black-100">
                    <img src="./bg.png" alt="bg-image" />
                  </div>
                  <img
                    src={img}
                    alt={title}
                    className="z-10 absolute bottom-0"
                  />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h1>
                <p className="lg:font-normal lg:text-xl font-light text-sm line-clamp-2 text-gray-400">
                  {des}
                </p>
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => {
                      return (
                        <div
                          key={icon}
                          className="border border-white/[0.2] rounded-full bg-black lg:h-10 lg:w-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translatex(-${5 * index * 2}px)`,
                          }}
                        >
                          <img src={icon} alt={icon} className="p-2 " />
                        </div>
                      );
                    })}
                  </div>
                <div className="flex justify-center items-center">
                  <a href={link} target="_blank">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Details
                  </p>
                  </a>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
                </div>
              </PinContainer>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentProjects;
