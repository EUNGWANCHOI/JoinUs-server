import express from "express";

const app = express();
const port = 3000;

const shangus = express.Router();

shangus.get("/", (req, res) => {
  res.status(500).json({ message: "Internal Server Error" });
});

shangus.get("/user", (req, res) => {
  res.send("Got a PUT request at /user");
});

app.use(shangus);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// app -> router -> handler -> service
