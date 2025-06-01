"use client";

import { motion } from "framer-motion";
import Image from 'next/image';

import python from "../app/assets/skills/python.svg"
import openai from "../app/assets/skills/openai.svg"
import opencv from "../app/assets/skills/opencv.svg"
import fastapi from "../app/assets/skills/fastapi.svg"
import git from "../app/assets/skills/git.svg"
import huggingface from "../app/assets/skills/huggingface.svg"
import keras from "../app/assets/skills/Keras.svg"
import llamaindex from "../app/assets/skills/llamaindex.jpeg"
import mongodb from "../app/assets/skills/mongodb.svg"
import mysql from "../app/assets/skills/mysql.svg"
import postgresql from "../app/assets/skills/openai.svg"
import postman from "../app/assets/skills/postman.svg"
import sklearn from "../app/assets/skills/scikit_learn.svg"
import tensorflow from "../app/assets/skills/tensorflow.svg"

// const skills = [
//   { name: "JavaScript", icon: "⚡" },
//   { name: "TypeScript", icon: "📘" },
//   { name: "React", icon: "⚛️" },
//   { name: "Next.js", icon: "▲" },
//   { name: "Node.js", icon: "🟢" },
//   { name: "Express", icon: "🚂" },
//   { name: "MongoDB", icon: "🍃" },
//   { name: "MySQL", icon: "🐬" },
//   { name: "GraphQL", icon: "📊" },
//   { name: "TailwindCSS", icon: "🎨" },
//   { name: "Flutter", icon: "📱" },
//   { name: "Firebase", icon: "🔥" },
// ];
const skills = [
  { name: 'Python', icon: python},
  { name: 'OpenAI', icon: openai },
  { name: 'OpenCV', icon: opencv },
  { name: 'FastAPI', icon:fastapi },
  { name: 'Git', icon: git },
  { name: 'Hugging-Face', icon: huggingface },
  { name: 'Keras', icon: keras },
  { name: 'Llama-Index', icon: llamaindex },
  { name: 'PostgreSQL', icon: postgresql },
  { name: 'MongoDB', icon: mongodb },
  { name: 'MySQL', icon:mysql },
  { name: 'Postman', icon: postman},
  { name: 'Scikit-Learn', icon: sklearn },
  { name: 'TensorFlow', icon: tensorflow },
];


export function SkillsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-poppins text-5xl font-bold bg-clip-text text-transparent bg-custom-gradient mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit that enables me to build powerful and scalable
            solutions for various technical challenges.
          </p>
        </motion.div>

            {/* <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <Image src={skill?.icon} height={64} width={64} alt='skills' />
                  <h3 className="font-medium text-gray-900">{skill.name}</h3>
                </motion.div>
              ))}
            </div> */}
            
            {/* <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center p-4"
              >
                <div className="w-12 h-12 mb-2 relative">
                  <Image
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    layout="fill"
                    objectFit="contain"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <span className="text-sm text-gray-600 text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div> */}

        
          {/* <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col items-center justify-center p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 mb-2 relative">
                <Image
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  layout="fill"
                  objectFit="contain"
                  className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                />
              </div>
              <span className="text-sm text-gray-600 text-center transition-all duration-300 group-hover:text-gray-900 group-hover:font-medium relative">
                {skill.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full" />
              </span>
            </motion.div>
          ))}
        </div> */}


        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative z-0 transition-all duration-300 ease-in-out transform group-hover:-translate-y-1">
                {/* Semi-transparent background blur effect */}
                <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content container */}
                <div className="relative flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300">
                  {/* Icon with hover effect */}
                  <div className="w-12 h-12 relative mb-2 transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={skill.icon}
                      alt={`${skill.name} icon`}
                      layout="fill"
                      objectFit="contain"
                      className="transition-all duration-300"
                    />
                  </div>
                  
                  {/* Text with fade-in effect */}
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300 relative">
                    {skill.name}
                    {/* Animated underline */}
                    {/* <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gray-900/50 group-hover:w-full transition-all duration-300 ease-out" /> */}
                  </span>
                </div>

                {/* Subtle shadow effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_8px_16px_-6px_rgba(0,0,0,0.1)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}