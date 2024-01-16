import { TodoType } from "../types/todo";

export const fetchTodos = () => {
  const result = fetch("http://localhost:3000/api/tasks");
  return result.then((res) => {
    if (res.ok) {
      return res.json();
    }
  });
};
export const createTodo = (todo: TodoType) => {
  console.log("todo ", JSON.stringify(todo));
  const result = fetch("http://localhost:3000/api/tasks", {
    method: "POST",
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
