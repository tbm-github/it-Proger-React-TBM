import { TodoType } from "../types/todo";
import { request } from "./request";

export const fetchTodos = () => {
  return request("http://localhost:3000/api/tasks");
};
export const createTodo = (todo: TodoType) => {
  return request("http://localhost:3000/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
};

export const putTodo = (todo: TodoType) => {
  return request("http://localhost:3000/api/tasks/" + todo.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
};

export const removeTodo = (id: string) => {
  return request("http://localhost:3000/api/tasks/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
