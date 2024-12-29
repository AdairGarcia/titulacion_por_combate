import {Header} from "../../components/Header/Header.jsx";
import {SessionButtons} from "../../components/SessionButtons/SessionButtons.jsx";
import {HomeBody} from "./components/HomeBody.jsx";

import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useAuth} from "../../context/AuthContext.jsx";

function HomePage() {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/forms');
        }
    }, [isAuthenticated]);


    return(
        <>
            <div className={"d-flex flex-column vh-100"}>
                <div>
                    <Header optionalComponent={ <SessionButtons/> }/>
                </div>
                <div className={"flex-grow-1"}>
                    <HomeBody/>
                </div>
            </div>
        </>
    )
}

export default HomePage;