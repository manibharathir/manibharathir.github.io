import { FaCode, FaTools, FaProjectDiagram, FaCss3Alt } from 'react-icons/fa';
import { SiGithub, SiRedux } from 'react-icons/si';

const skills = [
    {
        title: "Scripting Languages",
        icon: <FaCode size={30} />,
        items: ["JavaScript", "TypeScript", "Python (basic)"]
    },
    {
        title: "Web Technologies",
        icon: <FaCss3Alt size={30} />,
        items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "DOM", "REST APIs", "JSON"]
    },
    {
        title: "Frameworks",
        icon: <SiRedux size={30} />,
        items: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Bootstrap", "Material UI", "Jest", "React Testing Library"]
    },
    {
        title: "Version Control",
        icon: <SiGithub size={30} />,
        items: ["Git", "GitHub", "Bitbucket"]
    },
    {
        title: "Debugging Tools",
        icon: <FaTools size={30} />,
        items: ["Chrome DevTools", "React Developer Tools", "Redux DevTools", "VSCode Debugger"]
    },
    {
        title: "Project Management",
        icon: <FaProjectDiagram size={30} />,
        items: ["JIRA", "Trello"]
    }
];

export default function Skills() {
    return (
        <section className="p-10 bg-gray-100 dark:bg-gray-900">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
                🧠 Technical Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {skills.map((skill, idx) => (
                    <div key={idx} className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg transition hover:shadow-xl hover:-translate-y-1">
                        <div className="flex items-center gap-4 mb-4 text-indigo-600 dark:text-indigo-400">
                            {skill.icon}
                            <h3 className="text-xl font-semibold text-gray-700 dark:text-white">
                                {skill.title}
                            </h3>
                        </div>
                        <ul className="list-disc ml-10 text-gray-600 dark:text-gray-300 text-sm space-y-1">
                            {skill.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
