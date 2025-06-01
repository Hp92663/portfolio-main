// 'use client';

// import { useState } from 'react';
// import { Card, CardContent } from "@/components/ui/card";
// import PortfolioModal from "@/components/portfolio-modal";

// //  import image from "../app/assets/img/portfolio.png";

// // Sample portfolio data
// const portfolioProjects = [
//   {
//     id: "1",
//     title: "Football Match Analysis",
//     category: "Computer Vision",
//     description: "Our strategy for this project focused on understanding the client's vision and delivering a cohesive design that resonated with their target audience. We prioritized a user-centric design approach, ensuring that the interface was not only visually appealing but also intuitive and easy to navigate. We employed modern design tools and technologies to create a responsive and engaging user experience.",
//     techStack: [
//       { name: "Python", color: "bg-blue-100 text-blue-700" },
//       { name: "OpenCV", color: "bg-blue-100 text-blue-700" },
//       { name: "Jupyter-Notebook", color: "bg-blue-100 text-blue-700" },
//       { name: "Object-Detection", color: "bg-blue-100 text-blue-700" },
//       { name: "Object-Tracking", color: "bg-blue-100 text-blue-700" },
//       { name: "Video-Analysis", color: "bg-blue-100 text-blue-700" },
//     ],
//     images: [
//       "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     ],
//     githubUrl: "https://github.com/AkshaySatasiya/Football-Analysis-System"
//   },
//   {
//     id: "2",
//     title: "E-commerce App",
//     category: "Web Application",
//     description: "We built a comprehensive e-commerce solution with a focus on performance and user experience. The application features a responsive design, secure payment processing, and an intuitive product management system. The client-side rendering ensures fast page loads while maintaining SEO compatibility.",
//     techStack: [
//       { name: "React", color: "bg-green-100 text-green-700" },
//       { name: "Node.js", color: "bg-green-100 text-green-700" },
//       { name: "MongoDB", color: "bg-green-100 text-green-700" },
//       { name: "Express", color: "bg-green-100 text-green-700" },
//       { name: "Stripe API", color: "bg-green-100 text-green-700" }
//     ],
//     images: [
//       "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     ],
//     githubUrl: "https://github.com/example/ecommerce-app"
//   },
//   {
//     id: "3",
//     title: "Portfolio Website",
//     category: "Web Design",
//     description: "A minimalist portfolio website designed to showcase creative work with elegant animations and intuitive navigation. The website features a dark/light mode toggle and is fully responsive across all devices.",
//     techStack: [
//       { name: "React", color: "bg-purple-100 text-purple-700" },
//       { name: "Tailwind CSS", color: "bg-purple-100 text-purple-700" },
//       { name: "Framer Motion", color: "bg-purple-100 text-purple-700" }
//     ],
//     images: [
//       "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     ],
//     githubUrl: "https://github.com/example/portfolio"
//   },
//   {
//     id: "4",
//     title: "Portfolio Website",
//     category: "Web Design",
//     description: "A minimalist portfolio website designed to showcase creative work with elegant animations and intuitive navigation. The website features a dark/light mode toggle and is fully responsive across all devices.",
//     techStack: [
//       { name: "React", color: "bg-purple-100 text-purple-700" },
//       { name: "Tailwind CSS", color: "bg-purple-100 text-purple-700" },
//       { name: "Framer Motion", color: "bg-purple-100 text-purple-700" }
//     ],
//     images: [
//       "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     ],
//     githubUrl: "https://github.com/example/portfolio"
//   }
// ];

// const ProjectsGrid = ({ shoeCards = 0 }) => {
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleOpenProject = (project) => {
//     setSelectedProject(project);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   const list = shoeCards > 0 ? portfolioProjects.slice(0, shoeCards) : portfolioProjects;

//   return (
//     <div className="bg-gray-50">
//       <div className="container mx-auto px-4 py-8">
//         {/* <h1 className="text-4xl font-bold text-center mb-12">My Portfolio</h1> */}
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {list.map((project) => (
//             <Card 
//               key={project.id} 
//               className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
//               onClick={() => handleOpenProject(project)}
//             >
//               <div className="h-48 overflow-hidden">
//                 <img 
//                   src={project.images[0]} 
//                   alt={project.title} 
//                   className="w-full h-full object-cover object-center"
//                 />
//               </div>
//               <CardContent className="p-5">
//                 <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//                 <p className="text-sm text-gray-500">{project.category}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
      
//       <PortfolioModal 
//         project={selectedProject}
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//       />
//     </div>
//   );
// };

// export default ProjectsGrid;






'use client';

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import PortfolioModal from "@/components/portfolio-modal";
import Image from 'next/image';

import football_analysis from "../app/assets/projects/project_football.png";
import tennis_analysis from "../app/assets/projects/tennis_analysis.png";
import parking_spot from "../app/assets/projects/parking_spot_detector.png";
import chat_with_docs from "../app/assets/projects/chat_with_docs.jpg";


// Sample portfolio data
const portfolioProjects = [
  {
    id: "1",
    title: "Football Match Analysis",
    category: "Computer Vision",
    description: "The Football Match Analysis project leverages advanced computer vision techniques to analyze football matches. Using the YOLO (You Only Look Once) object detection model, it accurately tracks players, referees, and the football. Key features include team identification, ball control measurement, and player movement analysis.",
    techStack: [
      { name: "Python", color: "bg-blue-100 text-blue-700" },
      { name: "OpenCV", color: "bg-blue-100 text-blue-700" },
      { name: "YOLO", color: "bg-blue-100 text-blue-700" },
      { name: "Jupyter-Notebook", color: "bg-blue-100 text-blue-700" },
      { name: "Object-Detection", color: "bg-blue-100 text-blue-700" },
      { name: "Object-Tracking", color: "bg-blue-100 text-blue-700" },
      { name: "Video-Analysis", color: "bg-blue-100 text-blue-700" },
    ],
    media: [
      {type:'image',url:football_analysis},
    ],
    githubUrl: "https://github.com/AkshaySatasiya/Football-Analysis-System"
  },
  {
    id: "2",
    title: "Parking Spot Detection",
    category: "Computer Vision",
    description: "The Parking Spot Detection System utilizes machine learning and computer vision to provide real-time detection and reporting of available parking spaces. By analyzing video feeds from parking lots, the system accurately monitors and identifies parking space occupancy.",
    techStack: [
      { name: "Python", color: "bg-green-100 text-green-700" },
      { name: "OpenCV", color: "bg-green-100 text-green-700" },
      { name: "Video Analysis", color: "bg-green-100 text-green-700" },
      { name: "Object Tracking", color: "bg-green-100 text-green-700" },
      { name: "Object Detection", color: "bg-green-100 text-green-700" },
      { name: "YOLO", color: "bg-green-100 text-green-700" }
    ],
    media: [
      {type:'image',url:parking_spot},
    ],
    githubUrl: "https://github.com/AkshaySatasiya/Parking-Spot-Detection"
  },
  {
    id: "3",
    title: "Chat with Documents",
    category: "Generative AI",
    description: "This project demonstrates an innovative approach to interacting with various document formats using AI models. It leverages the power of the LlamaIndex, Gemini, and OpenAI models to embed and respond to user queries, providing a seamless chat experience with documents.",
    techStack: [
      { name: "Python", color: "bg-purple-100 text-purple-700" },
      { name: "GenAI", color: "bg-purple-100 text-purple-700" },
      { name: "OpenAI", color: "bg-purple-100 text-purple-700" },
      { name: "LlamaIndex", color: "bg-purple-100 text-purple-700" },
      { name: "Streamlit", color: "bg-purple-100 text-purple-700" },
      { name: "Pinecone", color: "bg-purple-100 text-purple-700" },
    ],
    media: [
      {type:'image',url:chat_with_docs},
    ],
    githubUrl: "https://github.com/AkshaySatasiya/Chat-With-Multi-Format-Documents-Using-LLamaIndex"
  },
  {
    id: "4",
    title: "Tennis Match Analysis",
    category: "Computer Vision",
    description: "This project integrates machine learning, computer vision, and deep learning to analyze tennis. Using YOLO, it detects players and balls, with trackers for smooth tracking. It also employs a custom CNN to identify court points.",
    techStack: [
      { name: "Python", color: "bg-green-100 text-green-700" },
      { name: "OpenCV", color: "bg-green-100 text-green-700" },
      { name: "Video Analysis", color: "bg-green-100 text-green-700" },
      { name: "Object Tracking", color: "bg-green-100 text-green-700" },
      { name: "Object Detection", color: "bg-green-100 text-green-700" },
      { name: "YOLO", color: "bg-green-100 text-green-700" }
    ],
    media: [
      {type:'image',url:tennis_analysis},
    ],
    githubUrl: "https://github.com/AkshaySatasiya/Tennis-Match-Analysis"
  }
];

const ProjectsGrid = ({ shoeCards = 0 }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const list = shoeCards > 0 ? portfolioProjects.slice(0, shoeCards) : portfolioProjects;

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* <h1 className="text-4xl font-bold text-center mb-12">My Portfolio</h1> */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((project) => (
            <Card 
              key={project.id} 
              className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() => handleOpenProject(project)}
            >
              {/* <div className="h-48 overflow-hidden">
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center"
                />
              </div> */}
              <div className="h-48 overflow-hidden bg-black flex items-center justify-center">
                {project.media[0]?.type === "image" ? (
                  // <img 
                  //   src={project.media[0].url} 
                  //   alt={project.title} 
                  //   className="w-full h-full object-cover object-center"
                  // />
                  <Image
                  src={project.media[0].url}
                  alt="project.title"
                  className="w-full h-full object-cover object-center"
                />
                ) : project.media[0]?.type === "video" ? (
                  <video 
                    src={project.media[0].url} 
                    className="w-full h-full object-cover object-center"
                    autoPlay 
                    muted 
                    loop 
                  />
                ) : null}
              </div>
              <CardContent className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <PortfolioModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default ProjectsGrid;