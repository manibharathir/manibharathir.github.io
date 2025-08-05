import { motion } from "motion/react";
import ProfilePic from '../../assets/images/profile_pic.jpg';

export default function Picture() {
    return (
        <motion.div 
            className='justify-self-center relative md:top-[calc(100vh/5)]' 
            initial={{ opacity: 0 }} 
            animate={{ 
                opacity: 1,
                transition: { duration: 2 }
            }}>
                <img src={ProfilePic} className='relative left-[27%] w-[40%] md:w-[60%] rounded-md' />
        </motion.div>
    )
}