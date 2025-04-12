import "./Portfolio.css"

 export default function Portfolio(){
    return (
        <>
            <h1>Portfolio</h1>
            <div className={"md:p-10"}>
                <div className={"border-solid border-1 grid grid-cols-3 bg-gray-800"}>
                    <div className={"col-span-1 m-auto text-left ml-4 text-2xl font-semibold"}>
                        Adam Bastin
                    </div>
                    <div className={"col-span-2 pt-4 pr-10 flex justify-around overflow-hidden"}>
                        {/*
                        When clicking a link, have it popup asking
                        if they would like to see source code on GitHub
                        or writeup on this website
                        */}
                        <a className={"Portfolio-Link"} href="https://github.com/AdamBastin"><div>GitHub</div></a>
                        <a className={"Portfolio-Link"} href="https://www.linkedin.com/in/adam-bastin-swe/">LinkedIn</a>
                        <a className={"Portfolio-Link"} href={"blog.html"}>Blog</a>
                        <a className={"Portfolio-Link"} href={"projects.html"}>Projects</a>
                        <a className={"Portfolio-Link"} href={"contact.html"}>Contact</a>
                    </div>
                    <div className={"col-span-3 flex justify-center items-center text-4xl p-4 md:p-10"}>
                        Full Stack Developer
                    </div>
                    <div className={"col-span-1 border-solid border-1 border-r-0 border-l-0"}>
                        <div className={"text-lg/8 font-bold text-center"}>Projects</div>
                        <ul className={"list-none divide-solid divide-y text-left"}>
                            <li className={"pl-1"}>Bastin.Dev</li>
                            <li className={"pl-1"}>Knox Device Map</li>
                            <li className={"pl-1"}>Project 3</li>
                        </ul>
                    </div>
                    <div className={"col-span-1 border-solid border-1 border-r-0"}>
                        <div className={"text-lg/8 font-bold text-center"}>Experience</div>
                        <ul className={"list-none divide-solid divide-y"}>
                            <li className={"pl-1"}>Item 1</li>
                            <li className={"pl-1"}>Item 2</li>
                            <li className={"pl-1"}>Item 3</li>
                        </ul>
                    </div>
                    <div className={"col-span-1 border-solid border-1"}>
                        <div className={"text-lg/8 font-bold text-center"}>Education</div>
                        <ul className={"list-none divide-solid divide-y"}>
                            <li>B.S. Computer Science<br/>Western Governors University</li>
                        </ul>
                    </div>
                    <div className={"col-span-3 text-center p-4"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <div className={"col-span-3 border-solid border-t-1"}>

                    </div>
                </div>
            </div>
        </>
    )
}