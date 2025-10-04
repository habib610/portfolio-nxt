import { getAllBlogs } from "@/apis";
import BlogList from "./BlogList";

export default async function MyBlogs() {
    const blogs = await getAllBlogs();
    return (
        <section id="blogs" className="py-20 bg-gray-50 text-gray-800">
            <div className="container mx-auto px-6 md:px-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
                    Latest <span className="text-primary">Blogs</span>
                </h2>
                <BlogList blogs={blogs} />
            </div>
        </section>
    );
}
