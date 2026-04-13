export function TodoInput({ value, error, onChange, onSubmit }) {
  return (
    <div>
      <input
        placeholder="Text here"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={onSubmit}>Add</button>
    </div>
  );
}
