import {Router} from "express";
import {signin, signout, signup, verifyToken} from "../controllers/auth.controller.js";
import {validateSchema} from "../middlewares/validater.middleware.js";
import {signInSchema, signUpSchema} from "../schemas/auth.schema.js";

const router = Router();

router.post('/signup', validateSchema(signUpSchema), signup);
router.post('/signin', validateSchema(signInSchema), signin);
router.post('/signout', signout);
router.get('/verify', verifyToken);


export default router;
