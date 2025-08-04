import ProfilePic from '../assets/images/profile_pic.jpg';
import About from './About';
import Logo from './Logo';
import { motion } from "motion/react";

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

export default function Content() {
    return (
        <section className="flex h-full flex-col-reverse md:flex-row">
            <div className="md:flex-1 h-inherit">
                <About profile={profile} />
            </div>
            <div className="bg-[#8ea69b] h-[160px] md:h-auto md:flex-1 flex-column md:flex-row h-inherit">
                <div className='p-[10px]'>
                    <Logo />
                </div>
                <motion.div 
                    className='justify-self-center relative md:top-[calc(100vh/5)]' 
                    initial={{ opacity: 0 }} 
                    animate={{ 
                        opacity: 1,
                        transition: { duration: 2 }
                    }}>
                        <img src={ProfilePic} className='w-[35%] md:w-[55%] rounded-md justify-self-center' />
                </motion.div>
            </div>
        </section>
    )
}