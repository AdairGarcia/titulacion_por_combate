import {Header} from "../../components/Header/Header.jsx";
import {FormQuizBodyEdit} from "./Components/FormQuizBodyEdit.jsx";

export const FormQuizEditPage = () => {
    return(
        <>
            <div className={"d-flex flex-column vh-100"}>
                <div>
                    <Header/>
                </div>
                <div className={"flex-grow-1"}>
                    <FormQuizBodyEdit/>
                </div>
            </div>
        </>
    )
}