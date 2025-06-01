import ProjectsGrid from "@/components/projects-grid";
import Head from "next/head";

export default function ProjectsPage() {
  return (
    <div className="py-16">
      <Head>
        <meta charSet="utf-8" />
        <title>Projects – Akshay Satasiya | AI/ML Engineer & Generative AI Developer</title>
        <meta
          name="description"
          content="Explore a curated collection of AI/ML projects by Akshay Satasiya, showcasing expertise in Generative AI, LLMs, and cloud-based solutions using Azure, AWS, and GCP."
        />
        <link rel="canonical" href="https://akshaysatasiya.in/projects" />
      </Head>
      <div className="container mx-auto px-4">
        <h1 className="font-poppins text-5xl font-bold bg-clip-text text-transparent bg-custom-gradient text-center mb-4">
          Portfolio
        </h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explore my latest projects showcasing expertise in data science, machine learning,
          and full-stack development.
        </p>
        <ProjectsGrid />
      </div>
    </div>
  );
}