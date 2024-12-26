import {Router} from "express";
import {createForm, deleteForm, getForm, getForms, updateForm} from "../controllers/forms.controller.js";
import {addQuestion, deleteQuestion, updateQuestion} from "../controllers/questions.controller.js";
import {authRequired} from "../middlewares/validateToken.js"

const router = Router();

router.get('/', authRequired, getForms);
router.get('/:id_form', authRequired, getForm);
router.post('/', authRequired, createForm);
router.put('/:id_form', authRequired, updateForm)
router.delete('/:id_form', authRequired, deleteForm)

router.post('/:id_form/questions', authRequired, addQuestion);
router.put('/:id_form/questions/:id_question', authRequired, updateQuestion);
router.delete('/:id_form/questions/:id_question', authRequired, deleteQuestion);


export default router;