import './App.css'
import RouterList from "./components/Routs/RouterList.tsx";
import MyNavBar from "./components/Constants/MyNavBar.tsx";
import {MODAL_PATH, PATHS} from "./routs/routs.ts";
import {BrowserRouter} from "react-router-dom";
import LoginRegister from "./pages/LoginRegister.tsx";


function App() {

    return (
        <>
            <BrowserRouter>
                <LoginRegister></LoginRegister>
                <MyNavBar links_modal={MODAL_PATH} links={PATHS}/>
                <RouterList/>
            </BrowserRouter>
        </>
    )
}

export default App
