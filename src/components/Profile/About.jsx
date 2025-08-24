// import TypewriterText from "./TypewriterText";
import { motion } from "motion/react";

// const aboutmeText = `With over 15 years of hands-on experience in front-end development, expertise spans building responsive, high-performance web applications using ReactJS, modern JavaScript (ES6+), HTML5, and CSS3. Skilled in optimizing UI performance, managing complex state with tools like Redux or Context API, and designing scalable, component-driven architectures. Known for delivering clean, maintainable code while following best practices in accessibility, cross-browser support, and performance optimization. Passionate about translating complex requirements into smooth, user-centric digital experiences.`;

const aboutmeText = `Dynamic front-end developer with over 15 years of hands-on experience in crafting responsive, highperformance web applications using ReactJS, modern JavaScript (ES6+), HTML5, and CSS3. Expertise in optimizing UI performance, managing complex state with tools such as Redux and Context API, and designing scalable, component-driven architectures. Recognized for delivering clean, maintainable code while adhering to best practices in accessibility, cross-browser support, and performance optimization. A strong passion for transforming complex requirements into seamless, user-centric digital experiences drives continuous innovation and excellence in development.`;

export default function About() {
    return (
        <div className="px-[40px] pt-[60px] pb-[70px]">
            <div className="flex items-center gap-[20px] mb-[30px]">
                <h2 className="text-[24px] m-0 font-bold tracking-[0.5em]">ABOUT</h2>
                <div className="flex-grow h-[1px] bg-black"></div>
            </div>
            {/* <TypewriterText text={aboutmeText} speed={1} /> */}
            <motion.p 
                className="text-[20px]/1.8 font-light"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { duration: 5 }
                }}>
                    {aboutmeText}
            </motion.p>
        </div>
    )
}