import type { Meta, StoryObj } from "@storybook/react";
import { TodoList } from "./TodoList";

const meta: Meta<typeof TodoList> = {
  title: "Components/TodoList",
  component: TodoList,
  args: {
    onToggle: (id: number) => alert(`Toggled item: ${id}`),
  },
};

export default meta;
type Story = StoryObj<typeof TodoList>;

export const Empty: Story = {
  args: {
    todos: [],
  },
};

export const MixedTodos: Story = {
  args: {
    todos: [
      { id: 1, text: "Vásárlás", completed: false },
      { id: 2, text: "Takarítás", completed: true },
      { id: 3, text: "Tanulás", completed: false },
    ],
  },
};

export const AllCompleted: Story = {
  args: {
    todos: [
      { id: 1, text: "Mosogatás", completed: true },
      { id: 2, text: "Porszívózás", completed: true },
      { id: 3, text: "Email elküldése", completed: true },
    ],
  },
};