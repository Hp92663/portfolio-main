// "use client";

// import { motion } from "framer-motion";
// import { LucideIcon } from "lucide-react";



// export function ContactInfo({ items }) {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
//       {items.map((item, index) => (
//         <motion.div
//           key={item.title}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: index * 0.2 }}
//           className="bg-white rounded-lg shadow-md p-6 text-center"
//         >
//           <div className="mb-4">
//             <item.icon className="h-8 w-8 mx-auto text-[#FF5722]" />
//           </div>
//           <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
//           <p className="text-gray-600 break-words">
//             {item.details}
//           </p>
//         </motion.div>
//       ))}
//     </div>
//   );
// }
