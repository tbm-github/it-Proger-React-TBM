import { useState } from "react";
import { Text, View } from "react-native";
import { Todo } from "./Todo";
import { Header } from "./Header";
import { Form } from "./Form";
import { StatusBar } from "expo-status-bar";

const TaskManager = () => {
  const [todos, setTodos] = useState([
    { title: "Task 1", status: "completed", id: "0" },
    { title: "Task 2", status: "notCompleted", id: "1" },
    { title: "Task 3", status: "delete", id: "2" },
  ]);

  const onAdd = (text) => {
    setTodos((list) => {
      return [
        ...list,
        {
          title: text,
          status: "notCompleted",
          id: Math.random().toString(36).substring(7),
        },
      ];
    });
  };

  const onCheckbox = (id, isChecked) => {
    console.log(id, " ", isChecked);

    setTodos((list) =>
      list.map((el) => {
        return el.id === id
          ? { ...el, status: isChecked ? "notCompleted" : "completed" }
          : el;
      })
    );
    console.log(todos);
  };

  const onRemove = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <View>
      <Header />
      {todos.map((todo) => (
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
