import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { OG_IMAGES } from "@/constants/routes";
import { Geist, Geist_Mono, Nunito_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
    variable: "--font-nunito-sans",
    subsets: ["latin"],
});

export const metadata = {
    title: "Habib | Full Stack Developer",
    description:
        "Full-Stack Software Engineer with 2+ years of experience building scalable web applications using React, Next.js, Java, and Spring Boot.",
    keywords: [
        "Habibur Rahman",
        "Habib",
        "Full Stack Developer",
        "Full Stack Engineer",
        "React Developer",
        "Next.js Developer",
        "Java Spring Boot",
        "Software Engineer Portfolio",
        "Developer Portfolio",
        "Nextjs Developer Portfolio",
    ],
    authors: [{ name: "Habibur Rahman" }],
    openGraph: {
        title: "Habibur Rahman | Full Stack Developer",
        description:
            "Building modern, accessible, and performant web applications with React, Next.js, and Java Spring Boot.",
        url: "https://rhabib.dev",
        siteName: "Habibur Rahman Portfolio",
        images: [
            {
                url: OG_IMAGES,
                width: 1200,
                height: 630,
                alt: "Habibur Rahman Portfolio Preview",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Habibur Rahman | Full Stack Developer",
        description:
            "Building modern, accessible, and performant web applications with React, Next.js, and Java Spring Boot.",
        images: [OG_IMAGES],
        creator: "@habib_610",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${nunitoSans.variable} antialiased`}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
