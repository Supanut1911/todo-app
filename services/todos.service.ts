import axios from "axios";
import { apiBaseUrl } from "../constants/config";

export const fetchTodos = () => {
  console.log(`${apiBaseUrl}/todo`);

  const data = axios
    .get(`${apiBaseUrl}/todo`)
    .then((res) => res.data)
    .catch(() => {});
  return data;
};

export const fetchTodobyId = (id: string) => {
  const data = axios
    .get(`${apiBaseUrl}/todo/${id}`)
    .then((res) => res.data)
    .catch(() => {});
  return data;
};

export const addTodo = (name: string, desc: string) => {
  const data = axios
    .post(`${apiBaseUrl}/todo`, {
      name,
      desc,
    })
    .then((res) => res.data)
    .catch(() => {});
  return data;
};

export const completedTodo = (id: string) => {
  const data = axios
    .patch(`${apiBaseUrl}/todo/${id}`)
    .then((res) => res.data)
    .catch(() => {});
  return data;
};

export const editTodobyId = (id: string, name: string, desc: string) => {
  const data = axios
    .put(`${apiBaseUrl}/todo/${id}`)
    .then((res) => res.data)
    .catch(() => {});
  return data;
};

export const deleteTodoById = (id: string) => {
  const data = axios
    .delete(`${apiBaseUrl}/todo/${id}`)
    .then((res) => res.data)
    .catch(() => {});
  return data;
};
