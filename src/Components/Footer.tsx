import React from 'react'
import ButtonMagic from './ui/ButtonMagic'
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "../../Data";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center px-4">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-7 my-5 text-center">
        Feel free to explore my portfolio and discover the projects I&apos;ve been passionately working on. If you have any questions, ideas, or opportunities for collaboration, don&apos;t hesitate to reach out. I&apos;m always excited to connect with like-minded individuals and explore new possibilities.
        </p>
        <a href="mailto:monilghori46@gmail.com">
          <ButtonMagic
            title="Let's get in touch"
            icon={<svg xmlns="http://www.w3.org/2000/svg"
              aria-label="Gmail" role="img"
              viewBox="0 0 512 512" width="50" height="40">
                <path d="M158 391v-142l-82-63V361q0 30 30 30" fill="#4285f4"/>
                <path d="M 154 248l102 77l102-77v-98l-102 77l-102-77" fill="#ea4335"/>
                <path d="M354 391v-142l82-63V361q0 30-30 30" fill="#34a853"/>
                <path d="M76 188l82 63v-98l-30-23c-27-21-52 0-52 26" fill="#c5221f"/>
                <path d="M436 188l-82 63v-98l30-23c27-21 52 0 52 26" fill="#fbbc04"/>
              </svg>}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light text-gray-500 px-4">
          Copyright © 2024 Monil Ghori
        </p>

        <div className="flex items-center md:gap-3 gap-6 px-4 max-[768px]:mt-4">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer