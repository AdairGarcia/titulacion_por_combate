import {Header} from "../../components/Header/Header.jsx";
import {SessionButtons} from "../../components/SessionButtons/SessionButtons.jsx";
import {HomeBody} from "./components/HomeBody.jsx";

function HomePage() {
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