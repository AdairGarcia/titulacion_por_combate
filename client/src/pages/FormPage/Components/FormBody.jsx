import '../formPage.css';
import {IoIosAdd} from 'react-icons/io';
import {FaDownload} from 'react-icons/fa6';
import {MdDelete} from 'react-icons/md';
import {Question} from './Question.jsx';
import {CreateQuestionModal} from './CreateQuestionModal.jsx';
import {useForms} from "../../../context/FormsContext.jsx";
import {useNavigate} from "react-router-dom";
import {RiCheckboxMultipleBlankLine} from "react-icons/ri";

export const FormBody = ({ form }) => {
    const {deleteForm} = useForms();
    const navigate = useNavigate();

    const onDelete = (idForm) => {
        deleteForm(idForm);
        navigate('/forms');
    }

    return (
        <>
            <div className="container-fluid h-100 fondo-pantalla-principal">
                <div className="row align-items-center justify-content-between p-3">
                    <div className="col-auto my-5">
                        <h1 className="form-title">{form.title}</h1>
                    </div>
                    <div className="col-auto d-flex flex-wrap">
                        <button
                            className="mx-2 my-2 rounded-4 btn-agregar p-3"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#createQM"
                        >
                            <IoIosAdd size="35px" />
                            Agregar pregunta
                        </button>
                        <button className="mx-2 my-2 rounded-4 btn-descargar p-3">
                            <FaDownload size="30px" />
                            Descargar cuestionario
                        </button>
                        <button className="mx-2 my-2 rounded-4 btn-eliminar p-2" type={"button"} onClick={
                            () => onDelete(form._id)
                        }>
                            <MdDelete size="30px" />
                            Eliminar cuestionario
                        </button>
                    </div>
                </div>

                <div className={"m-3"}>
                    {
                        form.questions.length === 0 ? (
                            <div className="container my-2 container-vacio">
                                <div className="rounded-4 d-flex flex-column p-4 m-3 text-center align-items-center">
                                    <RiCheckboxMultipleBlankLine size={"50px"}/>
                                    <p className={"vacio"}>
                                        Aquí se mostrarán las preguntas de tu cuestionario
                                    </p>
                                </div>
                            </div>
                        ) : (
                            form.questions.map((question, index) =>
                                <Question
                                    key={question._id}
                                    question={question}
                                    index={index}
                                />
                            )
                        )
                    }
                </div>
            </div>
            <CreateQuestionModal />
        </>
    );
};