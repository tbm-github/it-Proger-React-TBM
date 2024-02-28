import { TodoType } from "../types/todo";
import { request } from "./request";

export const fetchTodos = () => {
  return request("/tasks");
};

export const createTodo = (todo: TodoType) => {
  return request("/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
};

export const putTodo = (todo: TodoType) => {
  return request("/tasks/" + todo.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
};

export const removeTodo = (id: string) => {
  return request("/tasks/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
