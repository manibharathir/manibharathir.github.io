import React, { useRef, useState } from "react";
import "./resume.css";

const Resume = React.forwardRef((props, ref) => (
    
    <div
        ref={ref}
        className="w-[850px] mx-auto font-sans text-sm text-gray-800 leading-relaxed border-l-[30px] border-teal-800 p-8 pb-0 print:p-[0.5in] print:pb-[0.3in]"
    >
        <section className="col-span-1 mt-1 flex flex-col justify-between header-section">
            <div>
                <h1 className="text-2xl font-bold tracking-wide text-black">
                    <span className="text-teal-800">MANI BHARATHI</span> RAJENDRAN
                </h1>
                <p className="mt-1 text-lg font-semibold text-teal-800">Principal Engineer | Full-Stack JavaScript & AI Solutions Architect</p>
            </div>
            {!props.isOwner && (
                <div className="mt-4 space-y-1 text-sm text-gray-700">
                    <p className="flex items-center">
                        <span className="font-semibold w-20">Mobile:</span> +91 9535876178
                    </p>
                    <p className="flex items-center">
                        <span className="font-semibold w-20">Location:</span> Bangalore, India
                    </p>
                    <p className="flex items-center">
                        <span className="font-semibold w-20">Email:</span> manibharathir@gmail.com
                    </p>
                    <p className="flex items-center">
                        <span className="font-semibold w-20">LinkedIn:</span>
                        <a
                            href="https://www.linkedin.com/in/manibharathir/"
                            className="text-teal-700 underline hover:text-teal-900"
                        >
                            linkedin.com/in/manibharathir
                        </a>
                    </p>
                </div>
            )}
        </section>
        <section className="mt-6 summary-section">
            <h2 className="text-lg font-bold text-teal-800 border-b pb-1">
                Professional Summary
            </h2>
            <p className="mt-2 text-justify pl-6">
                <p className="mb-1">
                    <strong>Senior Frontend Engineer</strong> with 15+ years of experience in building scalable, high-performance web applications using React.js, JavaScript (ES6+), HTML5, and CSS3.
                </p>

                <p className="mb-1">
                    Expertise in UI performance optimization, advanced state management using Redux and Context API, and developing component-based architectures for maintainable and reusable code.
                </p>

                <p className="mb-1">
                    Strong focus on clean coding practices, accessibility standards, cross-browser compatibility, and performance optimization.
                </p>

                <p className="mb-1">
                    Experience in leveraging AI-assisted tools such as GitHub Copilot, Cursor AI, and ChatGPT to improve development efficiency and code quality.
                </p>
                {/* Seasoned full-stack engineer with 15+ years of expertise crafting scalable, high-performance web applications using modern JavaScript (React.js, Node.js, Express.js), HTML5, and CSS3. Specialist in UI performance optimization, advanced state management (Redux, Context API), and component-driven architectures. Passionate AI-driven development advocate, leveraging GitHub Copilot, Cursor AI, and ChatGPT to accelerate development velocity, enhance code quality, and drive innovative solutions. Committed to clean code, accessibility standards, cross-browser compatibility, and best practices. Proven ability to transform intricate requirements into seamless, user-centric digital experiences while mentoring teams and driving technical excellence. */}
            </p>
        </section>

        <section className="mt-6 skills-section">
            <h2 className="text-lg font-bold text-teal-800 border-b pb-1">
                Skills
            </h2>
            <div className="grid grid-cols-1 gap-4 mt-3 text-sm pl-6">
                <ul className="space-y-2 list-disc list-inside">
                    <li><b>Web Technologies:</b> HTML5, CSS3, JavaScript (ES6+), TypeScript</li>
                    <li><b>Frontend Frameworks & Libraries:</b> React.js, Next.js, Redux, Context API, Tailwind CSS, Bootstrap</li>
                    <li><b>Frontend Architecture:</b> Component-driven architecture, Micro-frontends (Webpack Module Federation), State Management, Performance Optimization, Responsive Design</li>
                    <li><b>Backend & Integration (Growing Proficiency):</b> Node.js, Express.js, REST API development, API integration, Authentication (JWT-based)</li>
                    <li><b>AI-Assisted Development:</b> Using GitHub Copilot, Cursor AI, and ChatGPT for code generation, debugging, refactoring, and accelerating development workflows</li>
                    <li><b>Build & Tooling:</b> Webpack, Vite, Babel, NPM/Yarn</li>
                    <li><b>Testing:</b> Jest, React Testing Library</li>
                    <li><b>Debugging & Performance Tools:</b> Chrome DevTools, React Developer Tools, Redux DevTools, Lighthouse</li>
                    <li><b>Version Control:</b> Git, GitHub, Bitbucket</li>
                    <li><b>Project Management & Collaboration:</b> JIRA, Agile (Scrum), Cross-team collaboration, Code Reviews, Mentoring</li>
                </ul>
            </div>
        </section>

        <section className={`mt-6 ${props.isOwner ? 'education-section' : ''}`}>
            <h2 className="text-lg font-bold text-teal-800 border-b pb-1">
                Education
            </h2>
            <div className="mt-2 space-y-2 pl-6">
                <p>
                    <span className="font-semibold">Bachelor Of Engineering:</span>{" "}
                    Computer Science <br />
                    Arulmigu Kalasalingam College Of Engineering, Tamil Nadu, May 2010{" "}
                    <br />
                    GPA: 71.24
                </p>
                <p>
                    <span className="font-semibold">Higher Secondary:</span> MSP Solai
                    Nadar Memorial Higher Secondary School, Tamil Nadu, May 2006 <br />
                    GPA: 82.33
                </p>
                <p>
                    <span className="font-semibold">Secondary:</span> SMB ManickaNadar
                    Packiathammal Matriculation Higher Secondary School, Tamil Nadu,
                    May 2004 <br />
                    GPA: 89.5
                </p>
            </div>
        </section>
        <section className={`mt-6 print:mt-16 current-work-section ${props.isOwner ? 'work-section' : ''}`}>
            <h2 className="text-lg font-bold text-teal-800 border-b pb-1">
                Current Work
            </h2>
            <div className="mt-3 pl-6">
                <h4 className="font-bold text-[17px] text-gray-900">
                    Associate Consultant | Full-Stack Engineer (June 2021 - Present)
                </h4>
                <p className="text-[14px] text-gray-600 mt-1 mb-3">Tata Consultancy Services, Bangalore</p>
                <p className="font-semibold text-[14px] mt-3 mb-2">Projects :</p>
                <ul className="list-disc list-inside mt-1 space-y-1 text-[13px] pl-6">
                    <li><b>Sales Dashboard :</b> Led end-to-end Desktop UI development and production support for a client's internal product management tool serving 5000+ active users. Architected scalable component-based system reducing page load time by 40% and improving user satisfaction. Spearheaded multiple POCs across product streams, mentored team of 3 engineers, and established UI best practices resulting in 50% faster feature delivery.</li>
                    <li><b>Leadership Dashboard :</b> Architected and implemented micro-frontend ecosystem using Webpack Module Federation, enabling 4+ independent teams to deploy features simultaneously without coordination. Achieved 35% improvement in bundle size optimization and 60% reduction in cross-team dependencies. Designed scalable REST API integration layer supporting real-time data synchronization for executive dashboards.</li>
                </ul>
            </div>
        </section>
        <section className="mt-6 work-history-section">
            <h2 className="text-lg font-bold text-teal-800 border-b pb-1">
                Work History
            </h2>
            <div className="mt-6 pl-6">
                <h4 className="font-bold text-[17px] text-gray-900">
                    Technical Lead (March 2020 - June 2021)
                </h4>
                <p className="text-[14px] text-gray-600 mt-1 mb-3">Quest Global, Bangalore</p>
                <p className="font-semibold text-[14px] mt-3 mb-2">Key Achievements:</p>
                <ul className="list-disc list-inside mt-1 space-y-1 text-[13px] pl-6">
                    <li><b>Publisher & Generic System (PGS) :</b> Engineered frontend components for Singapore-based mail service application processing 50,000+ deliveries monthly. Implemented advanced form validation reducing delivery errors by 25% and improving user experience for both domestic and international logistics.</li>
                    <li><b>Sales Dashboard :</b> Architected responsive desktop UI for enterprise product management platform serving 5000+ concurrent users. Optimized UI rendering pipeline achieving 45% faster interaction response times and mentoring junior engineers on performance best practices.</li>
                </ul>
            </div>
            <div className="mt-6 pl-6">
                <h4 className="font-bold text-[17px] text-gray-900">
                    Lead Engineer (June 2014 - February 2020)
                </h4>
                <p className="text-[14px] text-gray-600 mt-1 mb-3">Compassites Software Solutions, Bangalore</p>
                <p className="font-semibold text-[14px] mt-3 mb-2">Key Achievements:</p>
                <ul className="list-disc list-inside mt-1 space-y-1 text-[13px] pl-6">
                    <li><b>Plutora :</b> Contributed to enterprise software delivery dashboard serving 500+ organizations. Optimized React component rendering and state management, reducing page load time by 35% and improving dashboard responsiveness for 100,000+ daily users.</li>
                    <li><b>JustOneClick :</b> Full-stack development of Singapore-based air ticket booking platform for marine travelers. Implemented complex multi-step booking workflow with real-time inventory sync, increasing conversion rate by 30% and processing 10,000+ monthly transactions.</li>
                    <li><b>Enchanting Travels :</b> Architected personalized travel itinerary platform with PDF generation. Built intelligent recommendation engine reducing user planning time by 50% and generating 5,000+ customized travel guides monthly.</li>
                    <li><b>Additional Impact :</b> Led frontend architecture decisions across 7 enterprise products, mentored team of developers, and established component design system adopted across organization.</li>
                </ul>
            </div>
            <div className="mt-6 pl-6">
                <h4 className="font-bold text-[17px] text-gray-900">
                    Front End Software Engineer (August 2010 - May 2014)
                </h4>
                <p className="text-[14px] text-gray-600 mt-1 mb-3">HCL Technologies, Bangalore</p>
                <p className="font-semibold text-[14px] mt-3 mb-2">Key Achievements:</p>
                <ul className="list-disc list-inside mt-1 space-y-1 text-[13px] pl-6">
                    <li><b>Custom Advertising Solutions for Yahoo :</b> Delivered high-performance custom brand experiences and interactive advertiser content integrated into Yahoo! properties. Optimized ad delivery performance achieving 99.9% uptime and supporting 1M+ daily impressions with sub-100ms rendering.</li>
                </ul>
            </div>
        </section>

        <section className="mt-6 print:mt-16 print:mb-20 personal-details-section">
            <h2 className="text-lg font-bold text-teal-800 border-b pb-1">
                Personal Details
            </h2>
            <div className="text-sm leading-7 mt-2 pl-6">
                <p className="flex items-center">
                    <span className="font-semibold w-32">Father's Name:</span> Mr. AR. S. Rajendran
                </p>
                <p className="flex items-center">
                    <span className="font-semibold w-32">Date of Birth:</span> 16-02-1989
                </p>
                <p className="flex items-center">
                    <span className="font-semibold w-32">Languages Known:</span> English, Tamil, Malayalam, Kannada
                </p>
                <p className="flex items-center">
                    <span className="font-semibold w-32">Permanent Address:</span> 17/1, Scheme Road, RV Nagar, Dindigul-624002.
                </p>
            </div>
        </section>

        <section className="mt-16 flex justify-between items-end signature-section">
            <div>
                <p className="mb-1">Date : {props.todayDate}</p>
                <p>Place: Bangalore</p>
            </div>
            <div>
                <p className="border-b-2 mb-1"></p>
                <p>Mani Bharathi Rajendran</p>
            </div>
        </section>
        {/* </div> */}
    </div >
));

export default function ResumeWrapper() {
    const resumeRef = useRef();
    const todayDate = new Date().toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const [isOwner, setIsOwner] = useState(false);
    
    const handleLogoClick = (e) => {
        console.log("isOwner",isOwner);
        if (e.shiftKey) {
            setIsOwner(true);
        }
    };

    return (
        <div className="" onClick={handleLogoClick}>
            <button
                // onClick={handlePrint}
                onClick={() => window.print()}
                className="fixed top-3 right-3 mb-6 px-4 py-2 bg-teal-700 text-white rounded-lg shadow hover:bg-teal-900 downloadPDF"
            >
                Download PDF
            </button>
            <Resume ref={resumeRef} todayDate={todayDate} isOwner={isOwner} />
        </div>
    );
}