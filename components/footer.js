import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitch, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import Link from "next/link";

const randomEmoji = require("random-emoji");

export default function Footer() {
    const [emoji, setEmoji] = useState(null);
    useEffect(() => {
       setEmoji(randomEmoji.random({ count: 1})[0].character);
    }, []);

    return (
        <footer className="bg-white font-mono">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8">
                <div className="flex justify-center space-x-6 lg:order-2 text-xl">
                    <a href="https://twitch.tv/sirarchibald97">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitch stroke-gray-300 hover:stroke-gray-500" width="42" height="42" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M4 5v11a1 1 0 0 0 1 1h2v4l4 -4h5.584c.266 0 .52 -.105 .707 -.293l2.415 -2.414c.187 -.188 .293 -.442 .293 -.708v-8.585a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1z" />
                            <line x1="16" y1="8" x2="16" y2="12" />
                            <line x1="12" y1="8" x2="12" y2="12" />
                        </svg>
                    </a>
                    <a href="https://www.youtube.com/channel/@sirarchibald">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-youtube stroke-gray-300 hover:stroke-gray-500" width="42" height="42" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <rect x="3" y="5" width="18" height="14" rx="4" />
                            <path d="M10 9l5 3l-5 3z" />
                        </svg>
                    </a>
                    <a href="https://twitter.com/sirarchibald97">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter stroke-gray-300 hover:stroke-gray-500" width="42" height="42" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                        </svg>
                    </a>
                    <a href="https://github.com/sirarchibald97">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github stroke-gray-300 hover:stroke-gray-500" width="42" height="42" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                        </svg>
                    </a>
                </div>
                <div className="mt-8 lg:mt-0 lg:order-1 flex flex-col">
                    <Link href="https://www.npmjs.com/package/random-emoji"><p className="text-center text-base text-gray-400 hover:text-gray-500 hover:underline pr-2">Crafted with {emoji}</p></Link>
                    <Link href="https://github.com/SirArchibald97/portfolio"><p className="text-gray-400 hover:text-gray-500 hover:underline">[GitHub]</p></Link>
                </div>
            </div>
        </footer>
    )
}
  