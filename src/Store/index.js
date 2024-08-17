import { configureStore } from '@reduxjs/toolkit'
import { employeesReducer } from './employeesSlice.js';
import { tasksReducer } from './tasksSlice.js';

const store = configureStore({
  reducer: {
    // Define a top-level state field
    employees: employeesReducer,
    tasks: tasksReducer,
  }
})

export default store;