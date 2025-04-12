import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {NavLink, Outlet, Route, Routes} from "react-router-dom";
import HomePage from "../pages/Home.jsx";

export default function Sidebar(){
    return(
        <div className={"h-screen bg-gray-900 flex flex-col xs:hidden"}>
            <div className={"p-6 text-2xl font-bold"}>
                Bastin.Dev
            </div>
            <div>
                <ul className={"flex flex-row justify-around flex-wrap"}>
                    <li>
                        <a href={"https://github.com/AdamBastin"}>
                            <FaGithub />
                        </a>
                    </li>
                    <li>
                        <a href={"https://linkedin.com/in/adam-bastin-swe"}>
                            <FaLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href={"mailto:AdamBastin98@gmail.com"}>
                            <MdEmail />
                        </a>
                    </li>
                </ul>
            </div>
            <nav className={"mt-6"}>
                <ul>

                        <NavLink className={"w-100"} to={"/"}>Home</NavLink>

                    <li>
                        <NavLink className={"w-full"} to={"/Portfolio"}>Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink className={"w-full"} to={"/Blog"}>Blog</NavLink>
                    </li>
                    <li>
                        <NavLink className={"w-full"} to={"/Contact"}>Contact</NavLink>
                    </li>

                </ul>
            </nav>
            <div className={"mt-auto border-t-2 border-gray-800 p-6 text-center text-gray-400 text-xs"}>
                &copy;{new Date().getFullYear()} Bastin.Dev
            </div>
        </div>
    )
}