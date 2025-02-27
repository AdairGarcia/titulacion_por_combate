import '../formPage.css';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useForms } from "../../../context/FormsContext.jsx";
import { EditQuestionModal } from "./EditQuestionModal.jsx";

export const Question = ({ question, index }) => {
    const { form, deleteQuestion } = useForms();

    const isEven = index % 2 === 0;
    const containerClass = isEven ? "question-container-even" : "question-container-odd";

    const onDelete = (idForm, idQuestion) => {
        deleteQuestion(idForm, idQuestion);
    };

    return (
        <>
            <div className={`container text-center py-4 ${containerClass}`}>
                <div className="row">
                    <div className="col align-content-center question-text">
                        {index + 1}
                    </div>
                    <div className="col align-content-center question-text">
                        {question.questionText}
                    </div>
                    <div className="col align-content-center question-text">
                        <span className="correct-answer">
                            {question.correctAnswer}
                        </span>
                    </div>
                    <div className="col align-content-center question-text">
                        {question.incorrectAnswers[0]}
                    </div>
                    <div className="col align-content-center question-text">
                        {question.incorrectAnswers[1]}
                    </div>
                    <div className="col align-content-center question-text">
                        {question.incorrectAnswers[2]}
                    </div>
                    <div className="col align-content-center">
                        <button
                            className="rounded-5 btn-editar mx-3"
                            data-bs-toggle="modal"
                            data-bs-target={`#editQM-${question._id}`}
                            type="button"
                        >
                            <CiEdit size="25px" />
                        </button>
                        <button
                            className="rounded-5 btn-eliminar-pregunta mx-3"
                            type="button"
                            onClick={() => onDelete(form._id, question._id)}
                        >
                            <MdDelete color="#FFFFFF" size="25px" />
                        </button>
                    </div>
                </div>
            </div>
            <EditQuestionModal question={question} modalId={`editQM-${question._id}`} />
        </>
    );
};