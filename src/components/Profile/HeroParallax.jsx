import { useEffect, useState } from "react";
import HeroImg from '../../assets/images/hero.png';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

export default function HeroParallax({ profile }) {
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
                    backgroundImage: `url(${HeroImg})`,
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
                    {profile.name}
                </h1>
                <p className="mt-7 text-xl md:text-4xl opacity-80">
                    {profile.position}
                </p>

                <div className="grid md:grid-cols-2 w-full mt-24">
                    <div className="text-xl">
                        <p className="flex items-center md:justify-center mb-3"><FaPhoneAlt size={20} /> <a className="ml-2" href={`tel:${profile.stdCode}${profile.mobile}`}>{profile.stdCode}-{profile.mobile}</a></p>
                        <p className="flex items-center md:justify-center mb-3"><MdEmail size={20} /> <a className="ml-2" href={`mailto:${profile.email}?subject=Hello%20Mani&body=Hi%20Mani,%0D%0A%0D%0AI%20am%20interested%20in%20connecting%20with%20you.%0D%0A%0D%0ABest%20regards,`}>{profile.email}</a></p>
                        {/* <p><strong>Address : </strong> {profile.address}</p> */}
                        {/* <a href={profile.linkedinURL} target="_blank" rel="noreferrer">
                            <button className="mr-3 linkedin text-white">
                                <FaLinkedin size={30} />
                            </button>
                        </a>
                        <a href={profile.githubURL} target="_blank" rel="noreferrer">
                            <button className="github text-white">
                                <SiGithub size={30} />
                            </button>
                        </a> */}
                    </div>
                    <div className="text-xl">
                        <p className="flex items-center md:justify-center mb-3"><FaLinkedin size={20} /> <a href={profile.linkedinURL} target="_blank" rel="noreferrer" className="ml-2 break-all">{profile.linkedinURL}</a></p>
                        {/* <p className="flex items-center md:justify-center mb-3"><SiGithub size={20} /> <a href={profile.githubURL} target="_blank" rel="noreferrer" className="ml-2">{profile.githubURL}</a></p> */}
                    </div>
                </div>
            </div>

            {/* Overlay (optional for darker text) */}
            <div className="absolute inset-0 bg-black/40 z-0" />
        </div>
    );
}
