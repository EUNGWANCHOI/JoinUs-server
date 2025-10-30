import express from "express";
import dotenv from "dotenv";
import todosRoutes from "./todos/routes/todos";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/todos", todosRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
