"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt  } from "react-icons/fa";


const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone", 
    description: "+88 017 4343 983",
  },

  {
    icon: <FaEnvelope />,
    title: "Email", 
    description: "mahfujalamrony07@gmail.com",
  },


  {
    icon: <FaMapMarkedAlt />,
    title: "Address", 
    description: "Kishoregonj, Dhaka, Bangladesh",
  },
];

import { motion } from "framer-motion";

const contact = () => {
  return (
    <motion.section 
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: 1,
      transition: {delay:2.4, duration: 0.4, ease: "easeIn"}
    }}
    className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>  
              <p className="text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat debitis vitae delectus consectetur rerum ex facilis excepturi nulla! Veritatis, nulla laborum facere aliquam suscipit est cum corporis autem beatae doloremque!</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <Input type="firstname" placeholder='FirstName'/>
                <Input type="lastname" placeholder='LastName'/>
                <Input type="email" placeholder='Email Address'/>
                <Input type="phone" placeholder='Phone Number'/>
              </div>

              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select a service' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a servicess</SelectLabel>
                    <SelectItem>Web Development</SelectItem>
                    <SelectItem>UI/UX Designer</SelectItem>
                    <SelectItem>Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            info
          </div>

        </div>

      </div>
    </motion.section>
  )
}

export default contact


// 2 hour 50 minite