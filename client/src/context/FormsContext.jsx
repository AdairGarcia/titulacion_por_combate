import {createContext, useContext, useState} from "react";
import {createFormsRequest, getFormRequest, getFormsRequest, deleteFormsRequest} from "../api/forms.js";
import {createQuestionRequest, deleteQuestionRequest} from "../api/questions.js";

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
    const [form, setForm] = useState(null);

    const getForms = async () => {
        try{
            const res = await getFormsRequest();
            setForms(res.data);
        } catch (error){
            console.error(error);
        }
    }

    const getForm = async (formId) => {
        try {
            const res = await getFormRequest(formId);
            setForm(res.data);
        } catch (error) {
            console.error(error);
        }
    }

    const createForm = async (form) => {
        const res = await createFormsRequest(form);
        console.log(res);
    }

    const deleteForm = async (formId) => {
        const res = await deleteFormsRequest(formId);
        console.log(res);
    }

    const createQuestion = async (idForm, question) => {
        try {
            const res = await createQuestionRequest(idForm, question);
            await getForm(idForm);
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteQuestion = async (idForm, idQuestion) => {
        try{
            const res = await deleteQuestionRequest(idForm, idQuestion);
            if(res.status === 204){
                setForm((prevForm) => ({
                    ...prevForm,
                    questions: prevForm.questions.filter((question) => question._id !== idQuestion),
                }));
            }
        } catch (err){
            console.error(err);
        }
    }

    return(
        <FormsContext.Provider value={{
            form,
            forms,
            createForm,
            getForm,
            getForms,
            deleteForm,
            createQuestion,
            deleteQuestion
        }}
        >
            {children}
        </FormsContext.Provider>
    )
}