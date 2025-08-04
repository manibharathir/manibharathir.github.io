import TypewriterText from "./TypewriterText";

const aboutmeText = `With over 15 years of hands-on experience in front-end development, expertise spans building responsive, high-performance web applications using ReactJS, modern JavaScript (ES6+), HTML5, and CSS3. Skilled in optimizing UI performance, managing complex state with tools like Redux or Context API, and designing scalable, component-driven architectures. Known for delivering clean, maintainable code while following best practices in accessibility, cross-browser support, and performance optimization. Passionate about translating complex requirements into smooth, user-centric digital experiences.`;

export default function About() {
    return (
        <div className="about-me">
            <div className="heading">
                <h2>ABOUT</h2>
                <div className="line"></div>
            </div>
            <TypewriterText text={aboutmeText} speed={3} />
            {/* <p>
                {aboutmeText}
            </p> */}
        </div>
    )
}