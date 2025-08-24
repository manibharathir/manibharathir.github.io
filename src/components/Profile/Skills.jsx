import { FaCode, FaTools, FaProjectDiagram, FaCss3Alt, FaStar } from 'react-icons/fa';
import { SiGithub, SiRedux } from 'react-icons/si';

const skills = [
    {
        title: "Web Technologies",
        icon: <FaCss3Alt size={30} />,
        items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"]
    },
    {
        title: "Frameworks",
        icon: <SiRedux size={30} />,
        items: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Bootstrap", "Jest", "React Testing Library"]
    },
    {
        title: "Debugging Tools",
        icon: <FaTools size={30} />,
        items: ["Chrome DevTools", "React Developer Tools", "Redux DevTools", "VSCode Debugger"]
    },
    {
        title: "Core Professional Skills",
        icon: <FaStar size={30} />,
        items: ["Problem-solving", "Planning and execution", "Leadership & Team Management"]
    },
    {
        title: "Version Control",
        icon: <SiGithub size={30} />,
        items: ["Git", "GitHub", "Bitbucket"]
    },
    {
        title: "Project Management",
        icon: <FaProjectDiagram size={30} />,
        items: ["JIRA", "Trello"]
    }
    // {
    //     title: "Scripting Languages",
    //     icon: <FaCode size={30} />,
    //     items: ["JavaScript", "TypeScript", "Python (basic)"]
    // },
    // {
    //     title: "Operating Systems",
    //     icon: <FaLaptopCode size={30} />,
    //     items: ["macOS", "Windows", "Linux (Ubuntu)"]
    // },
    // {
    //     title: "Bug Tracking",
    //     icon: <FaBug size={30} />,
    //     items: ["JIRA", "GitHub Issues"]
    // },
    // {
    //     title: "Agile Tool",
    //     icon: <SiJirasoftware size={30} />,
    //     items: ["JIRA"]
    // },
    // {
    //     title: "Front-end / Design Tools",
    //     icon: <SiPostman size={30} />,
    //     items: ["Postman", "Vite", "Create React App"]
    // },
];

export default function Skills() {
    return (
        <section className="p-10 bg-gray-100 dark:bg-gray-900">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
                Technical Skills
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
