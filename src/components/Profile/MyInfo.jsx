import { motion } from "motion/react";

export default function MyInfo({ profile }) {
    return (
        <motion.section
            className="my-info"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { duration: 5 }
            }}>
            <div className="card">
                <h1 className="name mb-12">{profile.name}</h1>
                <h2 className="role">{profile.position}</h2>
                <div className="contact-info">
                    <p><strong>Phone : </strong> {profile.stdCode}-{profile.mobile}</p>
                    <p><strong>Email : </strong> {profile.email}</p>
                    <p><strong>Address : </strong> {profile.address}</p>
                </div>
                <div className="socials">
                    <a href={profile.linkedinURL} target="_blank">
                        <button className="icon-btn linkedin">
                            {/* <i class="fa fa-linkedin"></i> */}
                            LinkedIn
                        </button>
                    </a>
                    <a href={profile.githubURL} target="_blank">
                        <button className="icon-btn github">
                            {/* <i class="fa fa-github"></i> */}
                            Github
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