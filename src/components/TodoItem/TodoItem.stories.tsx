import type { Meta, StoryObj } from "@storybook/react";
import { TodoItem } from "./TodoItem";

const meta: Meta<typeof TodoItem> = {
  title: "Components/TodoItem",
  component: TodoItem,
  args: {
    onToggle: (id: number) => alert(`Toggled item: ${id}`),
  },
};

export default meta;
type Story = StoryObj<typeof TodoItem>;

export const Active: Story = {
  args: {
    id: 1,
    text: "Tanulás",
    completed: false,
  },
};

export const Completed: Story = {
  args: {
    id: 2,
    text: "Mosás",
    completed: true,
  },
};

export const LongText: Story = {
  args: {
    id: 3,
    text: "Nagyon hosszú feladat szöveg, hogy látszódjon hogyan viselkedik a komponens hosszabb tartalom esetén is",
    completed: false,
  },
};