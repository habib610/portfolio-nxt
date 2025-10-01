"use client";

import { NAV_LINKS } from "@/constants/routes";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function ClientNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                className="md:hidden focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <motion.svg
                    initial={false}
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={
                            isOpen
                                ? "M6 18L18 6M6 6l12 12"
                                : "M4 6h16M4 12h16m-4 6h4"
                        }
                    />
                </motion.svg>
            </button>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeIn" }}
                        className="md:hidden mt-4 bg-white shadow-lg  absolute inset-x-0 top-[40px]"
                    >
                        <nav className="flex flex-col space-y-2">
                            {NAV_LINKS.map((link, idx) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -20, opacity: 0 }}
                                    transition={{
                                        delay: idx * 0.1,
                                        duration: 0.3,
                                    }}
                                >
                                    <Link
                                        href={link.href}
                                        className="block px-4 py-2 hover:bg-rose-800 text-primary rounded transition"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
