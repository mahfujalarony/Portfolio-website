"use client";

import { icons } from "lucide-react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs
} from "react-icons/fa";


import { SiTailwindcss, SiNodedotjs, SiNextdotjs } from "react-icons/si";



const about = {
  title: "About me",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloribus inventore, temporibus aliquid modi assumenda of.",
  info: [
    {
      fieldName: "Name",
      fieldValu: "Luke Coleman",
    },

    {
      fieldName: "Phone",
      fieldValu: "(+88) 017 8434 3983",
    },

    {
      fieldName: "Experience",
      fieldValu: "3+ Years",
    },

    {
      fieldName: "Skype",
      fieldValu: "Luke.01",
    },

    {
      fieldName: "Nationality",
      fieldValu: "Bangladeshi",
    },

    {
      fieldName: "Email",
      fieldValu: "mahfujalamrony07@gmail.com",
    },

    {
      fieldName: "Freelance",
      fieldValu: "Available",
    },

    {
      fieldName: "Language",
      fieldValu: "English, Bangla",
    },

  ]
};

const experience = {
  icon:  "my-exprence",
  title: "My experience",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, magnam dolorum. Pariatur esse voluptatibus, quisquam nostrum quaerat unde",
  items: [
    {
      company: "Tech Solutions Inc",
      position: "Frond-end Developer",
      duration: "2023 - Present",
    },

    {
      company: "Web Design Studio",
      position: "Front-End Developer Intern",
      duration: "Summer 2021",
    },

    {
      company: "E-commerce Startup",
      position: "Freeelance Web Developer",
      duration: "2020 - 2021",
    },

    {
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2019 - 2020",
    },

    {
      company: "Digital Agency",
      position: "UI/UX Designer",
      duration: "2018 - 2019",
    },

    {
      company: "Software Development Firm",
      position: "Junior Developer",
      duration: "2017 - 2018",
    },
  ]
};

const education = {
  icon: "f" ,
  title: "My education",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, magnam dolorum. Pariatur esse voluptatibus, quisquam nostrum quaerat unde",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },

    {
      institution: "Codeacademy",
      degree: "Front-end Track",
      duration: "2022",
    },

    {
      institution: "Online Course",
      degree: "Programing Course",
      duration: "2020 - 2021",
    },

    {
      institution: "Tech Institute",
      degree: "Certified Web Developer",
      duration: "2019",
    },

    {
      institution: "Design School",
      degree: "Dipluma in Graphic Design",
      duration: "2016 - 2018",
    },


    {
      institution: "Community College",
      degree: "Associate Degree in Computer Scince",
      duration: "2014 - 2016",
    },
  ]
};


const skills = {
  icon: "f" ,
  title: "My skills",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, magnam dolorum. Pariatur esse voluptatibus, quisquam nostrum quaerat unde",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5',
    },

    {
      icon: <FaCss3 />,
      name: 'css 3',
    },

    {
      icon: <FaJs />,
      name: 'java script',
    },

    {
      icon: <FaReact />,
      name: 'react js  ',
    },

    {
      icon: <SiNextdotjs />,
      name: 'next js',
    },

    {
      icon: <SiTailwindcss />,
      name: 'tailwind css',
    },

    {
      icon: <FaNodeJs />,
      name: 'node js',
    },

    {
      icon: <FaFigma />,
      name: 'figma',
    },
  ]
};



import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
 } from "@/components/ui/tooltip";


 import { ScrollArea } from "@/components/ui/scroll-area";

 import { motion } from "framer-motion";

const resume = () => {
  return (
    <motion.div
    initial = {{ opacity: 0 }}
    animate = {{
      opacity: 1,
      transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
    }}
    className="min-h-[88vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
        defaultValue="experince"
        className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>




          <div className="min-h-[70vh] w-full">




            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
               
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) =>{
                      return (
                        <li key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">
                            {item.duration}
                            </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                            </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  </ScrollArea>           
              </div>
            </TabsContent>



            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
               
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) =>{
                      return (
                        <li key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">
                            {item.duration}
                            </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                            </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  </ScrollArea>           
              </div>
            </TabsContent>




            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>

                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                  })}
                </ul>
              </div>
            </TabsContent>




            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValu}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>



          </div>



        </Tabs>
      </div>
    </motion.div>
  )
}

export default resume


