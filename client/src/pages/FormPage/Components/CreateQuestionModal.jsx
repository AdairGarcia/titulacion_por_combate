import agregarPregunta from '../../../assets/CrearPregunta.png';
import '../formPage.css'
import { FaQuestionCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";



export const CreateQuestionModal = () => {
    return (
        <div className="modal fade" id="createQM" tabIndex="-1" aria-labelledby="createQMLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content modal-agregar-pregunta rounded-5">
                    <div className="modal-header">
                        <img
                            alt={"agregarPregunta"}
                            src={agregarPregunta}
                            className={"img-fluid p-4"}
                        />
                    </div>
                    <div className="modal-body">
                        <form className={"mx-4"}>
                            <div className="mb-3">
                                <label htmlFor="questionText" className="form-label label-formulario-preguntas">Pregunta</label>
                                <div className={"input-group"}>
                                    <FaQuestionCircle className={"entrada-formulario-pregunta nombre-icono"} color={"#000000"}/>
                                    <input type="text" className="form-control entrada-formulario-pregunta" id="questionText"/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="correctAnswer" className="form-label label-formulario-preguntas">Respuesta correcta</label>
                                <div className={"input-group"}>
                                        <FaStar className={"entrada-formulario-pregunta nombre-icono"} color={"#FF7972"}/>
                                    <input type="text" className="form-control entrada-formulario-pregunta" id="correctAnswer"/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="incorrectAnswer1" className="form-label label-formulario-preguntas">Respuesta incorrecta 1</label>
                                <div className={"input-group"}>
                                    <FaRegStar className={"entrada-formulario-pregunta nombre-icono"}/>
                                    <input type="text" className="form-control entrada-formulario-pregunta" id="incorrectAnswer1"/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="incorrectAnswer2" className="form-label label-formulario-preguntas">Respuesta incorrecta 2</label>
                                <div className={"input-group"}>
                                    <FaRegStar className={"entrada-formulario-pregunta nombre-icono"}/>
                                    <input type="text" className="form-control entrada-formulario-pregunta" id="incorrectAnswer2"/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="incorrectAnswer3" className="form-label label-formulario-preguntas">Respuesta incorrecta 3</label>
                                <div className={"input-group"}>
                                    <FaRegStar className={"entrada-formulario-pregunta nombre-icono"}/>
                                    <input type="text" className="form-control entrada-formulario-pregunta" id="incorrectAnswer3"/>

                                </div>
                            </div>
                            <div className={"btn-group d-flex justify-content-between mt-5"}>
                                <button className={"rounded-4 btns btn-cancelar py-3"} type={"button"} data-bs-dismiss={"modal"}>
                                    Cancelar
                                </button>
                                <button type="submit" className="rounded-4 btns btn-agregar-pregunta py-3">
                                    Agregar pregunta
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}