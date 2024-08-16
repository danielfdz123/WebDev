const initialState = [];

export function memberReducer(state = initialState, action) {
    switch (action.type) {
      case 'members/membersLoaded':
        return action.payload;
      case 'members/membersDeleted':
        return state.filter(member => member.id !== action.payload);
      default:
        return state;
    }
};

//API calls go here
import axios from "axios";
//PATH (should be where your server is running)
const PATH = "https://jsonplaceholder.typicode.com";

//Thunks
export const fetchMembers = () => async (dispatch) => {
  try {
    let res = await axios.get(`${PATH}/users`);
    dispatch({type: 'members/membersLoaded', payload: res.data});
  } catch(err) {
    console.error(err);
  }
};

export const deleteMember = (id) => async (dispatch) => {
  try {
      await axios.delete(`${PATH}/users/${id}`);
      dispatch({type: 'members/membersDeleted', payload: id});
  } catch (error) {
      console.log(error);
  }
}