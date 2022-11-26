import Header from "../components/header";
import About from "../components/about";
import Projects from "../components/projects";
import Footer from "../components/footer";
import Biscuits from "../components/biscuits";

import Head from 'next/head';

export default function Home() {
    const pageTitle = "SirArchibald.dev";
    const description = "Hey, I'm Archie!";

    return (
        <>
            <Head>
                <title>SirArchibald.dev</title>
                <meta property="og:title" content={pageTitle} key="ogtitle" />
                <meta property="og:description" content={description} key="ogdesc" />
            </Head>

            <Header />
            <About />
            <Projects />
            <Footer />
            <Biscuits />
        </>
    )
}