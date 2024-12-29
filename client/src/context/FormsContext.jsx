import {createContext, useContext, useState} from "react";
import {createFormsRequest} from "../api/forms.js";

const FormsContext = createContext();

export const useForms = () => {
    const context = useContext(FormsContext);

    if(!context){
        throw new Error("useForms debe estar dentro del proveedor FormsContext");
    }

    return context;
}

export function FormsProvider({children}){
    const [forms, setForms] = useState([]);

    const createForm = async (form) => {
        const res = await createFormsRequest(form);
        console.log(res);
    }

    return(
        <FormsContext.Provider value={{
            forms,
            createForm
        }}
        >
            {children}
        </FormsContext.Provider>
    )
}