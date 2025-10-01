import { IMAGES } from "@/asset";
import { NAV_LINKS } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import ClientNav from "./ClientNav";

export default function Header() {
    return (
        <header className="bg-white text-primary p-4 shadow-lg fixed inset-x-0 top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    <Image
                        alt="logo"
                        src={IMAGES.logo}
                        width={150}
                        height={150}
                        className="cursor-pointer"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    {NAV_LINKS.map((link, idx) => (
                        <div key={link.href}>
                            <Link
                                href={link.href}
                                className="hover:text-rose-700 text-primary transition"
                            >
                                {link.name}
                            </Link>
                        </div>
                    ))}
                </nav>

                <ClientNav />
            </div>
        </header>
    );
}
