"use client";

import { IMAGES } from "@/asset";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const roles = [
    "Creative Developer",
    "Front-End Engineer",
    "Full Stack Engineer",
    "UI/UX Explorer",
    "Tech Enthusiast",
    "Lifelong Learner",
];

export default function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.09 },
        },
        exit: { opacity: 0 },
    };

    const letter = {
        hidden: { opacity: 0, y: 20, rotateX: 90 },
        visible: { opacity: 1, y: 0, rotateX: 0 },
        exit: { opacity: 0, y: -20, rotateX: -90 },
    };

    return (
        <AnimatePresence mode="wait">
            <div className="relative overflow-hidden">
                <section className="min-h-screen flex flex-col md:flex-row items-center justify-center container mx-auto  text-white pt-30 md:pt-0 px-6 md:px-4 xl:px-0 ">
                    {/* Left Content */}
                    <div className=" w-full md:w-[60%] lg:flex-1  space-y-6 text-left">
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl  font-bold leading-tight text-gray-700"
                        >
                            Hi, I’m{" "}
                            <span className="text-secondary font-secondary">
                                Habib
                            </span>
                            <br />{" "}
                            <div className="di">
                                <span className="hidden text-nowrap md:inline-block">
                                    A{" "}
                                </span>{" "}
                                <motion.span
                                    key={roles[index]}
                                    variants={container}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    transition={{ duration: 0.6 }}
                                    className="inline-block text-primary"
                                >
                                    {roles[index].split("").map((char, i) => (
                                        <motion.span
                                            key={i}
                                            variants={letter}
                                            transition={{
                                                duration: 0.4,
                                                ease: "easeOut",
                                            }}
                                            className="inline-block"
                                        >
                                            {char === " " ? "\u00A0" : char}
                                        </motion.span>
                                    ))}
                                </motion.span>
                            </div>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-body max-w-xl mx-auto md:mx-0"
                        >
                            As a Full-Stack Developer, I transform ideas into
                            scalable, elegant web apps with beautiful design,
                            solid architecture, and frictionless UX.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="flex justify-start space-x-4"
                        >
                            <Link
                                href="#projects"
                                className="px-6 py-3 bg-secondary rounded-xl font-medium hover:bg-indigo-700 transition"
                            >
                                View Projects
                            </Link>
                            <Link
                                href="#contact"
                                className="px-6 py-3 border text-gray-800 border-gray-400 rounded-xl font-medium hover:bg-gray-800 hover:text-white transition"
                            >
                                Contact Me
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Side Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                        className="flex-1 flex justify-center mt-10 md:mt-0"
                    >
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{
                                repeat: Infinity,
                                duration: 3,
                                ease: "easeInOut",
                            }}
                        >
                            <Image
                                src={IMAGES.habib}
                                alt="Profile Picture"
                                width={350}
                                height={350}
                                className="rounded-full  border-4 border-secondary"
                            />
                        </motion.div>
                    </motion.div>
                </section>

                <motion.div
                    className="absolute inset-0 -z-10 overflow-hidden"
                    // animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        duration: 120,
                        ease: "linear",
                    }}
                >
                    <div className="absolute top-[-15%] left-[-10%] w-72 h-72 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 opacity-30 blur-3xl rounded-full" />

                    {/* Bottom-right subtle blob */}
                    <div className="absolute bottom-[-10%] right-[-5%] w-80 h-80 bg-gradient-to-r from-yellow-200 via-orange-200 to-red-200 opacity-20 blur-3xl rounded-full" />

                    {/* Center floating blob */}
                    <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-gradient-to-r from-green-200 via-teal-200 to-secondary-200 opacity-25 blur-3xl rounded-full" />
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
