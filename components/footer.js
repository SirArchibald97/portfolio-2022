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
                  <a href="https://twitch.tv/sirarchibald97"><FontAwesomeIcon icon={faTwitch} className="text-gray-300 hover:text-gray-700" /></a>
                  <a href="https://twitter.com/sirarchibald97"><FontAwesomeIcon icon={faTwitter} className="text-gray-300 hover:text-gray-700" /></a>
                  <a href="https://www.youtube.com/channel/@sirarchibald"><FontAwesomeIcon icon={faYoutube} className="text-gray-300 hover:text-gray-700" /></a>
                </div>
                    <div className="mt-8 lg:mt-0 lg:order-1">
                    <p className="text-center text-base text-gray-400">Crafted with <Link href="https://www.npmjs.com/package/random-emoji">{emoji}</Link></p>
                </div>
            </div>
        </footer>
    )
}
  