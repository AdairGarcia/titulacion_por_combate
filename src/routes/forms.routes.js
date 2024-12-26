import {Router} from "express";
import {createForm, deleteForm, getForm, getForms, updateForm} from "../controllers/forms.controller.js";
import {addQuestion, deleteQuestion, updateQuestion} from "../controllers/questions.controller.js";

import {authRequired} from "../middlewares/validateToken.js";
import {validateSchema} from "../middlewares/validater.middleware.js";
import {createFormSchema, updateFormSchema} from "../schemas/forms.schema.js";
import {createQuestionSchema, updateQuestionSchema} from "../schemas/questions.schema.js";

const router = Router();

router.get('/', authRequired, getForms);
router.get('/:id_form', authRequired, getForm);
router.post('/', authRequired, validateSchema(createFormSchema), createForm);
router.put('/:id_form', authRequired, validateSchema(updateFormSchema), updateForm)
router.delete('/:id_form', authRequired, deleteForm)

router.post('/:id_form/questions', authRequired, validateSchema(createQuestionSchema), addQuestion);
router.put('/:id_form/questions/:id_question', authRequired, validateSchema(updateQuestionSchema), updateQuestion);
router.delete('/:id_form/questions/:id_question', authRequired, deleteQuestion);


export default router;