import Sidebar from "./components/Sidebar";
import Details from "./pages/Details.jsx";
import "./App.css";

function App() {

    return (
        <div className={"flex"}>
            <div className={"flex-none w-40 md:w-40"}>
                <Sidebar/>
            </div>
            <main className={"flex-2"}>
                <Details/>
            </main>
        </div>
    )
}

export default App;