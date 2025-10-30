import { Request, Response } from "express";
import { supabase } from "../../db/supabaseClient";

export const getTodos = async (req: Request, res: Response) => {
  const { data, error } = await supabase.from("todos").select("*");
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

export const addTodo = async (req: Request, res: Response) => {
  const { title } = req.body;
  const { data, error } = await supabase.from("todos").insert([{ title }]);
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};
