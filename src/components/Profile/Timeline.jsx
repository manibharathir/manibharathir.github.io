import TimelineItem from './TimelineItem';

export default function Timeline({items, title}) {
    return (
        <section className="relative py-[10px] px-4 md:px-[20px] bg-black/60">
            <h2 className='text-white font-bold text-[48px] text-center'>{title}</h2>
            <div className="timeline relative max-w-[900px] mx-auto my-[50px]">
                {items.map((item, index) => (
                    <TimelineItem key={index} item={item} index={index} />
                ))}
            </div>
        </section>
    )
}