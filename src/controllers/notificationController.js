import asyncHandler from "express-async-handler";
import Notification from "../models/Notification.js";

export const getAllNotifications = asyncHandler(async (req, res) => {
  const notifications = await Notification.find();
  res.json(notifications);
});

export const addNotification = asyncHandler(async (req, res) => {
  const notification = await new Notification(req.body);
  await notification.save();
  console.log("Notification as been saved!", notification);
  res.json("Created!");
});
