import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { MdClose } from "react-icons/md";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      name: "WorkFLow",
      image: "/workflow.png",
      techStack: "React, Next.js, Prisma, MySQL, Tailwind css, Material UI",
      githubLink: "https://github.com/deudoxie758/workflow",
      liveLink: "https://workflow-demo-app.herokuapp.com/login",
      description:
        "WorkFlow is a powerful communication tool that helps teams collaborate and stay connected. Built using Next.js, Tailwind CSS, and MySQL, our application is fast, responsive, and user-friendly.",
    },
    {
      id: 2,
      name: "InStock",
      image: "/instock.png",
      techStack: "React, JavaScript, SASS",
      githubLink: "https://github.com/merinekh/siar-instock-client",
      liveLink: "https://github.com/merinekh/siar-instock-client",
      description:
        "This inventory tracking app is built using React and Express, and it allows users to easily track their inventory levels for multiple products. Users can add new products to their inventory, track the quantity of each product, and be aware when inventory levels fall below a specified threshold. The app provides a user-friendly interface for managing inventory and helps businesses streamline their operations by ensuring that they always have the right amount of stock on hand.",
    },
    {
      id: 3,
      name: "Instock Backend",
      image: "/backend.png",
      techStack: "Node.js, Express.js, RESTful API",
      githubLink: "https://github.com/merinekh/siar-instock-backend",
      liveLink: "https://github.com/merinekh/siar-instock-backend",
      description:
        "This inventory tracking RESTful API is built using Express, and it allows users to perform CRUD operations on their inventory data, including adding new products, updating quantities, and deleting products. ",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Darnell Eudoxie - Projects</title>
        <meta name="description" content="My portfolio projects page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold mb-10">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleCardClick(project)}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl cursor-pointer flex flex-col"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col p-6 h-48">
                <h2 className="text-2xl font-bold mb-2 h-12 overflow-hidden">
                  {project.name}
                </h2>
                <p className="text-gray-600 mb-4 flex-grow">
                  {project.techStack}
                </p>

                <div className="flex justify-end">
                  <AiFillGithub size={30} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {showModal && (
          <div className="fixed z-50 top-0 left-0 w-full h-full overflow-auto bg-gray-500 bg-opacity-75">
            <div className="relative mx-auto my-16 max-w-3xl">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <button
                  className="absolute top-4 right-4"
                  onClick={() => setShowModal(false)}
                >
                  <MdClose size={30} />
                </button>
                <h2 className="text-3xl font-bold mb-4 hover:text-gray-500">
                  <a href={selectedProject.liveLink}>{selectedProject.name}</a>
                </h2>
                <div className="flex justify-center items-center mb-4">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    width={600}
                    height={450}
                    className="object-cover"
                  />
                </div>
                <p className="text-lg text-gray-600 mb-4">
                  {selectedProject.description}
                </p>
                <div className="flex justify-center items-center mb-4">
                  <p className="text-lg text-gray-600 mr-2">Tech Stack: </p>
                  <p className="text-lg text-gray-800">
                    {selectedProject.techStack}
                  </p>
                </div>
                <div className="flex justify-center">
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub size={30} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="flex items-center justify-start w-full h-24 border-t pl-20">
        <p>© 2023 - Darnell Eudoxie</p>
      </footer>
    </div>
  );
};

export default ProjectsPage;
