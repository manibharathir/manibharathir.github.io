import { motion } from "motion/react";

export default function About({profile}) {
    return (
        <motion.section 
            className="about-me" 
            initial={{ opacity: 0 }} 
            animate={{ 
                opacity: 1,
                transition: { duration: 4 }
            }}>
                <div className="card">
                    <h1 className="name mb-12">{profile.name}</h1>
                    <h2 className="role">{profile.position}</h2>
                    <div className="contact-info">
                        <p><strong>Phone : </strong> {profile.stdCode}-{profile.mobile}</p>
                        <p><strong>Email : </strong> {profile.email}</p>
                        <p><strong>Address : </strong> {profile.address}</p>
                    </div>
                    <div class="socials">
                        <a href={profile.linkedinURL} target="_blank">
                            <button class="icon-btn linkedin">
                                {/* <i class="fa fa-linkedin"></i> */}
                                LinkedIn
                            </button>
                        </a>
                        <a href={profile.githubURL} target="_blank">
                            <button class="icon-btn github">
                                {/* <i class="fa fa-github"></i> */}
                                Github
                            </button>
                        </a>
                    </div>
                    {/* <p className="cv-link">See full CV Soon <span>↓</span></p> */}
                </div>
        </motion.section>
    )
}