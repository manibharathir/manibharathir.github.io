import MyInfo from './Profile/MyInfo';
import Logo from './Profile/Logo';
import Picture from './Profile/Picture';
import About from './Profile/About';

import { useEffect, useState, useRef } from "react";
import HeroParallax from './Profile/HeroParallax';

const profile = {
    name: 'Mani Bharathi Rajendran',
    position: 'Principal Frontend Engineer & UI Solutions Architect',
    stdCode: '+91',
    mobile: '9535876178',
    email: 'manibharathir@gmail.com',
    address: 'Bangalore',
    linkedinURL: 'https://www.linkedin.com/in/manibharathir/',
    githubURL: 'https://github.com/manibharathir'
}

// export default function Profile() {
//     return (
//         <section className="flex h-full flex-col-reverse md:flex-row">
//             <div className="h-inherit mt-[260px] md:mt-0 md:w-[50%]">
//                 <MyInfo profile={profile} />
//                 <About />
//             </div>
//             <div className="bg-[#8ea69b] h-[300px] md:h-[100vh] flex-column md:flex-row h-inherit md:w-[50%] sticky right-0 top-[100vh]">
//                 <Logo />
//                 <Picture />
//             </div>
//         </section>
//     )
// }

export default function Profile() {
    const heroRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (!heroRef.current) return;

            // Get distance from top of viewport to bottom of hero section
            const heroBottom = heroRef.current.getBoundingClientRect().bottom;

            // If hero bottom is <= 0, user scrolled past hero
            setIsSticky(heroBottom <= 0);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            {/* Separate Hero Module */}
            <section
                ref={heroRef}
                className="h-screen bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-5xl font-bold"
            >
                <HeroParallax />
            </section>

            {/* Main content wrapper */}
            <div className="flex h-full flex-col-reverse md:flex-row">
                {/* Left/main content */}
                <main className={`h-inherit ${isSticky ? 'mt-[300px]' : 'mt-[0px]'} md:mt-0 md:w-[50%]`}>
                    {/* <h1 className="text-3xl font-semibold mb-6">Main Content</h1>
                    <p>Put your main scrollable content here.</p> */}
                    <MyInfo profile={profile} />
                    <About />
                </main>

                {/* Right side content */}
                <aside
                    className={`bg-[#8ea69b] h-[300px] md:h-[100vh] flex-column md:flex-row h-inherit md:w-[50%] transition-all duration-300 ${isSticky ? "fixed top-0 right-0" : "relative"
                        }`}
                    // style={{ right: isSticky ? "2rem" : "auto" }}
                >
                    {/* <h2 className="font-semibold mb-4">Sticky Right Content</h2>
                    <p>This becomes sticky after scrolling past the hero module.</p> */}
                    <Logo />
                    <Picture />
                </aside>
            </div>
        </>
    );
}
