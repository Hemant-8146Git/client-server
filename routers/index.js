import Router from "express";
import { userController  } from "../controller";


const router  = Router();

router.use('/user', userController);

export { router };