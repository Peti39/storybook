import React from "react";

type TodoItemProps = {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
};

export const TodoItem: React.FC<TodoItemProps> = ({
  id,
  text,
  completed,
  onToggle,
}) => {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px 12px",
        border: "1px solid #ddd",
        borderRadius: "6px",
        marginBottom: "8px",
        backgroundColor: completed ? "#f3fff3" : "#fff",
      }}
    >
      <input
        aria-label={`Feladat állapota: ${text}`}
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
      />
      <span
        style={{
          textDecoration: completed ? "line-through" : "none",
          color: completed ? "#777" : "#111",
        }}
      >
        {text}
      </span>
    </li>
  );
};