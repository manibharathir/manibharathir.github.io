import { motion } from "motion/react";
import { useInView } from 'react-intersection-observer';

export default function TimelineItem({ item, index }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const variants = {
        hidden: {
            opacity: 0,
            x: item.side === 'left' ? -10 : 10,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };
    return (
        <motion.div
            className={`timeline-item relative w-[50%] py-[20px] md:px-[20px] box-border ${item.side} ${item.side === 'right' ? 'pl-8 pr-2' : 'pr-8 pl-2'}`}
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            >
                <div
                    className="timeline-content break-words bg-white/40 p-[20px] rounded-[10px]"
                >
                    <h4 className="text-white font-bold mb-[10px]">{item.year}</h4>
                    <h3 className="text-[18px] my-[5px] mx-0"><span className="text-[16px] font-bold">{item.position}</span> @ {item.organisation}</h3>
                    {/* <h4 className="text-[16px] my-[10px] mx-0 font-bold">{item.position}</h4> */}
                    {item.value !== "" && <p className="text-white text-3xl font-bold">{item.value}</p>}
                </div>
        </motion.div>
    )
}