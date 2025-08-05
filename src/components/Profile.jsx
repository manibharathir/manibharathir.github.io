import MyInfo from './Profile/MyInfo';
import Logo from './Profile/Logo';
import Picture from './Profile/Picture';
import About from './Profile/About';
import { experience, eductaion } from '../util/data';

import { useEffect, useState, useRef } from "react";
import HeroParallax from './Profile/HeroParallax';
import Timeline from './Profile/Timeline';

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
            <section
                ref={heroRef}
                className="h-screen bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-5xl font-bold"
            >
                <HeroParallax />
            </section>
            <div className="flex h-full flex-col-reverse md:flex-row">
                <main className={`h-inherit ${isSticky ? 'mt-[300px]' : 'mt-[0px]'} md:mt-0 md:w-[75%]`}>
                    <MyInfo profile={profile} />
                    <About />
                    <div>
                        <Timeline items={experience} title="Experience" />
                        <Timeline items={eductaion} title="Education" />
                    </div>
                </main>
                <aside
                    className={`bg-[#8ea69b] z-[1] h-[300px] md:h-[100vh] flex-column md:flex-row h-inherit md:w-[25%] transition-all duration-300 ${isSticky ? "fixed top-0 right-0" : "relative"
                        }`}
                >
                    <Logo />
                    <Picture />
                </aside>
            </div>
        </>
    );
}
