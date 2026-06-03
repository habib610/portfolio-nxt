"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * ElegantFallbackImage
 * A wrapper around Next.js Image that provides a beautiful,
 * seed-based gradient fallback if the image fails to load.
 */
const ElegantFallbackImage = ({ src, alt, fill, className, ...props }) => {
    const [error, setError] = useState(false);

    // Generate a simple hash from the alt text (title) to pick a consistent style
    const getHash = (str) => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        return Math.abs(hash);
    };

    const hash = getHash(alt || "default");

    // Elegant gradient palettes (Tailwind classes)
    const palettes = [
        "from-indigo-500 via-purple-500 to-pink-500",
        "from-emerald-500 via-teal-500 to-cyan-500",
        "from-rose-400 via-fuchsia-500 to-indigo-500",
        "from-amber-400 via-orange-500 to-rose-500",
        "from-blue-600 via-indigo-600 to-violet-600",
        "from-cyan-400 via-blue-500 to-indigo-600",
    ];

    const selectedGradient = palettes[hash % palettes.length];
    const fullTitle = alt || "Untitled";

    // Generate pseudo-random shapes based on hash
    const generateShapes = () => {
        const shapes = [];
        const count = 6;
        for (let i = 0; i < count; i++) {
            const size = 40 + ((hash * (i + 1)) % 100);
            const x = (hash * (i + 2)) % 100;
            const y = (hash * (i + 3)) % 100;
            const isCircle = (hash + i) % 2 === 0;
            const opacity = 0.05 + ((hash * (i + 4)) % 10) / 100;

            shapes.push(
                isCircle ? (
                    <circle
                        key={i}
                        cx={`${x}%`}
                        cy={`${y}%`}
                        r={size}
                        fill="white"
                        opacity={opacity}
                    />
                ) : (
                    <rect
                        key={i}
                        x={`${x}%`}
                        y={`${y}%`}
                        width={size}
                        height={size}
                        fill="white"
                        opacity={opacity}
                        transform={`rotate(${(hash * (i + 5)) % 360} ${x}% ${y}%)`}
                    />
                ),
            );
        }
        return shapes;
    };

    if (error || !src) {
        return (
            <div
                className={`w-full h-full relative flex items-center justify-center bg-gradient-to-br ${selectedGradient} ${className} overflow-hidden`}
                {...props}
            >
                <div className="absolute inset-0 pointer-events-none">
                    <svg
                        width="100%"
                        height="100%"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {generateShapes()}
                    </svg>
                </div>
                <div className="relative z-10 px-6 text-center">
                    <h3 className="text-white text-xl md:text-2xl font-bold opacity-80 drop-shadow-md line-clamp-2">
                        {fullTitle}
                    </h3>
                </div>
            </div>
        );
    }

    return (
        <Image
            src={src}
            alt={alt}
            fill={fill}
            className={className}
            onError={() => setError(true)}
            {...props}
            loading="lazy"
        />
    );
};

export default ElegantFallbackImage;
