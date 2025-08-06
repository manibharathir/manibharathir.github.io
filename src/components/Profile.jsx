import MyInfo from './Profile/MyInfo';
import Logo from './Profile/Logo';
import Picture from './Profile/Picture';
import About from './Profile/About';
import { experience, eductaion, profile } from '../util/data';

import { useEffect, useState, useRef } from "react";
import HeroParallax from './Profile/HeroParallax';
import Timeline from './Profile/Timeline';
import Skills from './Profile/Skills';

export default function Profile() {
    const heroRef = useRef(null);
    const mainRef = useRef(null);
    const asideRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);
    const [isBottomAbs, setIsBottomAbs] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (!heroRef.current) return;

            // Get distance from top of viewport to bottom of hero section
            const heroBottom = heroRef.current.getBoundingClientRect().bottom;
            const mainBottom = mainRef.current.getBoundingClientRect().bottom;
            const asideHeight = asideRef.current.getBoundingClientRect().height;

            // console.log("heroBottom",heroBottom);
            // console.log("mainBottom",mainBottom);
            // If hero bottom is <= 0, user scrolled past hero
            setIsSticky(heroBottom <= 0);
            setIsBottomAbs(mainBottom <= asideHeight);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <section
                ref={heroRef}
                className="h-screen bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-5xl font-bold"
            >
                <HeroParallax />
            </section>
            <div className="relative flex flex-col-reverse md:flex-row">
                <main className={`h-inherit ${isSticky ? 'mt-[300px]' : 'mt-[0px]'} md:mt-0 md:w-[75%]`} ref={mainRef}>
                    <MyInfo profile={profile} />
                    <About />
                    <div>
                        <Timeline items={experience} title="Experience" />
                        <Timeline items={eductaion} title="Education" />
                    </div>
                </main>
                <aside
                    ref={asideRef}
                    className={`bg-[#8ea69b] z-[1] h-[250px] md:h-[100vh] flex-column md:flex-row h-inherit md:w-[25%] transition-all duration-300 ${isSticky && !isBottomAbs ? "fixed top-0 right-0" : isBottomAbs ? "absolute bottom-0 right-0" : "relative"
                        }`}
                >
                    <Logo />
                    <Picture />
                </aside>
            </div>
            <Skills />
        </>
    );
}
