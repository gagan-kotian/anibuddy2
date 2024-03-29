import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";

const app = express();

mongoose
  .connect(
    "mongodb+srv://gagankotian48:wIv4Az8FF1d9TbBZ@anibuddycluster.oywic6e.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to mongoose");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/user", userRouter);
app.listen(3000, () => {
  console.log("Server connected");
});
