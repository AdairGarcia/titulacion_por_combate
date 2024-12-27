import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import {SignupPage} from "./pages/SignupPage/SignupPage.jsx";
import {AuthProvider} from "./context/AuthContext.jsx";

function App() {
    return(
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    {/*Public routes*/}
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/signup' element={<SignupPage/>}/>

                </Routes>
            </BrowserRouter>
        </AuthProvider>
        )
}

export default App;