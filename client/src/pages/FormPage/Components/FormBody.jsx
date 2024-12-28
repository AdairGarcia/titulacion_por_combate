import '../formPage.css'
import {IoIosAdd} from "react-icons/io";
import {FaDownload} from "react-icons/fa6";
import {MdDelete} from "react-icons/md";
import {Question} from "./Question.jsx";
import {useState} from "react";


export const FormBody = ({form}) => {
    const [modalTriggered, setModalTriggered] = useState(true);

    const handleModalTrigger = () => setModalTriggered(!modalTriggered);

    return(
        <>
            <div className={"container-fluid h-100 fondo-pantalla-principal"}>
                <div className={"d-flex justify-content-between"}>
                    <h1 className={"form-title m-5"}>
                        {form.title}
                    </h1>
                    <div className={"btn-group m-5"}>
                        <button className={"mx-5 rounded-4 btn-agregar p-3"} type={"button"} data-bs-toggle="modal"
                                data-bs-target="#createQM">
                            <IoIosAdd size={"35px"}/>
                            Agregar pregunta
                        </button>
                        <button className={"mx-5 rounded-4 btn-descargar p-3"}>
                            <FaDownload size={"30px"}/>
                            Descargar cuestionario
                        </button>
                        <button className={"mx-5 rounded-4 btn-eliminar p-2"}>
                            <MdDelete size={"30px"}/>
                            Eliminar cuestionario
                        </button>
                    </div>
                </div>


                <div className={""}>
                    <Question question={
                        {
                            questionText: "¿Cuál es la capital de México?",
                            correctAnswer: "CDMX",
                            incorrectAnswers: ["Guadalajara", "Monterrey", "Tijuana"]
                        }
                    }
                              index={0}
                    />
                    <Question question={
                        {
                            questionText: "¿Cuál es la capital de México?",
                            correctAnswer: "CDMX",
                            incorrectAnswers: ["Guadalajara", "Monterrey", "Tijuana"]
                        }
                    }
                              index={1}
                    />
                    <Question question={
                        {
                            questionText: "¿Cuál es la capital de México?",
                            correctAnswer: "CDMX",
                            incorrectAnswers: ["Guadalajara", "Monterrey", "Tijuana"]
                        }
                    }
                              index={2}
                    />
                </div>
            </div>
            <div className={"modal fade"} id="createQM">
                <div className={"modal-header"}>
                    titulo
                </div>
                <div className={"modal-body"}>
                    hola
                </div>
            </div>
        </>
    )
}