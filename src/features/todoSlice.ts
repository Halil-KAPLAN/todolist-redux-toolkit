import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "./types";
import { v4 as uuidv4 } from "uuid";

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      const newTodo = {
        id: uuidv4(),
        title: action.payload,
        completed: false,
      };
      state.push(newTodo);
    },
    remove: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleCompleted: (state, action: PayloadAction<string>) => {
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
  },
});

export default todoSlice.reducer;
export const { add, remove, toggleCompleted } = todoSlice.actions;
