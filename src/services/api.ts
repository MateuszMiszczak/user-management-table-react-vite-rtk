import axios from "axios";
import { User } from "../definitions/types";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const fetchUsers = async (): Promise<User[]> => {
  const response = await api.get("/users");

  return response.data.map((user: User) => ({
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    phone: user.phone,
  }));
};
