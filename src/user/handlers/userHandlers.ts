import { Request, Response } from "express";
import * as userService from "../services/userService";

/** 전체 유저 조회 */
export const getUsers = (req: Request, res: Response) => {
  const users = userService.getAllUsers();
  res.json(users);
};

/** 특정 유저 조회 */
export const getUser = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const user = userService.getUserById(id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

/** 유저 생성 */
export const createUser = (req: Request, res: Response) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }
  const newUser = userService.createUser(name);
  res.status(201).json(newUser);
};
