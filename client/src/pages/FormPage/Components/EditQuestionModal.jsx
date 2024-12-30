import editarPregunta from '../../../assets/EditarPregunta.png';
import '../formPage.css';
import { FaQuestionCircle, FaStar, FaRegStar } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useForms } from "../../../context/FormsContext.jsx";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const EditQuestionModal = ({ question, modalId }) => {
    const { register, handleSubmit, reset, setValue } = useForm({
        defaultValues: {
            questionText: question.questionText,
            correctAnswer: question.correctAnswer,
            incorrectAnswer1: question.incorrectAnswers[0],
            incorrectAnswer2: question.incorrectAnswers[1],
            incorrectAnswer3: question.incorrectAnswers[2],
        }
    });
    const { updateQuestion } = useForms();
    const { id } = useParams();

    useEffect(() => {
        setValue("questionText", question.questionText);
        setValue("correctAnswer", question.correctAnswer);
        setValue("incorrectAnswer1", question.incorrectAnswers[0]);
        setValue("incorrectAnswer2", question.incorrectAnswers[1]);
        setValue("incorrectAnswer3", question.incorrectAnswers[2]);
    }, [question, setValue]);

    const onSubmit = handleSubmit((data) => {
        const updatedQuestion = {
            questionText: data.questionText,
            correctAnswer: data.correctAnswer,
            incorrectAnswers: [data.incorrectAnswer1, data.incorrectAnswer2, data.incorrectAnswer3],
        };
        updateQuestion(id, question._id, updatedQuestion);
        reset();
    });

    const onCancel = () => {
        reset();
    };

    return (
        <div className="modal fade" id={modalId} tabIndex="-1" aria-labelledby={`${modalId}Label`} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content modal-agregar-pregunta rounded-5">
                    <div className="modal-header">
                        <img
                            alt="editarPregunta"
                            src={editarPregunta}
                            className="img-fluid p-4"
                        />
                    </div>
                    <div className="modal-body">
                        <form className="mx-4" onSubmit={onSubmit}>
                            <div className="mb-3">
                                <label htmlFor="questionText" className="form-label label-formulario-preguntas">Pregunta</label>
                                <div className="input-group">
                                    <FaQuestionCircle className="entrada-formulario-pregunta nombre-icono" color="#000000" />
                                    <input type="text" className="form-control entrada-formulario-pregunta" id="questionText"
                                           {...register("questionText")}
                                           autoComplete="off" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="correctAnswer" className="form-label label-formulario-preguntas">Respuesta correcta</label>
                                <div className="input-group">
                                    <FaStar className="entrada-formulario-pregunta nombre-icono" color="#FF7972" />
                                    <input type="text" className="form-control entrada-formulario-pregunta" id="correctAnswer"
                                           {...register("correctAnswer")}
                                           autoComplete="off" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="incorrectAnswer1" className="form-label label-formulario-preguntas">Respuesta incorrecta 1</label>
                                <div className="input-group">
                                    <FaRegStar className="entrada-formulario-pregunta nombre-icono" />
                                    <input type="text" className="form-control entrada-formulario-pregunta" id="incorrectAnswer1"
                                           {...register("incorrectAnswer1")}
                                           autoComplete="off" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="incorrectAnswer2" className="form-label label-formulario-preguntas">Respuesta incorrecta 2</label>
                                <div className="input-group">
                                    <FaRegStar className="entrada-formulario-pregunta nombre-icono" />
                                    <input type="text" className="form-control entrada-formulario-pregunta" id="incorrectAnswer2"
                                           {...register("incorrectAnswer2")}
                                           autoComplete="off" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="incorrectAnswer3" className="form-label label-formulario-preguntas">Respuesta incorrecta 3</label>
                                <div className="input-group">
                                    <FaRegStar className="entrada-formulario-pregunta nombre-icono" />
                                    <input type="text" className="form-control entrada-formulario-pregunta" id="incorrectAnswer3"
                                           {...register("incorrectAnswer3")}
                                           autoComplete="off" />
                                </div>
                            </div>
                            <div className="btn-group d-flex justify-content-between mt-5">
                                <button className="rounded-4 btns btn-cancelar py-3" type="button" data-bs-dismiss="modal" onClick={onCancel}>
                                    Cancelar
                                </button>
                                <button type="submit" className="rounded-4 btns btn-agregar-pregunta py-3" data-bs-dismiss="modal">
                                    Editar pregunta
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};