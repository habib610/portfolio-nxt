"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const BlogList = ({ blogs }) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogs.map((blog, index) => (
                <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                    {/* Blog Image */}
                    <div className="relative w-full h-56">
                        <Image
                            src={blog.image}
                            alt={blog.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Blog Content */}
                    <div className="p-6 flex flex-col space-y-4">
                        <h3 className="text-xl font-bold text-indigo-600">
                            {blog.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-3">
                            {blog.description ||
                                "Click below to read more about this blog."}
                        </p>

                        {/* Date */}
                        <p className="text-xs text-gray-500">
                            {new Date(blog.timestamp).toLocaleDateString(
                                "en-US",
                                {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                }
                            )}
                        </p>

                        {/* Link */}
                        <div className="flex justify-end mt-4">
                            <a
                                href={blog.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default BlogList;
