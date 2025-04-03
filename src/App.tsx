import './App.css'
import RouterList from "./components/Routs/RouterList.tsx";
import MyNavBar from "./components/Constants/MyNavBar.tsx";
import {PATHS} from "./routs/routs.ts";
import {BrowserRouter} from "react-router-dom";


function App() {

    return (
        <>
            <BrowserRouter>
                <MyNavBar links={PATHS}/>
                <div>
                    <RouterList/>
                </div>
            </BrowserRouter>
        </>
    )
}

export default App
