'use client'
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import ButtonMagic from "./ui/ButtonMagic";
import { FaLocationArrow } from "react-icons/fa";

const WelcomeTitle = () => {
  const handleClick = () => {
    if (typeof document !== 'undefined') {
    const projects = document.getElementById("projects");
    if (projects) {
      projects.scrollIntoView({ behavior: "smooth" });
    }}
  }
  return (
    <div  id="about" className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-full h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div>
        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
          <div className="absolute pointer-events-none inset-z0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
        <div className="flex justify-center items-center my-20">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex items-center flex-col relative">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Welcome to Monil&apos;s Portfolio
            </h2>
            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="Hi, I&apos;m Monil Ghori 👋"
            />
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl font-serif">Step into Monil&apos;s world, where technology and creativity intersect to ignite innovation. With a profound passion for building and an unquenchable thirst for knowledge, I&apos;m on an exhilarating journey to navigate the ever-evolving tech landscape 🚀.</p>
            <ButtonMagic
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
              handleClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeTitle;
