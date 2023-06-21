import "dotenv/config";
import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import Notification from "./models/Notification.js";
import notificationRouter from "./routes/notificationRouter.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/notifications", notificationRouter);

app.get("/", (req, res) => {
  res.send("Notification service");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

mongoose.connect(process.env.CONNECTION_STRING);

// async function getTodoItem() {
//   try {
//     const result = await axios(
//       "http://localhost:3000/todos/64918b4e465b308fc293d4f7"
//     );
//     console.log(result.data, result.status, result.statusText);
//   } catch (error) {
//     console.log(error);
//   }
// }

// await getTodoItem();
