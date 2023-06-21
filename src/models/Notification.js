import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    deadline: Date,
    todo: mongoose.SchemaTypes.ObjectId,
  },
  { timestamps: true }
);

export default mongoose.model("Notification", notificationSchema);
