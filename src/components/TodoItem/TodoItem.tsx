export function TodoItem({
  id,
  text,
  completed,
  onToggle,
}) {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #000000",
      }}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
      />
      <span
        style={{textDecoration: completed ? "line-through" : "none",}}
        >
        {text}
      </span>
    </li>
  );
};