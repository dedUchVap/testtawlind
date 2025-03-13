import 'react'
import {Route, Routes} from "react-router-dom";
import {PATHS} from "../../routs/routs.ts";

const RouterList = () => {
    return (
        <>
            <Routes>
                {PATHS.map((el) => <Route key={el.url} path={el.url} element={<el.component/>}></Route>)}
            </Routes>
        </>
    );
};

export default RouterList;