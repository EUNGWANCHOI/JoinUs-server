import { Router } from "express";
import * as userHandler from "../handlers/userHandlers";

const router = Router();

router.get("/", userHandler.getUsers);
router.get("/:id", userHandler.getUser);
router.post("/", userHandler.createUser);

export default router;
