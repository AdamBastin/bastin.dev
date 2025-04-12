import Sidebar from "./components/Sidebar";
import Portfolio from "./pages/Portfolio.jsx";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Contact from "./pages/Contact.jsx";
import HomePage from "./pages/Home.jsx";
import Blog from "./pages/Blog.jsx";

function App() {

    return (
        <BrowserRouter>
            <div className={"flex"}>
                <div className={"flex-none w-40 2xl:w-90 sidebar text-xl"}>
                    <Sidebar />
                </div>
                <main className={
                    "content " +
                    "flex-1 " +
                    "flex-col " +
                    "md:flex-column " +
                    "2xl:text-2xl"
                }>
                        <Routes>
                            <Route index element={<HomePage />} />
                            <Route path={"portfolio"} element={<Portfolio />} />
                            <Route path={"Blog"} element={<Blog />} />
                            <Route path={"contact"} element={<Contact />} />
                        </Routes>
                </main>
            </div>
        </BrowserRouter>
    )
}

export default App;