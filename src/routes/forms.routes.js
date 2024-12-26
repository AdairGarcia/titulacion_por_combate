import {Router} from "express";
import {createForm, deleteForm, getForm, getForms, updateForm} from "../controllers/forms.controller.js";
import {addQuestion, deleteQuestion, updateQuestion} from "../controllers/questions.controller.js";
import {authRequired} from "../middlewares/validateToken.js"

const router = Router();

router.get('/', authRequired, getForms);
router.get('/:id_form', getForm);
router.post('/', authRequired, createForm);
router.put('/:id_form', updateForm)
router.delete('/:id_form', deleteForm)

router.post('/:id_form/questions', addQuestion);
router.put('/:id_form/questions/:id_question', updateQuestion);
router.delete('/:id_form/questions/:id_question', deleteQuestion);


export default router;