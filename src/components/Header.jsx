import { IMAGES } from "@/asset";
import { NAV_LINKS } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import ClientNav from "./ClientNav";

export default function Header() {
    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/20 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-6 py-3">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        alt="logo"
                        src={IMAGES.logo}
                        width={140}
                        height={140}
                        className="cursor-pointer"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-secondary hover:text-white font-medium transition duration-200"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu */}
                <ClientNav />
            </div>
        </header>
    );
}
