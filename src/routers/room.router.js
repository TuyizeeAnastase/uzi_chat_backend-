import express from "express";
import roomController from "../controllers/room.controller";
import { uploadImage, checkFormat } from "../middleware/room.middleware";

const router = express.Router();

router
  .route("/")
  .get(roomController.getAllRoom)
  .post(uploadImage, checkFormat("jpg"), roomController.createRoom);

export default router;
