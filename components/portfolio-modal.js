'use client';

// import { useState, useEffect } from "react";
// import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { X, Github } from "lucide-react";
// import { cn } from "@/lib/utils";

// const PortfolioModal = ({
//   project,
//   isOpen,
//   onClose,
// }) => {
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     setOpen(isOpen);
//   }, [isOpen]);

//   const handleClose = () => {
//     setOpen(false);
//     onClose();
//   };

//   if (!project) return null;

//   return (
//     <Dialog
//       open={open}
//       onOpenChange={handleClose}
//       // className="!max-w-[90vw] !max-h-[90vh] !overflow-y-auto"
//     >
//       <DialogContent className="sm:max-w-5xl p-0 overflow-hidden bg-white">
//         <div className="relative w-full">
//           <button
//             onClick={handleClose}
//             className="absolute right-4 top-4 rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
//           >
//             <X className="h-5 w-5" />
//           </button>
          
//           <div className="p-6 sm:p-10">
//             <DialogTitle className="text-3xl font-bold text-zinc-800 mb-2">
//               {project.title}
//             </DialogTitle>
//             <p className="text-zinc-500 mb-6">{project.category}</p>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div className="space-y-6">
//                 <div>
//                   <h3 className="text-xl font-semibold text-zinc-800 mb-4">Our Strategies</h3>
//                   <p className="text-zinc-700">{project.description}</p>
//                 </div>
                
//                 <div>
//                   <h3 className="text-xl font-semibold text-zinc-800 mb-4">Techstack</h3>
//                   <div className="flex flex-wrap gap-2">
//                     {project.techStack.map((tech) => (
//                       <Badge 
//                         key={tech.name} 
//                         className={cn(
//                           "rounded-md py-1.5 px-2.5 bg-blue-100 text-blue-700 hover:bg-blue-200",
//                           tech.color
//                         )}
//                       >
//                         {tech.name}
//                       </Badge>
//                     ))}
//                   </div>
//                 </div>
                
//                 {project.githubUrl && (
//                   <Button 
//                     asChild
//                     className="bg-zinc-800 hover:bg-zinc-900 text-white flex items-center gap-2 py-2 px-4 rounded-md"
//                   >
//                     <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                       <Github size={16} />
//                       <span>GitHub</span>
//                     </a>
//                   </Button>
//                 )}
//               </div>
              
//               <div className="space-y-4">
//                 {project.images.length > 0 && (
//                   <div className="rounded-lg overflow-hidden border border-gray-200">
//                     <img 
//                       src={project.images[0]} 
//                       alt={`${project.title} screenshot`} 
//                       className="w-full h-auto"
//                     />
//                   </div>
//                 )}
                
//                 {project.images.length > 1 && (
//                   <div className="grid grid-cols-2 gap-2">
//                     {project.images.slice(1, 3).map((img, index) => (
//                       <div key={index} className="rounded-lg overflow-hidden border border-gray-200">
//                         <img 
//                           src={img} 
//                           alt={`${project.title} screenshot ${index + 2}`} 
//                           className="w-full h-auto"
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default PortfolioModal;



import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from 'next/image';


const PortfolioModal = ({ project, isOpen, onClose }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  if (!project) return null;

  const images = Array.isArray(project.media)
    ? project.media.filter((m) => m.type === "image")
    : [];

  const videos = Array.isArray(project.media)
    ? project.media.filter((m) => m.type === "video")
    : [];

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-5xl p-0 overflow-hidden bg-white">
        <div className="relative w-full">
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="p-6 sm:p-10">
            <DialogTitle className="text-3xl font-bold text-zinc-800 mb-2">
              {project.title}
            </DialogTitle>
            <p className="text-zinc-500 mb-6">{project.category}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* LEFT SIDE */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-800 mb-4">Project Overview</h3>
                  <p className="text-zinc-700">{project.description}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-zinc-800 mb-4">Techstack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack?.map((tech) => (
                      <Badge
                        key={tech.name}
                        className={cn(
                          "rounded-md py-1.5 px-2.5 bg-blue-100 text-blue-700 hover:bg-blue-200",
                          tech.color
                        )}
                      >
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </div>

                {project.githubUrl && (
                  <Button
                    asChild
                    className="bg-zinc-800 hover:bg-zinc-900 text-white flex items-center gap-2 py-2 px-4 rounded-md"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      <span>GitHub</span>
                    </a>
                  </Button>
                )}
              </div>

              {/* RIGHT SIDE - MEDIA */}
              <div className="space-y-4">
                {/* Display first image if available */}
                {images.length > 0 && (
                  <div className="rounded-lg overflow-hidden border border-gray-200">
                    <Image
                      src={images[0].url}
                      alt={`${project.title} screenshot`}
                      className="w-full h-auto"
                    />
                  </div>
                )}

                {/* Display more images if any */}
                {images.length > 1 && (
                  <div className="grid grid-cols-2 gap-2">
                    {images.slice(1, 3).map((img, index) => (
                      <div
                        key={index}
                        className="rounded-lg overflow-hidden border border-gray-200"
                      >
                        <Image
                          src={img.url}
                          alt={`${project.title} screenshot ${index + 2}`}
                          className="w-full h-auto"
                        />                          
                      </div>
                    ))}
                  </div>
                )}

                {/* Display video if available */}
                {videos.length > 0 && (
                  <div className="rounded-lg overflow-hidden border border-gray-200">
                    <video
                      controls
                      className="w-full h-auto rounded-lg"
                      src={videos[0].url}
                    >
                      Your browser does not support the video tag.
                    </video>
                                        
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioModal;
