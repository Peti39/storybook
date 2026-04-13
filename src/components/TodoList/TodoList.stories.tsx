import {TodoList} from "./TodoList"

export default {
  title: "Components/TodoList",
  component: TodoList,
};

export const Empty = {
  args: {
    todos: [],
  },
};

export const MixedTodos = {
  args: {
    todos: [
      { id: 1, text: "Shopping", completed: false },
      { id: 2, text: "Cleaning", completed: true },
      { id: 3, text: "Building a snowman", completed: false },
    ],
  },
};

export const AllDone = {
  args: {
    todos: [
      { id: 1, text: "Shopping", completed: true },
      { id: 2, text: "Cleaning", completed: true },
      { id: 3, text: "Building a snowman", completed: true },
    ],
  },
};