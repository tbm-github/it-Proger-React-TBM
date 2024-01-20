import React from "react";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Filter } from "./Filter";
import { Todo } from "./Todo";
import { Header } from "./Header";
import { Form } from "./Form";
import { onAdd, onCheckbox, onInit, onRemove } from "../../store/todoReducer";
import type { RootState } from "../../store";
import { FilterOption } from "./types";
import { useEffect } from "react";
import { createTodo, fetchTodos, putTodo, removeTodo } from "../../api/todo";
import { error } from "console";
import { TodoType } from "../../types/todo";
import { todo } from "node:test";

const TaskManager = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  const data: FilterOption[] = [
    { key: "all", value: "all" },
    { key: "completed", value: "completed" },
    { key: "notCompleted", value: "not-completed" },
    { key: "delete", value: "delete" },
  ];

  const [filter, setFilter] = useState("");
  const onSelect = (filter: string) => {
    setFilter(filter);
  };
  useEffect(() => {
    fetchTodos()
      .then((todos: TodoType[]) => {
        dispatch(onInit(todos));
      })
      .catch((error) => {
        console.error("in catch ");
      });
  }, []);

  const handleAdd = (text: string) => {
    const todo = {
      title: text,
      status: "notCompleted",
      deleted: false,
      id: `${Date.now()}`,
    };
    dispatch(onAdd(todo));
    createTodo(todo);
  };

  const handleRemove = (id: string) => {
    console.log("todo.id", id);
    dispatch(onRemove(id));
    todos
      .filter((todo) => todo.id === id)
      .map((todo) => {
        todo = { ...todo, deleted: !todo.deleted };
        console.log("todoPut ", JSON.stringify(todo));
        putTodo(todo);
      });
    // removeTodo(id);
  };

  const handleCheckbox = (id: string, isChecked: boolean) => {
    dispatch(onCheckbox({ id: id, isChecked: isChecked }));
    todos
      .filter((todo) => todo.id === id)
      .map((todo) => {
        todo = {
          ...todo,
          status: isChecked ? "notCompleted" : "completed",
        };
        console.log("todoPut ", JSON.stringify(todo));
        putTodo(todo);
      });
  };

  return (
    <View>
      <Header />
      <Filter data={data} onSelect={onSelect} />
      <ScrollView style={{ height: "50%" }}>
        {todos
          .filter(
            (todo) =>
              (filter === "delete" && todo.deleted) ||
              (!todo.deleted && (filter === "all" || filter === todo.status))
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onCheckbox={handleCheckbox}
              onRemove={handleRemove}
            />
          ))}
      </ScrollView>
      <Form onAdd={handleAdd} />
    </View>
  );
};
export default TaskManager;
