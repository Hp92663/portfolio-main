// import Link from "next/link";
// import { Github, Linkedin, Twitter } from "lucide-react";
// import linkedin_logo from "../app/assets/icons/linkedin.svg"

// export function Footer() {
//   // const socialLinks = [
//   //   { icon: Github, href: "https://github.com", label: "GitHub" },
//   //   { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
//   //   { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
//   // ];
//   const navLinks = [
//     { href: '/', label: 'Home' },
//     { href: '/projects', label: 'Projects' },
//     { href: '/contact', label: 'Contact Me' },
//   ];

//   const socialLinks = [
//     { 
//       icon: <Linkedin className="w-5 h-5" />,
//       href: "https://www.linkedin.com/in/akshaysatasiya/",
//       label: 'LinkedIn'
//     },
//     { 
//       icon: <Github className="w-5 h-5" />,
//       href: "https://github.com/AkshaySatasiya",
//       label: 'GitHub'
//     },
//     { 
//       icon: <Twitter className="w-5 h-5" />,
//       href: 'https://twitter.com',
//       label: 'Twitter'
//     },

//   ];


//   return (
// <footer className="py-8">
//       {/* Logo */}
//       <div className="text-center mb-6">
//         <Link href="/" className="text-2xl font-semibold">
//           Akshay Satasiya
//         </Link>
//       </div>

//       {/* Navigation Links */}
//       <nav className="flex justify-center space-x-8 mb-6">
//         {navLinks.map((link) => (
//           <Link
//             key={link.label}
//             href={link.href}
//             className={`text-gray-600 hover:text-gray-900 transition-colors
//               ${link.label === 'Home' ? 'text-blue-500' : ''}`}
//           >
//             {link.label}
//           </Link>
//         ))}
//       </nav>

//       {/* Social Links */}
//       <div className="flex justify-center space-x-6 mb-6">
//         {socialLinks.map((social) => (
//           <a
//             key={social.label}
//             href={social.href}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-500 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-full"
//           >
//             {social.icon}
//             <span className="sr-only">{social.label}</span>
//           </a>
//         ))}
//       </div>

//       {/* Copyright */}
//       <div className="text-center text-gray-500 text-sm">
//         <p>©akshaysatasiya {new Date().getFullYear()}, All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }

'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from 'framer-motion';

import linkedin from '../app/assets/icons/linkedin_c.svg';
import github from '../app/assets/icons/github_c.svg';
import upwork from '../app/assets/icons/upwork.svg';

export function Footer() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact Me' },
  ];

  const socialLinks = [
    {
      iconSrc: linkedin,
      href: "https://www.linkedin.com/in/hirenkhut/",
      label: 'LinkedIn'
    },
    {
      iconSrc: github,
      href: "https://github.com/hirenkhut",
      label: 'GitHub'
    },
    {
      iconSrc: upwork,
      href: "https://www.upwork.com/freelancers/~013a987adc88e1a6ec",
      label: 'Upwork'
    },
  ];

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
    <footer className="py-8">
      {/* Logo */}
      <div className="text-center mb-6">
        <Link href="/" className="text-2xl font-semibold">
          Hiren Khut
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex justify-center space-x-8 mb-6">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`text-gray-600 hover:text-gray-900 transition-colors
              ${link.label === 'Home' ? 'text-blue-500' : ''}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Social Links */}
      <div className="flex justify-center space-x-6 mb-6">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition-colors p-2 hover:bg-gray-200 rounded-full"
          >
            <motion.div
              variants={iconHoverAnimation}
              whileHover="hover"
              className="flex items-center justify-center"
            >
              <Image
                src={social.iconSrc}
                alt={social.label}
                width={40}
                height={40}
                className="w-6 h-6"
              />
            </motion.div>

            <span className="sr-only">{social.label}</span>
          </a>
        ))}
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm">
        <p>©hirenkhut {new Date().getFullYear()}, All rights reserved.</p>
      </div>
    </footer>
  );
}



{/* <motion.a
                  href="https://github.com/AkshaySatasiya"
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
                </motion.a> */}