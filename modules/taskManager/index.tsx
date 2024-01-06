import React from "react";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Filter } from "./Filter";
import { Todo } from "./Todo";
import { Header } from "./Header";
import { Form } from "./Form";
import { onAdd, onCheckbox, onRemove } from "../store/todoReducer";
import type { RootState } from "../store";
import { Data } from "./types";

const TaskManager = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  const data: Data[] = [
    { key: "all", value: "all" },
    { key: "completed", value: "completed" },
    { key: "notCompleted", value: "not-completed" },
    { key: "delete", value: "delete" },
  ];

  const [filter, setFilter] = useState("");

  const onSelect = (filter: string) => {
    setFilter(filter);
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
              onCheckbox={(id: string, isChecked: boolean) =>
                dispatch(onCheckbox({ id: id, isChecked: isChecked }))
              }
              onRemove={() => dispatch(onRemove(todo.id))}
            />
          ))}
      </ScrollView>
      <Form onAdd={(text) => dispatch(onAdd(text))} />
    </View>
  );
};
export default TaskManager;
