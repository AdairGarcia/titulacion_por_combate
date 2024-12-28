import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import {SignupPage} from "./pages/SignupPage/SignupPage.jsx";
import {SigninPage} from "./pages/SigninPage/SigninPage.jsx";
import {MainPage} from "./pages/MainPage/MainPage.jsx";

import {AuthProvider} from "./context/AuthContext.jsx";
import {FormQuizPage} from "./pages/FormQuizPage/FormQuizPage.jsx";

function App() {
    return(
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    {/*Public routes*/}
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/signup' element={<SignupPage/>}/>
                    <Route path='/signin' element={<SigninPage/>}/>

                    <Route path='/forms' element={<MainPage/>}/>
                    <Route path='/forms/quiz' element={<FormQuizPage/>}/>

                </Routes>
            </BrowserRouter>
        </AuthProvider>
        )
}

export default App;