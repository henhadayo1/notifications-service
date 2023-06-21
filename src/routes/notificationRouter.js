import express from "express";
import {
  addNotification,
  getAllNotifications,
} from "../controllers/notificationController.js";

const notificationRouter = express.Router();

notificationRouter.get("/", getAllNotifications);
notificationRouter.post("/", addNotification);

export default notificationRouter;
