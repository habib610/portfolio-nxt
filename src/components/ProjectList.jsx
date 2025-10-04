"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaGlobe } from "react-icons/fa";

const ProjectList = ({ data }) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {data.map((project, index) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                    {/* Project Image */}
                    <div className="relative w-full h-56">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col space-y-4">
                        <h3 className="text-2xl font-bold text-secondary">
                            {project.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                            {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech.id}
                                    className="px-3 py-1 text-xs rounded-full bg-indigo-100 text-secondary font-medium"
                                >
                                    {tech.name}
                                </span>
                            ))}
                        </div>

                        <div className="flex space-x-6 mt-4">
                            {/* Live Demo */}
                            <a
                                href={project.liveSite}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition"
                            >
                                <FaGlobe className="text-lg" />
                                <span>Live Demo</span>
                            </a>

                            {/* GitHub */}
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition"
                            >
                                <FaGithub className="text-lg" />
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default ProjectList;
