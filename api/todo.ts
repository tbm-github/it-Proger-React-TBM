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
  const url = "http://localhost:3000/api/tasks/" + todo.id;
  const result = fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  return result.then((res) => {
    if (res.ok) {
      return res.json();
    }
  });
};
export const removeTodo = (id: string) => {
  const url = "http://localhost:3000/api/tasks/" + id;
  const result = fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return result.then((res) => {
    if (res.ok) {
      return res.json();
    }
  });
};
