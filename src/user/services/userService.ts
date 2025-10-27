import { User } from "../types/user";

// 임시 데이터
let users: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

export const getAllUsers = (): User[] => {
  return users;
};

export const getUserById = (id: number): User | undefined => {
  return users.find((u) => u.id === id);
};

export const createUser = (name: string): User => {
  const newUser: User = { id: users.length + 1, name };
  users.push(newUser);
  return newUser;
};
