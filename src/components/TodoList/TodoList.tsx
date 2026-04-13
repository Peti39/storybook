import { TodoItem } from "../TodoItem/TodoItem";

export function TodoList ({ todos, onToggle })  {
  if (todos.length === 0) {
    return <p>No todo</p>;
  }

  return (
    <ul>
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