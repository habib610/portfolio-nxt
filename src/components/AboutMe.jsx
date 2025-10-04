"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
    return (
        <section
            id="about"
            className="relative min-h-screen bg-white text-gray-800 flex items-center justify-center px-6 md:px-20 py-20"
        >
            <div className="max-w-5xl w-full space-y-12">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-4xl md:text-5xl font-extrabold text-center md:text-left"
                >
                    About <span className="text-secondary">Me</span>
                </motion.h2>

                {/* Intro Paragraph */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-lg leading-relaxed text-center md:text-left max-w-3xl"
                >
                    Hi, I’m{" "}
                    <span className="font-semibold text-secondary">Habib</span>,
                    a passionate{" "}
                    <span className="font-semibold">
                        Full-Stack Software Engineer{" "}
                    </span>
                    with over{" "}
                    <span className="font-semibold">2 years of experience</span>{" "}
                    building scalable and user-focused web applications. I love
                    crafting solutions that combine{" "}
                    <span className="font-semibold">clean design</span>,
                    <span className="font-semibold"> robust architecture</span>,
                    and
                    <span className="font-semibold">
                        {" "}
                        smooth user experiences
                    </span>
                    .
                </motion.p>

                {/* Skills Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="grid md:grid-cols-2 gap-8"
                >
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-secondary">
                            Frontend
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>React.js, Next.js, Redux</li>
                            <li>JavaScript (ES6+), HTML5, CSS3</li>
                            <li>TailwindCSS</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-secondary">
                            Backend
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Java, Spring Boot</li>
                            <li>Node.js, Express.js</li>
                            <li>RESTful APIs</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-secondary">
                            Databases
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>MySQL, PostgreSQL</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-secondary">
                            DevOps & Tools
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Git, Docker</li>
                            <li>JUnit, Mockito</li>
                            <li>Maven, Webpack</li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
