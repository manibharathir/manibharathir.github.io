import { useEffect, useState } from "react";
import HeroImg from '../../assets/images/hero.jpeg';

export default function HeroParallax() {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffsetY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative h-[100vh] w-full overflow-hidden bg-[#222]">
            {/* Background Image Layer */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-20"
                style={{
                    // backgroundImage: `url(${HeroImg})`,
                    transform: `translateY(${offsetY * 0.5}px)`, // slower scroll
                }}
            />

            {/* Foreground Content */}
            <div
                className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4"
                style={{
                    transform: `translateY(${offsetY * 0.2}px)`, // moves slower
                }}
            >
                <h1 className="text-5xl md:text-7xl font-bold drop-shadow-md">
                    Mani Bharathi Rajendran
                </h1>
                <p className="mt-7 text-xl md:text-4xl opacity-80">
                    Principal Frontend Engineer | React Expert | UI Architecture & Delivery Leader
                </p>
            </div>

            {/* Overlay (optional for darker text) */}
            <div className="absolute inset-0 bg-black/40 z-0" />
        </div>
    );
}
