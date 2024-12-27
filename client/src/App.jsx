import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";

function App() {
    return(
        <BrowserRouter>
            <Routes>
                {/*Public routes*/}
                <Route path='/' element={<HomePage/>}/>

            </Routes>
        </BrowserRouter>

    )
}

export default App;