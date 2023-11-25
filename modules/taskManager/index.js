import { useState } from "react";
import { Text, View } from "react-native";
import { Filter } from "./Filter";
import { Todo } from "./Todo";
import { Header } from "./Header";
import { Form } from "./Form";
import { StatusBar } from "expo-status-bar";

const TaskManager = () => {
  const data = [
    { key: "all", value: "all" },
    { key: "completed", value: "completed" },
    { key: "notCompleted", value: "not-completed" },
    { key: "delete", value: "delete" },
  ];

  const [showTodos, setShowTodos] = useState([
    { title: "Task ", status: "completed", delete: "false", id: "0" },
  ]);

  const [filter, setFilter] = useState("all");

  const onSelect = (filter) => {
    setFilter(filter);
    switch (filter) {
      case "all":
        const allShowTodos = todos.filter((todo) => todo.delete === "false");
        setShowTodos(allShowTodos);
        break;
      case "completed":
        const compShowTodos = todos.filter(
          (todo) => todo.status === "completed"
        );
        setShowTodos(compShowTodos);
        console.log("comp");
        break;
      case "notCompleted":
        const notcompShowTodos = todos.filter(
          (todo) => todo.status === "notCompleted"
        );
        setShowTodos(notcompShowTodos);
        console.log("notComp");
        break;
      case "delete":
        const delShowTodos = todos.filter((todo) => todo.delete !== "false");
        setShowTodos(delShowTodos);
    }
    console.log(filter);
    console.log(todos);
    console.log(showTodos);
  };

  const [todos, setTodos] = useState([
    { title: "Task 1", status: "completed", delete: "false", id: "0" },
    { title: "Task 2", status: "notCompleted", delete: "false", id: "1" },
    { title: "Task 3", status: "notCompleted", delete: "false", id: "2" },
  ]);

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
    console.log(todos);
  };

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
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <View>
      <Header />
      <Filter data={data} onSelect={onSelect} />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          filter={filter}
          onCheckbox={onCheckbox}
          onRemove={onRemove}
        />
      ))}
      <Form onAdd={onAdd} />
    </View>
  );
};
export default TaskManager;
