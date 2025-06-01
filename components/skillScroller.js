import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";


// Skill icons
import aws from "../app/assets/skills/aws svg.svg";
import angular from "../app/assets/skills/angular.svg";
import react from "../app/assets/skills/react.svg";
import nodejs from "../app/assets/skills/node js.svg";
import git from "../app/assets/skills/git.svg";
import JavaScript from "../app/assets/skills/js.svg";
import TypeScript from "../app/assets/skills/ts.svg";
import mongodb from "../app/assets/skills/mongodb.svg";
import mysql from "../app/assets/skills/mysql.svg";
import postgresql from "../app/assets/skills/postgresql.svg"; // ✅ fixed
import postman from "../app/assets/skills/postman.svg";

const skills = [
  { id: 1, name: "AWS", icon: aws },
  { id: 2, name: "Angular", icon: angular },
  { id: 3, name: "React", icon: react },
  { id: 4, name: "Node JS", icon: nodejs },
  { id: 5, name: "Git", icon: git },
  { id: 6, name: "Java Script", icon: TypeScript },
  { id: 7, name: "Type Script", icon: JavaScript },
  // { id: 8, name: "Llama-Index", icon: llamaindex },
  { id: 9, name: "PostgreSQL", icon: postgresql },
  { id: 10, name: "MongoDB", icon: mongodb },
  { id: 11, name: "MySQL", icon: mysql },
  { id: 12, name: "Postman", icon: postman },
  // { id: 13, name: "Scikit-Learn", icon: sklearn },
  // { id: 14, name: "TensorFlow", icon: tensorflow },
  // supabase
  // socketio
  // aws
  // react
  // nextjs
  // tailwindcss  
  // prime ng
  // angular
  // android
  // wordpress

];


const duplicatedSkills = [...skills, ...skills];


export const SkillsScroller = () => {
  const primaryRef = useRef(null);
  const secondaryRef = useRef(null);

  useEffect(() => {
    const primary = primaryRef.current;
    const secondary = secondaryRef.current;

    if (!primary || !secondary) return;

    const speed = 1;
    let animationId;
    let position = 0;
    let isPaused = false;

    const animate = () => {
      if (!isPaused) {
        position += speed;

        if (position >= primary.offsetWidth) {
          position = 0;
        }

        primary.style.transform = `translateX(-${position}px)`;
        secondary.style.transform = `translateX(-${position}px)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    const pause = () => {
      isPaused = true;
    };

    const resume = () => {
      isPaused = false;
    };

    const container = primary.parentElement;
    if (container) {
      container.addEventListener("mouseenter", pause);
      container.addEventListener("mouseleave", resume);
    }

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      if (container) {
        container.removeEventListener("mouseenter", pause);
        container.removeEventListener("mouseleave", resume);
      }
    };
  }, []);

  return (
    <div className="w-full py-16">
      {/* Header Section */}
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <h2 className="font-poppins text-5xl font-bold bg-clip-text text-transparent bg-custom-gradient mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            A comprehensive toolkit that enables me to build powerful and scalable solutions for various technical challenges.
          </p>
        </div>
      </div>

      {/* Scrolling Container */}
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden">
          {/* Left blur gradient */}
          <div className="absolute left-0 top-0 w-16 sm:w-20 h-full z-10 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 pointer-events-none"></div>

          {/* Scrolling content */}
          <div className="flex">
            <div
              ref={primaryRef}
              className="flex gap-4 sm:gap-6 md:gap-8 items-center flex-nowrap"
            >
              {skills.map((skill) => (
                <SkillItem key={skill.id} skill={skill} />
              ))}
            </div>

            <div
              ref={secondaryRef}
              className="flex gap-4 sm:gap-6 md:gap-8 items-center flex-nowrap ml-4 sm:ml-6 md:ml-8"
            >
              {skills.map((skill) => (
                <SkillItem key={`dup-${skill.id}`} skill={skill} />
              ))}
            </div>
          </div>

          {/* Right blur gradient */}
          <div className="absolute right-0 top-0 w-16 sm:w-20 h-full z-10 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

const SkillItem = ({ skill }) => (
  <div className="flex-shrink-0 flex flex-col items-center justify-center">
    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-md border border-gray-100 dark:border-gray-700 p-2 sm:p-3 hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:border-blue-200 dark:hover:border-blue-600">
      <Image
        src={skill.icon}
        alt={skill.name}
        width={48}
        height={48}
        className="object-contain"
      />
    </div>
    <span className="mt-2 text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300 text-center max-w-[80px] sm:max-w-[100px] truncate">
      {skill.name}
    </span>
  </div>
);
