import AboutMe from "@/components/AboutMe";
import MyBlogs from "@/components/Blogs";
import Experience from "@/components/Experince";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
    return (
        <>
            <Hero />
            <AboutMe />
            <Experience />
            <Projects />
            <MyBlogs />
        </>
    );
}
