import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

function AnimatedButton({title,svg}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative"
    >
      <Button 
        className="text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
        style={{ background: 'linear-gradient(90deg, #121212 0%, #228A99 100%)' }}
      >
        {/* Animated Background Gradient Layer */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          initial={{ backgroundPosition: '0% 50%' }}
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{
            background: 'linear-gradient(90deg, #121212, #228A99, #121212)',
            backgroundSize: '200% 200%',
            borderRadius: 'inherit',
            zIndex: 1,
          }}
        />

        {/* Button Content */}
        <div className="relative z-10 flex items-center gap-2">
          <motion.div
            animate={{ 
              y: [0, -2, 0] 
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2
            }}
          >
            {/* <Download className="h-4 w-4" /> */}
            {svg}
          </motion.div>
          {title}
        </div>

        {/* Shimmer Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
          initial={{ x: '-100%' }}
          animate={{ x: '200%' }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut"
          }}
        />
      </Button>
    </motion.div>
  );
}

export default AnimatedButton;
