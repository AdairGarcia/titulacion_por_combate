import {Header} from "../../components/Header/Header.jsx";
import {MainPageBody} from "./Components/MainPageBody.jsx";
import {SignoutButton} from "../../components/SignoutButton/SignoutButton.jsx";

export const MainPage = () => {


    return (
        <>
            <div className={"d-flex flex-column vh-100"}>
                <div>
                    <Header optionalComponent={<SignoutButton/>}/>
                </div>
                <div className={"flex-grow-1"}>
                    <MainPageBody/>
                </div>
            </div>
        </>
    )
}