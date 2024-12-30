import {Header} from "../../components/Header/Header.jsx";
import {FormBody} from "./Components/FormBody.jsx";
import {useEffect} from "react";
import {useForms} from "../../context/FormsContext.jsx";
import {useParams} from "react-router-dom";
import {AiOutlineLoading3Quarters} from "react-icons/ai";

export const FormPage = () => {
    const {form, getForm} = useForms();
    const {id} = useParams();

    useEffect(() => {
        getForm(id);
    }, [id]);

    if (!form) {
        return(
            <div className={"vh-100 fondo-pantalla-principal align-content-center"}>
                <h1 className={"text-center"}>
                    <AiOutlineLoading3Quarters className={"spin text-white"} size={100}/>
                </h1>
            </div>

        )
    }
    return(
        <>
            <div className={"d-flex flex-column vh-100"}>
                <div>
                    <Header/>
                </div>
                <div className={"flex-grow-1"}>
                    <FormBody form={form}/>
                </div>
            </div>
        </>
    )
}