"use client";

import {
    EMAIL_PUBLIC_KEY,
    EMAIL_SERVICE_ID,
    EMAIL_TEMPLATE_ID,
} from "@/config/email-config";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./Modal";

export default function ContactMe() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                EMAIL_SERVICE_ID,
                EMAIL_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                },
                EMAIL_PUBLIC_KEY
            );
            setIsModalOpen(true);
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            alert("Something went wrong. Please try again.");
        }

        setLoading(false);
    };

    return (
        <section
            id="contact"
            className="relative py-20 bg-gray-900 text-white overflow-hidden"
        >
            <div className="container mx-auto px-6 md:px-16">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-extrabold text-center mb-12"
                >
                    Get in <span className="text-primary">Touch</span>
                </motion.h2>

                <motion.form
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    onSubmit={handleSubmit}
                    className="max-w-3xl mx-auto grid grid-cols-1 gap-6"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-3 rounded-xl bg-gray-800 border border-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-3 rounded-xl bg-gray-800 border border-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        required
                        className="w-full px-6 py-3 rounded-xl bg-gray-800 border border-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
                    ></textarea>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full md:w-auto px-8 py-3 bg-indigo-600 rounded-xl font-medium hover:bg-indigo-700 transition text-white"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </motion.form>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h3 className="text-2xl font-bold text-indigo-600 mb-4">
                    Message Sent!
                </h3>
                <p className="text-gray-700">
                    Thank you for reaching out. I will get back to you soon.
                </p>
            </Modal>
        </section>
    );
}
