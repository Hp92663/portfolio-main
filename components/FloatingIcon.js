import React from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";

function FloatingIcon({ 
  icon, 
  label, 
  className = '', 
  delay = 0 
}) {
  return (
    <motion.div
      className={`group cursor-pointer ${className}`}
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        y: 0 
      }}
      transition={{ 
        duration: 0.6, 
        delay: delay,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.2, 
        y: -8,
        transition: { duration: 0.2 } 
      }}
    >
      <motion.div
        className="relative"
        animate={{ 
          y: [0, -5, 0],
          rotate: [0, 2, -2, 0]
        }}
        transition={{ 
          duration: 3 + delay, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        {/* Icon Container */}
        <div className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
          {/* <span className="text-2xl">{icon}</span> */}
          <Image
                  src={icon}
                  width={36}
                  height={36}
                  className="object-contain"
                />
        </div>
        
        {/* Glowing Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        {/* Tooltip */}
        <motion.div
          className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
          initial={{ y: 5 }}
          whileHover={{ y: 0 }}
        >
          {label}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default FloatingIcon;
