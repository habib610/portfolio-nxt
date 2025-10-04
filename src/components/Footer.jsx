"use client";
import { IMAGES } from "@/asset";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

export default function Footer() {
    return (
        <footer className="relative bg-gray-900 text-gray-300 py-12 overflow-hidden">
            <div className="container mx-auto px-6 md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Brand / About */}
                    <motion.div>
                        <Image
                            src={IMAGES.logoLight}
                            alt="logo_light"
                            height={90}
                            width={120}
                            className="mb-2"
                        />
                        <p className="text-sm leading-relaxed">
                            Full-Stack Software Engineer crafting modern web
                            applications with clean design, accessibility, and
                            smooth user experiences.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-lg font-semibold text-white mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="#about"
                                    className="hover:text-indigo-400 transition"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#projects"
                                    className="hover:text-indigo-400 transition"
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#blogs"
                                    className="hover:text-indigo-400 transition"
                                >
                                    Blogs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#contact"
                                    className="hover:text-indigo-400 transition"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Socials */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="text-lg font-semibold text-white mb-4">
                            Connect
                        </h3>
                        <div className="flex space-x-6">
                            <a
                                href="mailto:rhabib.dev@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-indigo-400 transition flex items-center justify-center gap-1"
                            >
                                <AiFillMail size={20} /> Email
                            </a>
                            <a
                                href="https://github.com/habib610"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-indigo-400 transition flex items-center justify-center gap-1"
                            >
                                <AiFillGithub size={20} /> GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/habib610/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-indigo-400 transition flex items-center justify-center gap-1"
                            >
                                <BsLinkedin size={20} /> LinkedIn
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Line */}
                <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Habibur Rahman. All Rights
                    Reserved.
                </div>
            </div>

            {/* Background Glow (Adjusted so it stays behind content only) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500 opacity-20 blur-[160px] rounded-full pointer-events-none"></div>
        </footer>
    );
}
