
export default function Sidebar(){
    return(
        <div className={"h-screen bg-gray-900 flex flex-col"}>
            <div className={"p-6 text-2xl font-bold"}>
                Bastin.Dev
            </div>
            <nav className={"mt-6"}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div className={"mt-auto border-t-2 border-gray-800 p-6 text-center text-gray-400 text-xs"}>
                &copy;{new Date().getFullYear()} Adam Bastin
                <br/>
                All Rights Reserved
            </div>
        </div>
    )
}