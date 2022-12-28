import express from "express";
import userControllers from "../controllers/user.controller";
import {
  userValidation,
  loginValidation,
} from "../validations/user.validations";
import { checkUserExist, checkUserLogin } from "../middleware/user.middleware";

const router = express.Router();
router
  .route("/signUp")
  .post(userValidation, checkUserExist, userControllers.registerUSer);

router
  .route("/login")
  .post(loginValidation, checkUserLogin, userControllers.login);

export default router;
