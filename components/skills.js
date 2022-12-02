import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faJsSquare, faHtml5, faCss3, faReact, faNodeJs, faJava, faPython } from "@fortawesome/free-brands-svg-icons"

const skills = [
    { name: "JavaScript", icon: faJsSquare, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "HTML5", icon: faHtml5, link: "https://developer.mozilla.org/en-US/docs/Web/HTMLcss" },
    { name: "CSS3", icon: faCss3, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "React", icon: faReact, link: "https://reactjs.org/" },
    { name: "Node.js", icon: faNodeJs, link: "https://nodejs.org/en/" },
    { name: "Tailw", icon: faNodeJs, link: "https://nodejs.org/en/" },
    { name: "Java", icon: faJava, link: "https://www.java.com/en/" },
    { name: "Python", icon: faPython, link: "https://www.python.org/" },
]

export default function Skills() {
    return (
        <div id="projects">
            <div className="text-center font-mono pt-16">
                <p className="mt-8 text-2xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-4xl">
                    Technologies I use
                </p>
            </div>
            <ul role="list" className="grid grid-cols-3 gap-6 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-7 lg:mx-96 mx-16 sm:mx-20 md:mx-52 my-14 font-mono">
                {skills.map((skill) => (
                    <a key={skill.name} href={skill.link}>
                        {
                            skill.svg ?
                                <svg className="text-gray-300 hover:text-gray-700 text-6xl" />
                            :
                                <FontAwesomeIcon icon={skill.icon} className="text-gray-300 hover:text-gray-700 text-6xl" />
                        }
                    </a>
                ))}
            </ul>
            <div className="border-b-2 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-5xl mx-auto"></div>
        </div>
    )
}