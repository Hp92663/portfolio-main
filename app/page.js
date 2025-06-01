// 'use client';

// import Link from "next/link";

// import { Button } from "@/components/ui/button";
// import HeroSection from "@/components/hero-section";
// import AboutSection from "@/components/about-section";
// import { SkillsSection } from "@/components/skills-section";
// import { ProjectsSection } from "@/components/project-section"
// import { motion } from "framer-motion";
// import { SkillsScroller } from "@/components/skillScroller";
// import ProjectsGrid from "@/components/projects-grid";

// export default function Home() {
//   return (
//     <div>
//       <HeroSection />
//       <AboutSection />
//       {/* <SkillsSection /> */}
//       {/* <ProjectsSection /> */}
//       < SkillsScroller />
//       <div className="flex flex-col py-16">
//         <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5 }}
//                 className="text-center mb-12"
//             >
//             <h2 className="font-poppins text-5xl font-bold bg-clip-text text-transparent bg-custom-gradient mb-4">
//                 Portfolio
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//                 Showcasing My Best Projects
//             </p>
//         </motion.div>
//         <ProjectsGrid shoeCards={3} />
//         <div className="flex justify-center">
//           <Link href="/projects">
//             <button className="inline-flex items-center justify-center px-6 py-3 rounded-[10px] bg-custom-gradient text-white hover:bg-gray-800 transition-colors duration-300">
//               View All
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }


'use client';

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/project-section";
import { motion } from "framer-motion";
import { SkillsScroller } from "@/components/skillScroller";
import ProjectsGrid from "@/components/projects-grid";
import AnimatedButton from "@/components/AnimatedButton";

export default function Home() {
  const checkAPIHealth = async () => {
    try {
      const response = await fetch('https://portfoliochatbot-v8ey.onrender.com/health', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      console.log("Health check response:", data);
    } catch (error) {
      console.error("API health check failed:", error);
    }
  };

  // API call when the Home page loads
  useEffect(() => {
    checkAPIHealth();
  }, []); // Runs once on component mount

  return (
    <div>
      <HeroSection />
      <AboutSection />
      {/* <SkillsSection /> */}
      {/* <ProjectsSection /> */}
      <SkillsScroller />
      <div className="flex flex-col py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-poppins text-5xl font-bold bg-clip-text text-transparent bg-custom-gradient mb-4">
            Portfolio
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Showcasing My Best Projects
          </p>
        </motion.div>
        <ProjectsGrid shoeCards={3} />
        <div className="flex justify-center">
          {/* <Link href="/projects">
            <button className="inline-flex items-center justify-center px-6 py-3 rounded-[10px] bg-custom-gradient text-white hover:bg-gray-800 transition-colors duration-300">
              View All
            </button>
          </Link> */}
            <AnimatedButton
            title ={ <Link href="/projects"> View All</Link>}
            svg=''
           />
        </div>
      </div>
    </div>
  );
}
