//REDUCER
const initialState = [];

export function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case 'tasks/tasksLoaded':
      return action.payload;
    case 'tasks/taskDeleted':
      return state.filter(task => task.id !== action.payload);
    case 'tasks/taskCreated':
      return [...state, action.payload];
    case 'tasks/taskUpdated':
      return state.map(task => 
        task.id === action.payload.id ? action.payload : task
      );
    default:
      return state;
  }
}

//API calls go here
import axios from 'axios';

//PATH (should be where your server is running)
const PATH = "http://localhost:5001/api/tasks";

//Thunk
export const fetchTasks = () => async (dispatch) => {
  try {
    const response = await axios.get(PATH);
    dispatch({ type: 'tasks/tasksLoaded', payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

/* DELETE TASK */
export const deleteTask = (taskId) => async (dispatch) => {
  try {
    await axios.delete(`${PATH}/${taskId}`);
    //delete succesful so change state with dispatch
    dispatch({ type: 'tasks/taskDeleted', payload: taskId });
  } catch (error) {
    console.error(error);
  }
};

/* ADD TASK */
export const addTask = (task) => async (dispatch) => {
  try {
    let res = await axios.post(PATH, task);
    dispatch({ type: 'tasks/taskCreated', payload: res.data });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

/* EDIT TASK */
export const editTask = (task) => async (dispatch) => {
  try {
    const res = await axios.put(`${PATH}/${task.id}`, task);
    dispatch({ type: 'tasks/taskUpdated', payload: res.data });
  } catch (error) {
    console.error(error);
  }
};
