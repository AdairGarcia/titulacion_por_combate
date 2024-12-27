import {Header} from "../../components/Header/Header.jsx";
import {SessionButtons} from "../../components/SessionButtons/SessionButtons.jsx";

function HomePage() {
    return(
        <>
            <Header optionalComponent={ <SessionButtons/> }/>
        </>
    )
}

export default HomePage;