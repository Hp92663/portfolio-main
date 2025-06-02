import ProjectsGrid from "@/components/projects-grid";
import Head from "next/head";

export default function ProjectsPage() {
  return (
    <div className="py-16">
      <Head>
        <meta charSet="utf-8" />
        <title>Projects – Hiren Khut| Full stack Developer</title>
        <meta
          name="description"
          content="Explore a curated collection of my projects by Hiren Khut, showcasing expertise in Generative Web, and cloud-based solutions using Azure, AWS, and latest technologies."
        />
        {/* <link rel="canonical" href="https://akshaysatasiya.in/projects" /> */}
      </Head>
      <div className="container mx-auto px-4">
        <h1 className="font-poppins text-5xl font-bold bg-clip-text text-transparent bg-custom-gradient text-center mb-4">
          Portfolio
        </h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explore my latest projects showcasing expertise in full-stack development.
        </p>
        <ProjectsGrid />
      </div>
    </div>
  );
}