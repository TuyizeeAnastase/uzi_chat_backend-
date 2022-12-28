import express from "express";
import chatController from "../controllers/chat.controllers";
import { protect } from "../middleware/protect.middleware";
import { chatValidation } from "../validations/chat.validations";

const router = express.Router();

router
  .route("/")
  .get(protect, chatController.getAllChats)
  .post(chatValidation, protect, chatController.createChat);

export default router;
