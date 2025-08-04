import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TypewriterText = ({ text, speed = 100 }) => {
    const [index, setIndex] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || index >= text.length) return;

        const timeout = setTimeout(() => {
            setIndex((prev) => prev + 1);
        }, speed);

        return () => clearTimeout(timeout);
    }, [index, isInView, text, speed]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[17px] text-justify"
        >
            {text.slice(0, index)}
            <span className="animate-pulse">|</span>
        </motion.div>
    );
};

export default TypewriterText;
