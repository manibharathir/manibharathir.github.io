import MyInfo from './Profile/MyInfo';
import Logo from './Profile/Logo';
import Picture from './Profile/Picture';
import About from './Profile/About';

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
            <div className="h-inherit mt-[260px] md:mt-0 md:w-[50%]">
                <MyInfo profile={profile} />
                <About />
            </div>
            <div className="bg-[#8ea69b] h-[300px] md:h-[100vh] flex-column md:flex-row h-inherit md:w-[50%] fixed right-0 top-0">
                <Logo />
                <Picture />
            </div>
        </section>
    )
}