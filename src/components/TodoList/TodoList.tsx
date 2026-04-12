import React from "react";
import type { Todo } from "../../types/todo";
import { TodoItem } from "../TodoItem/TodoItem";

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
};

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle }) => {
  if (todos.length === 0) {
    return <p>Nincs még feladat.</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
};