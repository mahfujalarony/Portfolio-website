"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSlider from "@/components/WorkSlider";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vero necessitatibus minima aliquid magni in sint, sit libero nemo omnis.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
    image: "/project-1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vero necessitatibus minima aliquid magni in sint, sit libero nemo omnis.",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "Node.js" }],
    image: "/project-2.jpg",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vero necessitatibus minima aliquid magni in sint, sit libero nemo omnis.",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }],
    image: "/project-3.jpg",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  const handleSlideClick = (swiper, index) => {
    swiper.slideTo(index);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: {delay:2.4, duration: 0.4, ease: "easeIn"}
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-w group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} Project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-accent/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-accent/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
              onClick={(swiper) => handleSlideClick(swiper, swiper.activeIndex + 1)}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full cursor-pointer">
                  <div className="relative h-[460px] group flex justify-center items-center bg-pink-50/20">
                  <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                    <Image
                      src={project.image}
                      fill
                      alt={`Image for ${project.title}`}
                      className="object-cover" 
                    />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
<WorkSlider 
  containerStyles="flex justify-between xl:justify-end items-center gap-4 absolute top-[50%] left-0 right-0 transform -translate-y-1/2 xl:right-4 xl:top-auto xl:bottom-0 z-20"
  btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
/>


            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;










