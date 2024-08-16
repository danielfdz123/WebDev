import { configureStore } from '@reduxjs/toolkit'
import { memberReducer } from './memberRedux'
import { tasksReducer } from './taskRedux';

const store = configureStore({
  reducer: {
    // Define a top-level state field
    member: memberReducer,
    tasks: tasksReducer,
  }
})

export default store;