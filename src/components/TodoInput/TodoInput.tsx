import React from "react";

type TodoInputProps = {
  value: string;
  onChange: (value: string) => void;
  onAdd: () => void;
  placeholder?: string;
  disabled?: boolean;
};

export const TodoInput: React.FC<TodoInputProps> = ({
  value,
  onChange,
  onAdd,
  placeholder = "Új feladat...",
  disabled = false,
}) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !disabled) {
      onAdd();
    }
  };

  return (
    <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
      <input
        aria-label="Todo input"
        type="text"
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        style={{
          flex: 1,
          padding: "10px 12px",
          border: "1px solid #ccc",
          borderRadius: "6px",
        }}
      />
      <button
        type="button"
        onClick={onAdd}
        disabled={disabled}
        style={{
          padding: "10px 16px",
          border: "none",
          borderRadius: "6px",
          cursor: disabled ? "not-allowed" : "pointer",
        }}
      >
        Hozzáadás
      </button>
    </div>
  );
};