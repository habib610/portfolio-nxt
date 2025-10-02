"use client";

import { IMAGES } from "@/asset";
import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
    {
        role: "Full-Stack Software Engineer",
        company: "Hypersrot Technologies",
        logo: IMAGES.hypersrot_dark,
        period: "May 2023 – Present",
        location: "Remote – Bangalore, India",
        details: [
            "Implemented scalable and secure backend solutions using Java Spring Boot",
            "Mentored frontend team, providing technical guidance and support",
            "Designed and developed responsive UI with React.js and TailwindCSS",
            "Created API documentation for smoother development processes",
        ],
    },
    {
        role: "Frontend Developer Intern",
        company: "Hypersrot Technologies",
        logo: IMAGES.hypersrot_dark,
        period: "Jan 2022 – Apr 2023",
        location: "Remote – Bangalore, India",
        details: [
            "Developed responsive websites using React.js, HTML, and CSS",
            "Followed coding best practices and performed code reviews",
            "Collaborated with senior developers on existing features",
        ],
    },
    {
        role: "Frontend Engineer Intern",
        company: "Swedit Ptd. Ltd",
        logo: IMAGES.swedit_dark,
        period: "Apr 2021 – Jul 2021",
        location: "Remote – Singapore",
        details: [
            "Built new screens and functionalities for web & mobile apps",
            "Maintained and developed REST APIs with Node.js and Firebase",
            "Collaborated with product managers to refine processes",
        ],
    },
];

export default function ExperienceTree() {
    return (
        <section
            id="experience"
            className="relative py-20 bg-white text-gray-800"
        >
            <div className="container mx-auto px-6 md:px-16">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-extrabold text-center mb-16"
                >
                    My <span className="text-blue">Journey</span>
                </motion.h2>

                {/* Tree timeline */}
                <div className="relative">
                    {/* Central line (desktop only) */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-indigo-200 h-full"></div>

                    <div className="space-y-20">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.2,
                                }}
                                className={`relative flex flex-col md:flex-row items-center ${
                                    index % 2 === 0
                                        ? "md:flex-row"
                                        : "md:flex-row-reverse"
                                }`}
                            >
                                {/* Logo Node - Desktop */}
                                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-blue w-16 h-16 rounded-full items-center justify-center shadow-lg z-10">
                                    <Image
                                        src={exp.logo}
                                        alt={`${exp.company} logo`}
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                    />
                                </div>

                                {/* Desktop Card */}
                                <div
                                    className={`hidden md:block w-1/2 ${
                                        index % 2 === 0
                                            ? "pr-10 text-right"
                                            : "pl-10 text-left"
                                    }`}
                                >
                                    <div className="bg-gray-50 rounded-xl shadow-md p-6">
                                        <h3 className="text-xl font-bold text-blue">
                                            {exp.role}
                                        </h3>
                                        <p className="text-sm font-medium text-gray-600">
                                            {exp.company}
                                        </p>
                                        <p className="text-xs text-gray-500 mb-4">
                                            {exp.period} • {exp.location}
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            {exp.details.map((d, i) => (
                                                <li key={i}>{d}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Mobile Card (logo shown inline above card) */}
                                <div className="md:hidden w-full flex flex-col items-center space-y-4">
                                    {/* Logo above card */}
                                    <div className="bg-white border-4 border-blue w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                                        <Image
                                            src={exp.logo}
                                            alt={`${exp.company} logo`}
                                            width={40}
                                            height={40}
                                            className="object-contain"
                                        />
                                    </div>

                                    <div className="bg-gray-50 rounded-xl shadow-md p-6 w-full">
                                        <h3 className="text-xl font-bold text-blue">
                                            {exp.role}
                                        </h3>
                                        <p className="text-sm font-medium text-gray-600">
                                            {exp.company}
                                        </p>
                                        <p className="text-xs text-gray-500 mb-4">
                                            {exp.period} • {exp.location}
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            {exp.details.map((d, i) => (
                                                <li key={i}>{d}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
