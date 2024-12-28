import {Header} from "../../components/Header/Header.jsx";
import {FormQuizBody} from "./Components/FormQuizBody.jsx";

export const FormQuizPage = () => {
    return(
        <>
            <div className={"d-flex flex-column vh-100"}>
                <div>
                    <Header/>
                </div>
                <div className={"flex-grow-1"}>
                    <FormQuizBody/>
                </div>
            </div>
        </>
    )
}