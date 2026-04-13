import {TodoItem} from "./TodoItem"

export default {
  title: "Components/TodoItem",
  component: TodoItem,
};

export const Basic = {
  data: {
    id: 1,
    text: "Make a cake",
    completed: false,
  },
};

export const Completed = {
  args: {
    id: 2,
    text: "Learn to play the piano",
    completed: true,
  },
};

export const LongText = {
  args: {
    id: 3,
    text: "A rely realy long text to see how it is displayed on the screen, jfdghjgfhjsdghgfsdfgksdjkfhsjkdhfjkhsdjkhfjkhj",
    completed: false,
  },
};