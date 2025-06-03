"use client";

import React from 'react';
import { motion } from 'framer-motion';
import WaveEmoji from './WaveEmoji';
import FloatingIcon from './FloatingIcon';
import AnimatedButton from './AnimatedButton';
import Image from "next/image";
import TypeWriter from './WordAnimation';

import ai_icon from "../app/assets/icons/ai.svg";
import python from "../app/assets/icons/python.svg";
import openai from "../app/assets/icons/openai.svg";
import automation from "../app/assets/icons/automation_1.png";
import huggingface from "../app/assets/icons/huggingface.svg";
import data_analysis from "../app/assets/icons/data-analytics.png";

import avatar from "../app/assets/img/char_3d.png"
import Github from "../app/assets/icons/github.svg"
import Linkedin from "../app/assets/icons/linkedin.svg"
import { Download } from 'lucide-react';


function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const typewriterVariants = {
    hidden: { width: 0 },
    visible: {
      width: '100%',
      transition: { duration: 1.2, ease: 'easeInOut', delay: 0.5 }
    }
  };
  const iconHoverAnimation = {
    hover: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut'
      }
    }
  };


  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-100 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-100 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>

      <motion.div
        className="container mx-auto px-4 py-16 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div variants={textVariants} className="space-y-6">
            <motion.p className="text-lg text-blacl-600 mb-2" variants={textVariants}>
              Hi, I'm
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 flex items-center gap-2"
              variants={textVariants}
            >
              <span className="bg-custom-gradient from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Hiren Khut
              </span>
              <WaveEmoji />
            </motion.h1>

            <motion.div className="relative overflow-hidden" variants={typewriterVariants}>
              <TypeWriter
                words={[
                  "Web Developer",
                  "Angular Developer",
                  "Nest js Developer",
                  "Node js Developer",
                  "AWS",
                ]}
                className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-custom-gradient"
                typeSpeed={100}
                deleteSpeed={50}
                delayBetweenWords={1500}
              />
            </motion.div>

            <motion.p
              className="text-black-600 mb-8 leading-relaxed"
              variants={textVariants}
            >
              I am a Full Stack Developer with over 2 years of experience specializing in Angular, Node.js, NestJS, AWS, and WordPress. I have a strong track record of building robust and scalable web applications across various domains including e-commerce, HRMS, accounting, and other enterprise software solutions. I focus on delivering efficient, secure, and user-centric applications that streamline business operations and drive digital innovation.
            </motion.p>

            {/* Buttons and Social Links */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
              variants={textVariants}
            >
              <AnimatedButton
                svg={<Download className="h-4 w-4" />}
                title={"Download CV"}
              />

              <div className="flex gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/hiren-khut"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    variants={iconHoverAnimation}
                    whileHover="hover"
                    className="flex items-center justify-center "
                  >
                    <Image src={Linkedin} alt="LinkedIn" width={20} height={20} />
                  </motion.div>
                </motion.a>

                <motion.a
                  href="https://github.com/Hp92663"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    variants={iconHoverAnimation}
                    whileHover="hover"
                    className="flex items-center justify-center"
                  >
                    <Image src={Github} alt="Github" width={20} height={20} />
                  </motion.div>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Image and Icons Section */}
          <motion.div
            className="relative flex items-center justify-center"
            variants={imageVariants}
          >
            {/* Character Illustration */}
            <motion.div
              className="relative z-10"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 1, -1, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <div className="relative w-[361px] md:w-[423px] h-[500px] md:h-[602px] rounded-full flex items-center justify-center shadow-2xl border border-[#228A99]  p-[10px]  hero-avatar">
                <div className="w-full h-full flex items-center justify-center bg-transparent rounded-full from-teal-400 to-blue-500  bg-custom-gradient">
                  <Image
                    src={avatar}
                    alt="Hiren Khut - Software Developer"
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
              {/* Floating Technology Icons */}
              <motion.div variants={iconVariants} className="absolute inset-0">
                <FloatingIcon icon={ai_icon} label="Artificial Intelligence" className="absolute top-8" delay={0.2} />
                <FloatingIcon icon={python} label="Python" className="absolute top-16 right-[-1px]" delay={0.4} />
                <FloatingIcon icon={openai} label="OpenAI" className="absolute bottom-8 left-4" delay={0.6} />
                <FloatingIcon icon={huggingface} label="Hugging Face" className="absolute bottom-2 right-16" delay={0.8} />
                <FloatingIcon icon={data_analysis} label="Data Analysis" className="absolute top-1/2 left-[-30px]" delay={1.0} />
                <FloatingIcon icon={automation} label="Automation" className="absolute top-1/2 right-[-32px]" delay={1.2} />
              </motion.div>
            </motion.div>

          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
