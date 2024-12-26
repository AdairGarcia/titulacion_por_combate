import Form from '../models/forms.model.js';

export const addQuestion = async (req, res) => {
    const formId = req.params.id_form;
    console.log("formid del form: ", formId);
    const {questionText, correctAnswer, incorrectAnswers} = req.body;

    const question = {
        "questionText": questionText,
        "correctAnswer": correctAnswer,
        "incorrectAnswers": incorrectAnswers
    }

    try {
        const updatedForm = await Form.findByIdAndUpdate(
            formId,
            {$push: {questions: question}},
            {new: true}
        )
         res.send(updatedForm);
    } catch (error) {
        console.error('Hubo un error al agregar la pregunta', error);
        res.status(500).send('Hubo un error al agregar la pregunta');
    }
}

export const deleteQuestion = async (req, res) => {
    const formId = req.params.id_form;
    const questionId = req.params.id_question;
    console.log("formid del form: ", formId);
    console.log("questionId de la question: ", questionId);

    try {
        const updatedForm = await Form.findByIdAndUpdate(formId,
            {
                $pull: {questions: {_id: questionId}}
            },
            {
                new: true
            });
        if(!updatedForm) return res.status(404).send({message: 'Formulario no encontrado'});

        res.sendStatus(204)
    } catch (error) {
        console.error('Hubo un error al eliminar la pregunta', error);
        res.status(500).send('Hubo un error al eliminar la pregunta');
    }
}

export const updateQuestion = async (req, res) => {
    const formId = req.params.id_form;
    const questionId = req.params.id_question;
    console.log("formid del form: ", formId);
    console.log("questionId de la question: ", questionId);

    const {questionText, correctAnswer, incorrectAnswers} = req.body;

    const question = {
        "questionText": questionText,
        "correctAnswer": correctAnswer,
        "incorrectAnswers": incorrectAnswers
    }

    try {
        const updatedForm = await Form.findOneAndUpdate(
            {
                _id: formId,
                "questions._id": questionId
            },
            {
                $set: {
                    "questions.$": question
                }
            },
            {
                new: true
            }
        );
        if(!updatedForm) return res.status(404).send({message: 'Pregunta no encontrado'});

        res.send(updatedForm);
    } catch (error) {
        console.error('Hubo un error al actualizar la pregunta', error);
        res.status(500).send('Hubo un error al actualizar la pregunta');
    }
}