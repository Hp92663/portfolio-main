"use client";

import Image from 'next/image';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import StatCard from "@/components/StatCard";
import Experience from './edu_exp';

import about_image from "../app/assets/img/about_section_image.png";
import AnimatedButton from './AnimatedButton';


const AboutSection = () => {

  return (
    <section id="about" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-custom-gradient from-teal-500 to-blue-600">About Me</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative h-[400px] rounded-lg overflow-hidden p-1">
              <div className="absolute inset-0 flex items-center justify-center rounded-lg overflow-hidden">
                {/* <Image
                  src={about_image}
                  alt="Profile with Stats"
                  className="object-contain w-full h-full"
                /> */}
              </div>

              {/* Stat overlays positioned absolutely - smaller on mobile */}
              <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-10 max-w-[100px] sm:max-w-none">
                <StatCard
                  end={2}
                  suffix="+"
                  label="Years of Success"
                  delay={0.3}
                  bgColor="bg-white/90 backdrop-blur-sm"
                  numberColor="text-green-500"
                />
              </div>
              <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 z-10 max-w-[100px] sm:max-w-none">
                <StatCard
                  end={9}
                  suffix="+"
                  label="Total Projects"
                  delay={0.6}
                  bgColor="bg-white/90 backdrop-blur-sm"
                  numberColor="text-purple-500"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-poppins text-1xl font-bold text-gray-900 mb-6">
              I'm a Full Stack Developer
            </h3>
            <h2 className="text-3xl font-bold mb-4">I Build Scalable and Impactful Web Applications</h2>
            <p className="text-gray-600 mb-6">
              With over two years of hands-on experience, I specialize in Angular, Node.js, NestJS, AWS, and WordPress, delivering end-to-end solutions that are efficient, secure, and user-centric. I bring a strategic mindset to full stack development, translating complex business needs into robust and scalable software.
            </p>
            <p className="text-gray-600 mb-8">
              I have successfully contributed to the development of diverse platforms across e-commerce, HRMS, accounting, and other enterprise systems. From architecture and backend services to responsive frontends and cloud deployment, I manage the entire development lifecycle, ensuring high-quality solutions that create real value for businesses and their users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">

              <AnimatedButton
                title={<a href="https://www.upwork.com/freelancers/~013a987adc88e1a6ec" target="_blank" rel="noopener noreferrer">Hire Me</a>}
                svg=''
              />
            </div>
          </motion.div>
        </div>

        {/* Education and Experience Section */}
        <Experience />

      </div>
    </section>
  );
};

export default AboutSection;
