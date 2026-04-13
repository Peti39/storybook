import {TodoInput} from "./TodoInput"

export default {
  title: "Components/TodoForm",
  component: TodoInput,
};

export const NoValue = {
  data: {
    value: "",
    error: "",
    onChange: () => { },
    onSubmit: () => { },
  },
};
export const Value = {
  data: {
    value: "Make a cake",
    error: "",
    onChange: () => { },
    onSubmit: () => { },
  },
};
export const Error = {
  data: {
    value: "",
    error: "Invalid input",
    onChange: () => { },
    onSubmit: () => { },
  },
};