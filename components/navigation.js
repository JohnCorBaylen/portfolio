import { BsFillMoonStarsFill } from "react-icons/bs"
import { useState } from "react"

export default function Navigation () {
    // const [darkMode, setDarkMode] = useState(false)

    return(
        <section className="bg-white p-7 dark:bg-gray-900 z-50 border-b-2 border-b-gray fixed top-0 left-0 right-0">
            <nav className="flex justify-between dark:text-white">
                <h1 className="font-burtons font-black text-xl ml-8">John Cor Baylen</h1>
                <ul className="flex space-x-8 font-semibold ">
                    <li className="hover:text-teal-600 dark:hover:text-teal-400 cursor-pointer">
                        <a href="#home">
                            Home
                        </a>
                    </li>
                    <li className="hover:text-teal-600 dark:hover:text-teal-400 cursor-pointer">
                        <a href="#tech-stacks">
                            Tech Stacks
                        </a>
                    </li>
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
    )
}