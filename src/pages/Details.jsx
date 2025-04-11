

 export default function Details(){
    return (
        <>
            <div className={"p-4 md:p-10"}>
                <div className={"border-solid border-1 grid grid-cols-3"}>
                    <div className={"col-span-1 pt-4 pl-10"}>
                        {/*Adam Bastin*/}
                        Website title
                    </div>
                    <div className={"col-span-2 text-right pt-4 pr-10"}>
                        Link / Link / Link / Link
                        {/*<a href="https://github.com/AdamBastin">Github</a> /*/}
                        {/*<a href="https://www.linkedin.com/in/adam-bastin-swe/">LinkedIn</a> /*/}
                        {/*<a href={"blog.html"}>Blog</a> /*/}
                        {/*<a href={"projects.html"}>Projects</a> /*/}
                        {/*<a href={"contact.html"}>Contact</a>*/}
                    </div>
                    <div className={"col-span-3 flex justify-center items-center text-4xl p-4 md:p-10"}>
                        Frontend for site
                    </div>
                    <div className={"col-span-1 border-solid border-1 border-r-0 border-l-0"}>
                        <div className={"text-lg/8 font-bold text-center"}>Projects</div>
                        <ul className={"list-none divide-solid divide-y"}>
                            <li className={"pl-1"}>Project 1</li>
                            <li className={"pl-1"}>Project 2</li>
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
                            <li className={"pl-1"}>Item 1</li>
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