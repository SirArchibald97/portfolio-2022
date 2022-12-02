import { LinkIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

const projects = [
    {
        name: 'Blairs Brainiacs',
        desc: 'Custom tailored moderation and economy systems for the largest UK based education Discord community.',
        imageUrl: '/blairsbrainiacs_logo.png',
        link: "https://discord.gg/blairsbrainiacs"
    },
    {
        name: 'Cent\'s Lounge',
        desc: 'Discord based economy and moderation systems build to client specifications.',
        imageUrl: '/centslounge_logo.jpg',
        link: "https://discord.gg/centranos"
    },
    {
        name: '???',
        desc: 'Coming Soon™',
        imageUrl: '/unnamed.jpg',
        link: "/"
    },
    {
        name: '???',
        desc: 'Coming Soon™',
        imageUrl: '/unnamed.jpg',
        link: "/"
    },
    {
        name: '???',
        desc: 'Coming Soon™',
        imageUrl: '/unnamed.jpg',
        link: "/"
    },
    {
        name: '???',
        desc: 'Coming Soon™',
        imageUrl: '/unnamed.jpg',
        link: "/"
    },
]

export default function Projects() {
    return (
        <div id="projects">
            <div className="text-center font-mono pt-16">
                <p className="mt-8 text-2xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-4xl">
                    Projects I&apos;ve worked on
                </p>
            </div>
            <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 mx-16 sm:mx-20 md:mx-52 my-14 font-mono">
                {projects.map((project) => (
                    <li
                        key={project.name}
                        className="col-span-1 flex flex-col text-center bg-gray-100 divide-y divide-gray-200 sm:transform hover:translate-x-2 hover:translate-y-2 ease-in-out duration-75 rounded-xl"
                    >
                        <div className="flex-1 flex flex-col p-8">
                            <Image className="w-32 h-32 flex-shrink-0 mx-auto rounded-lg" width="512" height="512" src={project.imageUrl} alt="" />
                            <h3 className="mt-6 text-gray-900 text-md font-bold">{project.name}</h3>
                            <dl className="mt-1 flex-grow flex flex-col justify-between">
                                <dt className="sr-only">Description</dt>
                                <dd className="text-gray-500 text-sm">{project.desc}</dd>
                            </dl>
                        </div>
                        <div>
                            <div className="-mt-px flex divide-x divide-gray-200 bg-slate-300 hover:bg-slate-400 hover:underline rounded-b-xl duration-75">
                                <div className="w-0 flex-1 flex">
                                    <a
                                    href={project.link}
                                    target={project.link === "/" ? "_self" : "_blank"}
                                    rel="noreferrer"
                                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-slate-800 font-medium border border-transparent"
                                    >
                                        <LinkIcon className="w-5 h-5 text-gray-600" aria-hidden="true" />
                                        <span className="ml-3">Link</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="border-b-2 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-5xl mx-auto"></div>
        </div>
    )
}