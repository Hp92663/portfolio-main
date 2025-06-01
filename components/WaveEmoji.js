import React from 'react';
import { motion } from 'framer-motion';

function WaveEmoji() {
  return (
    <motion.span
      className="inline-block text-4xl md:text-5xl lg:text-6xl"
      animate={{ 
        rotate: [0, 14, -8, 14, -4, 10, 0] 
      }}
      transition={{ 
        duration: 1.5, 
        ease: "easeInOut",
        delay: 1.2,
        repeat: Infinity,
        repeatDelay: 3
      }}
      style={{ transformOrigin: '70% 70%' }}
    >
      👋
    </motion.span>
  );
}

export default WaveEmoji;
