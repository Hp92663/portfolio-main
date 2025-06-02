// 'use client';

// import Link from 'next/link';
// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import { useIsMobile } from '@/hooks/use-mobile';
// import Image from 'next/image';

// import logo from '../app/assets/img/logo_name.svg';

// const navigationItems = [
//   { label: 'Home', href: '/' },
//   { label: 'Projects', href: '/projects' },
//   { label: 'Contact', href: '/contact' },
// ];

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const isMobile = useIsMobile();

//   useEffect(() => {
//     if (!isMobile && isMenuOpen) {
//       setIsMenuOpen(false);
//     }
//   }, [isMobile, isMenuOpen]);

//   const handleLinkClick = () => {
//     if (isMobile) {
//       setIsMenuOpen(false);
//     }
//   };

//   const renderLinks = (className = '') =>
//     navigationItems.map(({ label, href }) => (
//       <li key={href}>
//         <Link
//           href={href}
//           onClick={handleLinkClick}
//           className={`text-gray-600 hover:text-gray-900 transition-colors ${className}`}
//         >
//           {label}
//         </Link>
//       </li>
//     ));

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
//       <div className="container mx-auto px-4 h-16 flex items-center justify-between">
//         <Link href="/" className="font-poppins text-2xl font-bold text-gray-900">
//           <Image src={logo} height={isMobile ? 80 : 96} width={isMobile ? 80 : 96} alt="logo" />
//         </Link>

//         {!isMobile ? (
//           <ul className="hidden md:flex items-center gap-6">
//             {renderLinks()}
//           </ul>
//         ) : (
//           <button
//             onClick={() => setIsMenuOpen(true)}
//             className="focus:outline-none"
//             aria-label="Open menu"
//           >
//             <Menu className="w-6 h-6 text-gray-800" />
//           </button>
//         )}
//       </div>

//       {/* Mobile Menu */}
//       {/* {isMobile && isMenuOpen && (
//         <>
//           <div
//             className="fixed inset-0 bg-white/30 backdrop-blur-sm z-40"
//             onClick={() => setIsMenuOpen(false)}
//           />

//           <div className="fixed top-0 right-0 h-full w-full bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out transform translate-x-0 rounded-l-xl">
//             <div className="flex justify-between items-center p-4 border-b">
//               <Link href="/" className="font-poppins text-2xl font-bold text-gray-900">
//                 <Image src={logo} height={80} width={80} alt="logo" />
//               </Link>
//               <button
//                 onClick={() => setIsMenuOpen(false)}
//                 className="focus:outline-none"
//                 aria-label="Close menu"
//               >
//                 <X className="w-6 h-6 text-gray-800" />
//               </button>
//             </div>

//             <ul className="flex flex-col p-4 space-y-4 bg-white shadow-lg items-center gap-4 rounded-b-xl">
//               {navigationItems.map(({ label, href }) => (
//                 <li key={href}>
//                   <Link
//                     href={href}
//                     onClick={handleLinkClick}
//                     className="text-base font-medium text-gray-800 hover:text-blue-600 transition-colors"
//                   >
//                     {label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </>
//       )} */}
//       {/* Mobile Menu with Animation (Top to Bottom) */}
//       {isMobile && (
//         <>
//           {/* Overlay */}
//           {isMenuOpen && (
//             <div
//               className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
//               onClick={() => setIsMenuOpen(false)}
//             />
//           )}

//           {/* Animated Menu */}
//           <div
//             className={`fixed top-0 left-0 w-full z-50 transform transition-all duration-300 ease-in-out ${
//               isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
//             }`}
//           >
//             {/* Entire Sliding Menu */}
//             <div className="bg-white shadow-md rounded-b-xl">
//               {/* Logo and Close Button */}
//               <div className="flex justify-between items-center p-4 border-b">
//                 <Link href="/" className="font-poppins text-2xl font-bold text-gray-900">
//                   <Image src={logo} height={80} width={80} alt="logo" />
//                 </Link>
//                 <button
//                   onClick={() => setIsMenuOpen(false)}
//                   className="focus:outline-none"
//                   aria-label="Close menu"
//                 >
//                   <X className="w-6 h-6 text-gray-800" />
//                 </button>
//               </div>

//               {/* Navigation Links */}
//               <ul className="flex flex-col p-4 space-y-4 items-center gap-4">
//                 {navigationItems.map(({ label, href }) => (
//                   <li key={href}>
//                     <Link
//                       href={href}
//                       onClick={handleLinkClick}
//                       className="text-base font-medium text-gray-800 hover:text-blue-600 transition-colors"
//                     >
//                       {label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </>
//       )}

//     </nav>
//   );
// };

// export default Navbar;


'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import logo from '../app/assets/img/logo_name.svg';

const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMobile, isMenuOpen]);

  const handleLinkClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const renderLinks = (className = '') =>
    navigationItems.map(({ label, href }) => (
      <li key={href}>
        <Link
          href={href}
          onClick={handleLinkClick}
          className={`text-gray-600 hover:text-gray-900 transition-colors ${className}`}
        >
          {label}
        </Link>
      </li>
    ));

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-poppins text-2xl font-bold text-gray-900">
          {/* <Image src={logo} height={isMobile ? 80 : 96} width={isMobile ? 80 : 96} alt="logo" /> */}
          Hiren
        </Link>

        {!isMobile ? (
          <ul className="hidden md:flex items-center gap-6">{renderLinks()}</ul>
        ) : (
          <button
            onClick={() => setIsMenuOpen(true)}
            className="focus:outline-none"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-gray-800" />
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Sliding Menu */}
            <motion.div
              className="fixed top-0 left-0 w-full z-50"
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="bg-white shadow-md rounded-b-xl overflow-hidden">
                <div className="flex justify-between items-center p-4 border-b">
                  <Link href="/" className="font-poppins text-2xl font-bold text-gray-900">
                    <Image src={logo} height={80} width={80} alt="logo" />
                  </Link>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="focus:outline-none"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6 text-gray-800" />
                  </button>
                </div>

                <ul className="flex flex-col p-4 space-y-4 items-center gap-4">
                  {navigationItems.map(({ label, href }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={handleLinkClick}
                        className="text-base font-medium text-gray-800 hover:text-blue-600 transition-colors"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
