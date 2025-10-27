import express, { Request, Response } from "express";
import userRouter from "./user/routes/userRouter";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
