"use client";

import ChromeIcon from "@/assets/icons/chrome.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import GithubIcon from "@/assets/icons/github.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import ReactIcon from "@/assets/icons/react.svg";
import JavascripptIcon from "@/assets/icons/square-js.svg";
import BookImage from "@/assets/images/book-cover.png";
import MapImage from "@/assets/images/map.png";
import SmileMemoji from "@/assets/images/memoji-smile.png";
import Card from "@/components/Card";
import CardHeader from "@/components/CardHeader";
import SectionHeader from "@/components/SectionHeader";
import ToolBoxItem from "@/components/ToolBoxItems";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const ToolBoxItems = [
  {
    title: "JavaScript",
    iconType: JavascripptIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Next.js",
    iconType: ReactIcon,
  },
  {
    title: "Tailwind CSS",
    iconType: CSSIcon,
  },

  {
    title: "TypeScript",
    iconType: JavascripptIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "Git",
    iconType: GithubIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  // {
  //   title: "Framer Motion",
  //   iconType: "",
  // },
  // {
  //   title: "Figma",
  //   iconType: "",
  // },

  // {
  //   title: "VS Code",
  //   iconType: "",
  // },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "50%",
    top: "5%",
  },
  {
    title: "Drone Flying",
    emoji: "🚁",
    left: "5%",
    top: "35%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "45%",
    top: "40%",
  },
  {
    title: "Fitness",
    emoji: "🏋️",
    left: "70%",
    top: "45%",
  },
  {
    title: "Podcasts",
    emoji: "🎙️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Cooking",
    emoji: "🍳",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = React.useRef(null);
  return (
    <div className="py-20 md:py-28" id="about">
      <div className="container">
        <SectionHeader
          title="A glimpse Into My World"
          eyebrow="About Me"
          description="Learn more about who I am, what I do, and what inspires me as a frontend developer."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-1">
              <Card className="h-[320px]">
                <CardHeader
                  title="My Reads"
                  description="Explore the books shaping my perspectives."
                />
                <div className="w-40 mx-auto mt-2 md:mt-0">
                  <Image src={BookImage.src} alt="Book Cover" height={ 130} width={130}/>
                </div>
              </Card>
            </div>
            <div className="md:col-span-3 lg:col-span-2">
              <Card className="h-[320px] p-0">
                <CardHeader
                  title="My Toolbox"
                  description="Explore the technologies and tools I use to craft exceptional digital experiences."
                  className=""
                />
                <ToolBoxItem
                  items={ToolBoxItems}
                  className=""
                  itemsWrapperClassName="animate-move-left [animation-duration:30s]"
                />
                <ToolBoxItem
                  items={ToolBoxItems}
                  className="mt-6"
                  itemsWrapperClassName="animate-move-right [animation-duration:20s]"
                />
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8 ">
            <div className="md:col-span-3 lg:col-span-2">
              <Card className="h-[320px] flex flex-col">
                <CardHeader
                  title="Beyond The Code"
                  description="Explore my interests and hobbies beyond the digital realm."
                  className=""
                />
                <div className="relative flex-1" ref={constraintRef}>
                  {hobbies.map((hobby) => (
                    <motion.div
                      key={hobby.title}
                      className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                      style={{
                        left: hobby.left,
                        top: hobby.top,
                      }}
                      drag
                      dragConstraints={constraintRef}
                    >
                      <span className="font-medium text-gray-950">
                        {hobby.title}
                      </span>
                      <span>{hobby.emoji}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </div>
            <div className="md:col-span-2 lg:col-span-1">
              <Card className="h-[320px] relative">
                <Image
                  src={MapImage}
                  alt="Map"
                  className="h-full w-full object-cover object-left-top"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                  <Image
                    src={SmileMemoji}
                    alt="Smile Memoji"
                    className="size-20"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
