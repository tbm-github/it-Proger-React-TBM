import { useState } from "react";
import { Text, View } from "react-native";
import { Filter } from "./Filter";
import { Todo } from "./Todo";
import { Header } from "./Header";
import { Form } from "./Form";

const TaskManager = () => {
  // Data for Select
  const data = [
    { key: "all", value: "all" },
    { key: "completed", value: "completed" },
    { key: "notCompleted", value: "not-completed" },
    { key: "delete", value: "delete" },
  ];

  const [filter, setFilter] = useState("");

  const onSelect = (filter) => {
    setFilter(filter);
  };

  const [todos, setTodos] = useState([
    { title: "Task 1", status: "notCompleted", delete: "false", id: "0" },
    { title: "Task 2", status: "notCompleted", delete: "false", id: "1" },
    { title: "Task 3", status: "notCompleted", delete: "false", id: "2" },
  ]);

  const onCheckbox = (id, isChecked) => {
    setTodos((list) =>
      list.map((el) => {
        return el.id === id
          ? { ...el, status: isChecked ? "notCompleted" : "completed" }
          : el;
      })
    );
  };

  const onRemove = (id) => {
    // const updatedTodos = todos.filter((todo) => todo.id !== id);
    // setTodos(updatedTodos);
    setTodos((todos) =>
      todos.map((el) => {
        return el.id === id ? { ...el, delete: "true" } : el;
      })
    );
  };

  const onAdd = (text) => {
    setTodos((list) => {
      return [
        ...list,
        {
          title: text,
          status: "notCompleted",
          delete: "false",
          id: Math.random().toString(36).substring(7),
        },
      ];
    });
  };

  return (
    <View>
      <Header />
      <Filter data={data} onSelect={onSelect} />
      {todos
        .filter(
          (todo) =>
            (filter === "delete" && todo.delete === "true") ||
            (todo.delete === "false" &&
              (filter === "all" || filter === todo.status))
        )
        .map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onCheckbox={onCheckbox}
            onRemove={onRemove}
          />
        ))}
      <Form onAdd={onAdd} />
    </View>
  );
};
export default TaskManager;
