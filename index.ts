import express from "express";
import useRouter from "./user/routes/userRouter";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/users", useRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// app -> router -> handler -> service
