import {Header} from "../../components/Header/Header.jsx";
import {FormBody} from "./Components/FormBody.jsx";

export const FormPage = () => {
    return(
        <>
            <div className={"d-flex flex-column vh-100"}>
                <div>
                    <Header/>
                </div>
                <div className={"flex-grow-1"}>
                    <FormBody form={
                        {
                            title: "Formulario de prueba"
                        }
                    }/>
                </div>
            </div>
        </>
    )
}