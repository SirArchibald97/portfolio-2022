import { useState, useEffect } from 'react';

export default function About() {
    const [age, setAge] = useState(19);

    useEffect(() => {
        const today = new Date();
        const birthDate = new Date("2003-06-23");
        const m = today.getMonth() - birthDate.getMonth();

        let age = today.getFullYear() - birthDate.getFullYear();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        setAge(age);
    }, []);

    return (
        <div id="about">
            <div
                className="mx-16 sm:mx-20 md:mx-52 font-mono text-center bg-gray-100 divide-y divide-gray-200 rounded-xl shadow-lg"
            >
                <div className="flex-1 flex flex-col p-8">
                    <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 sm:tracking-tight underline decoration-4">
                        Hey, I&apos;m Archie!
                    </p>
                    <p className="text-xl font-normal text-gray-500 sm:text-xl sm:tracking-tight lg:text-xl pt-12">
                        I&apos;m a{(age === 18 || (age > 79 && age < 90)) ? "n" : ""} {age} year old developer from the UK. I am studying Software Engineering at university and I also do small bits of freelance development in my spare time, as well as coding my own projects.
                        Outside of programming, I am also an avid gamer, streamer, and reader, and I love hanging out with people online!
                    </p>
                </div>
            </div>
        </div>
    )
}