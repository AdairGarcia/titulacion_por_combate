import {createContext, useContext, useState} from "react";
import {
    createFormsRequest,
    getFormRequest,
    getFormsRequest,
    deleteFormsRequest,
    updateFormsRequest
} from "../api/forms.js";
import {createQuestionRequest, deleteQuestionRequest, updateQuestionRequest} from "../api/questions.js";

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

    const updateForm = async (formId, form) => {
        const res = await updateFormsRequest(formId, form);
        console.log(res);
    }

    const deleteForm = async (formId) => {
        const res = await deleteFormsRequest(formId);
        console.log(res);
    }

    const downloadForm = async (formId) => {
        const res = await getFormRequest(formId);
        console.log(res);
    
        const formName = res.data.title; // Asegúrate de que el nombre del formulario esté en res.data.name
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(res.data));
        const blob = new Blob([JSON.stringify(res.data)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
    
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", url);
        downloadAnchorNode.setAttribute("download", `TPC_F_${formName}.json`);
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    
        URL.revokeObjectURL(url);
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

    const updateQuestion = async (idForm, idQuestion, question) => {
        try{
            const res = await updateQuestionRequest(idForm, idQuestion, question);
            if(res.status === 200){
                setForm((prevForm) => ({
                    ...prevForm,
                    questions: prevForm.questions.map((q) => q._id === idQuestion ? question : q),
                }));
            }
        } catch (err) {
            console.error(err);
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
            updateForm,
            deleteForm,
            downloadForm,
            createQuestion,
            updateQuestion,
            deleteQuestion
        }}
        >
            {children}
        </FormsContext.Provider>
    )
}