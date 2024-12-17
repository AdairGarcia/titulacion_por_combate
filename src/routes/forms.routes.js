import {Router} from "express";
import {createForm, deleteForm, getForm, getForms, updateForm} from "../controllers/forms.controller.js";
import {addQuestion, deleteQuestion, updateQuestion} from "../controllers/questions.controller.js";

const router = Router();

router.get('/', getForms);
router.get('/:id_form', getForm);
router.post('/', createForm);
router.put('/:id_form', updateForm)
router.delete('/:id_form', deleteForm)

router.post('/:id_form/questions', addQuestion);
router.put('/:id_form/questions/:id_question', updateQuestion);
router.delete('/:id_form/questions/:id_question', deleteQuestion);


export default router;