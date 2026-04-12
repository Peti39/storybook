import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { TodoInput } from "./TodoInput";

const meta: Meta<typeof TodoInput> = {
  title: "Components/TodoInput",
  component: TodoInput,
};

export default meta;
type Story = StoryObj<typeof TodoInput>;

export const EmptyInput: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <TodoInput
        value={value}
        onChange={setValue}
        onAdd={() => alert(`Hozzáadva: ${value || "üres érték"}`)}
      />
    );
  },
};

export const PrefilledInput: Story = {
  render: () => {
    const [value, setValue] = useState("Bevásárlás");

    return (
      <TodoInput
        value={value}
        onChange={setValue}
        onAdd={() => alert(`Hozzáadva: ${value}`)}
      />
    );
  },
};

export const DisabledInput: Story = {
  render: () => {
    const [value, setValue] = useState("Nem szerkeszthető");

    return (
      <TodoInput
        value={value}
        onChange={setValue}
        onAdd={() => alert("Nem fut le")}
        disabled
      />
    );
  },
};