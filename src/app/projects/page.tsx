
import Link from "next/link";
import { ExternalLink, Github, Calendar } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with React. Features include product catalog, shopping cart, product detail and much more.",
      image: "/bgi.jpeg",
      technologies: ["React", "SCSS", "TypeScript", "Redux", "Figma"],
      githubUrl: "https://github.com/div-ine-Coders/product_catalog?tab=readme-ov-file",
      liveUrl: "https://produtcatalog.netlify.app/#/",
      date: "2025"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/bgi.jpeg",
      technologies: ["React", "Node.js", "MongoDB", "CSS"],
      githubUrl: "https://github.com/yourusername/taskmanager",
      liveUrl: "https://your-taskmanager.vercel.app",
      date: "2023"
    },
    {
      id: 3,
      title: "Weatherapp-web",
      description: "A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities with interactive charts and maps.",
      image: "/bgi.jpeg",
      technologies: ["React", "Axious", "OpenWeatherMap API", "SCSS Modules", "React Toastify"],
      githubUrl: "https://github.com/kostivkostiv/weatherapp-web",
      liveUrl: "https://weatherapp-web-juc4.vercel.app/",
      date: "2025"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS featuring smooth animations and optimized performance.",
      image: "/bgi.jpeg",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      githubUrl: "https://github.com/yourusername/portfolio",
      liveUrl: "https://your-portfolio.vercel.app",
      date: "2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I&apos;ve worked on, showcasing my skills in 
            frontend development, UI/UX design, and modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              
              {/* Project Image */}
              <div className="relative h-48 bg-gray-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded-md">
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Calendar size={12} />
                    <span>{project.date}</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                
                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <Link 
                    href={project.githubUrl}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 text-sm font-medium"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </Link>
                  <Link 
                    href={project.liveUrl}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Interested in working together?</h2>
          <p className="text-gray-600 mb-6">
            I&apos;m always open to discussing new opportunities and exciting projects.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:scale-105 transition-transform duration-200 font-medium"
          >
            Get In Touch
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Projects;