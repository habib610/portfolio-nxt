import { getAllProjects } from "@/apis";
import ProjectList from "./ProjectList";

export default async function Projects() {
    let data = await getAllProjects();

    return (
        <section id="projects" className="py-20 bg-white text-gray-800">
            <div className="container mx-auto px-6 md:px-16">
                <h2
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-extrabold text-center mb-16"
                >
                    Featured <span className="text-indigo-500">Projects</span>
                </h2>

                <ProjectList data={data} />
            </div>
        </section>
    );
}
