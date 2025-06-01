// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Button } from "./ui/button";
// import Link from "next/link";

// // Sample portfolio data
// const portfolioProjects = [
//   {
//     id: "1",
//     title: "Cleaning Service Website",
//     category: "Web Design",
//     description: "Our strategy for this project focused on understanding the client's vision and delivering a cohesive design that resonated with their target audience. We prioritized a user-centric design approach, ensuring that the interface was not only visually appealing but also intuitive and easy to navigate. We employed modern design tools and technologies to create a responsive and engaging user experience.",
//     techStack: [
//       { name: "React", color: "bg-blue-100 text-blue-700" },
//       { name: "Javascript", color: "bg-blue-100 text-blue-700" },
//       { name: "Material-ui", color: "bg-blue-100 text-blue-700" },
//       { name: "Redux", color: "bg-blue-100 text-blue-700" },
//       { name: "Redux-saga", color: "bg-blue-100 text-blue-700" },
//       { name: "Redux-thunk", color: "bg-blue-100 text-blue-700" },
//       { name: "Zoom SDK", color: "bg-blue-100 text-blue-700" }
//     ],
//     images: [
//       "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     ],
//     githubUrl: "https://github.com/example/cleaning-service"
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
//   }
// ];




"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const projects = [
    {
        id: 1,
        title: "Cleaning Service Website",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
        description: "A modern website for a cleaning service company built with Next.js and TailwindCSS.",
        link: "#",
    },
    {
        id: 2,
        title: "Pet Care App",
        category: "Mobile Development",
        image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a",
        description: "A Flutter-based mobile application for pet care services and appointment booking.",
        link: "#",
    },
    {
        id: 3,
        title: "Diamond Price Prediction",
        category: "Machine Learning",
        image: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923",
        description: "ML model to predict diamond prices based on various characteristics.",
        link: "#",
    },
    {
        id: 4,
        title: "Customer Segmentation",
        category: "Data Science",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        description: "Advanced customer segmentation using clustering algorithms.",
        link: "#",
    },
];

export function ProjectsSection() {
    return (
        <section className="container mx-auto px-4 py-20">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white rounded-lg overflow-hidden shadow-lg"
                    >
                        <div className="relative h-64">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <p className="text-sm text-[#00796B] font-medium mb-2">
                                {project.category}
                            </p>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <Button asChild variant="outline">
                                <Link href={project.link}>View Project</Link>
                            </Button>
                        </div>

                    </motion.div>
                ))}
            </div>
            <div className="text-center mt-10">
                <Link href="/projects">
                    <button className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-custom-gradient text-white hover:bg-gray-800 transition-colors duration-300">
                        View All
                        <svg
                            className="ml-2 w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </Link>
            </div>
        </section>
    );
}