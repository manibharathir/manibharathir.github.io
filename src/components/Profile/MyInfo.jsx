import { motion } from "motion/react";
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

export default function MyInfo({ profile }) {
    return (
        <motion.section
            className="my-info"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { duration: 5 }
            }}>
            <div className="pt-[60px] px-[40px] pb-[40px] text-left leading-[1.6]">
                <h1 className="text-[2.8rem] leading-[3.5rem] font-bold mb-[30px]">{profile.name}</h1>
                <h2 className="role text-[1.5rem] font-normal mt-[5px] mb-[30px]">{profile.position}</h2>
                <div className="contact-info">
                    <p><strong>Phone : </strong> {profile.stdCode}-{profile.mobile}</p>
                    <p><strong>Email : </strong> {profile.email}</p>
                    <p><strong>Address : </strong> {profile.address}</p>
                </div>
                <div className="mt-4 mb-2">
                    <a href={profile.linkedinURL} target="_blank" rel="noreferrer">
                        <button className="mr-3 linkedin text-[#0077b5]">
                            <FaLinkedin size={30} />
                        </button>
                    </a>
                    <a href={profile.githubURL} target="_blank" rel="noreferrer">
                        <button className="github text-black">
                            <SiGithub size={30} />
                        </button>
                    </a>
                </div>
                {/* <p className="cv-link">
                    Full CV
                    <motion.span animate={{
                        y: [0, -10, 0], // bounce up and return
                    }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="flex justify-center items-center mt-10 text-gray-600 ml-1">↓</motion.span>
                </p> */}
            </div>
        </motion.section>
    )
}