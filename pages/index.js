import Head from "next/head"
import Image from "next/image"
import { AiFillLinkedin, AiFillGithub} from "react-icons/ai"
import { BsFillMoonStarsFill } from "react-icons/bs"
import { useState } from "react"

import deved from "../public/my-photo.jpg"

import { Primary } from "./tech-stacks/primary"
import { WordPress } from "./tech-stacks/wordpress"
import { MobileApp } from "./tech-stacks/mobile-app-development"
import { CSSFramework } from "./tech-stacks/css-framework"
import { UiUx } from "./tech-stacks/ui-ux"
import { APITesting } from "./tech-stacks/api-testing"
import { VersionControl } from "./tech-stacks/version-control"
import { Ide } from "./tech-stacks/ide"
import { Os } from "./tech-stacks/os"
import { Other} from "./tech-stacks/other-learning"

export default function Home() {
    const [darkMode, setDarkMode] = useState(false)

    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>John Cor Baylen | Front-end Developer</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/computer.png" />
            </Head>
            <section className="bg-white p-7 dark:bg-gray-900 z-50 border-b-2 border-b-gray fixed top-0 left-0 right-0">
                <nav className="flex justify-between dark:text-white">
                    <h1 className="font-burtons font-black text-xl ml-8">John Cor Baylen</h1>
                    <ul className="flex space-x-8 font-semibold ">
                        <li className="hover:text-teal-600 dark:hover:text-teal-400 cursor-pointer">
                            <a href="#home">
                                Home
                            </a>
                        </li>
                        {/* <li className="hover:text-teal-600 dark:hover:text-teal-400 cursor-pointer">
                            <a href="#tech-stacks">
                                Tech Stacks
                            </a>
                        </li> */}
                        <li className="hover:text-teal-600 dark:hover:text-teal-400 cursor-pointer">
                            <a href="#about">
                                About
                            </a>
                        </li>
                        <li className="hover:text-teal-600 dark:hover:text-teal-400 cursor-pointer">
                            <a href="#project">
                                Projects
                            </a>
                        </li>
                        <li className="hover:text-teal-600 dark:hover:text-teal-400 cursor-pointer">
                            <a href="#contact">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a
                                className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                                href="John-Cor-Baylen_Resume.docx"
                                download="John-Cor-Baylen_Resume"
                            >
                                Resume
                            </a>
                        </li>
                        <li>
                            <BsFillMoonStarsFill
                                onClick={() => setDarkMode(!darkMode)}
                                className=" cursor-pointer text-2xl"
                            />
                        </li>
                    </ul>
                </nav>
            </section>
            <main className="bg-white dark:bg-gray-900 flex-col justify-center items-center">
                <section 
                    className="flex pt-32 pb-14 justify-center items-center w-4/5 mx-auto"
                    // md:px-20 lg:px-40
                    id="home"
                >
                    <div className="inline-flex justify-between items-center w-full">
                        <div className="text-center">
                            <h2 className="text-5xl py-2 font-extrabold text-teal-600 dark:text-teal-400 md:text-6xl">
                                Front-End Developer 
                            </h2>
                            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                                Hi, I am John Cor Baylen. A passionate Front-end Developer based in Malabon, Metropolitan Manila, Philippines.
                            </p>
                            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                                <a 
                                    href="https://linkedin.com/in/john-cor-baylen-a673b6280/" 
                                    rel="noopener noreferrer" 
                                    target="_blank"
                                >
                                    <AiFillLinkedin />  
                                </a>    
                                <a 
                                    href="https://github.com/JohnCorBaylen" 
                                    rel="noopener noreferrer" 
                                    target="_blank"
                                >
                                    <AiFillGithub />
                                </a>
                            </div>
                        </div>
                        <div className="p-10">
                            <div className="rounded-full w-80 h-80 relative overflow-hidden md:h-96 md:w-96">
                                <Image 
                                src={deved} 
                                layout="fill" 
                                objectFit="cover" 
                                alt="" 
                            />
                            </div>
                        </div>
                    </div>
                </section>
                <section 
                    className="bg-slate-100 text-gray-800 dark:text-gray-200 dark:bg-gray-800 flex justify-center items-center pb-10 w-full h-full"
                    id="tech-stacks"
                >
                    <div className="flex flex-col w-4/5">
                        <h3 
                            className="text-xl py-10 font-extrabold text-teal-600 dark:text-teal-400 md:text-3xl"
                        >
                            Tech Stack
                        </h3>
                        <div className="flex flex-col gap-y-4">
                            <Primary/>
                            <WordPress/>
                            <MobileApp/>
                            <CSSFramework/>
                            <UiUx/>
                            <APITesting/>
                            <VersionControl/>
                            <Ide/>
                            <Os/>
                            <Other/>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
