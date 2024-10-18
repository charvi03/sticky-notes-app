import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [], 
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        text: action.payload,
      };
      state.tasks.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(state.tasks)); 
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks)); 
    },
    loadingTask: (state) => {
      const tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks'));
      state.tasks = tasksFromLocalStorage || []; 
    },
  },
});

export const { addTask, removeTask, loadingTask } = taskSlice.actions; 
export default taskSlice.reducer;
