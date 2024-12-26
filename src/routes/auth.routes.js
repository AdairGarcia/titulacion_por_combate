import {Router} from "express";
import {signup, signin, signout} from "../controllers/auth.controller.js";
import {validateSchema} from "../middlewares/validater.middleware.js";
import {signUpSchema, signInSchema} from "../schemas/auth.schema.js";

const router = Router();

router.post('/signup', validateSchema(signUpSchema), signup);
router.post('/signin', validateSchema(signInSchema), signin);
router.post('/signout', signout);


export default router;
