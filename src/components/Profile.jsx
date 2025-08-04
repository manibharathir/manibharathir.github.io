import About from './Profile/About';
import Logo from './Profile/Logo';
import Picture from './Profile/Picture';

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

export default function Profile() {
    return (
        <section className="flex h-full flex-col-reverse md:flex-row">
            <div className="md:flex-1 h-inherit">
                <About profile={profile} />
            </div>
            <div className="bg-[#8ea69b] h-[160px] md:h-auto md:flex-1 flex-column md:flex-row h-inherit">
                <Logo />
                <Picture />
            </div>
        </section>
    )
}