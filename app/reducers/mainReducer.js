import { ADD_STOPWATCH, START_TIME, TOGGLE_STATUS } from '../actions';

const initialState = {
  list: [],
  status: false,
  time: 3332343,
};

export default function mainReducer(state=initialState, action) {

  if (action.type === START_TIME){
    console.log('timer ticked');
    return {
      ...state,
      time: state.time + 1
    }
  }
  if(action.type === ADD_STOPWATCH){
    console.log('added stopwatch');    
    return null;
  } 
  if (action.type === TOGGLE_STATUS){
    console.log('status toggled : ', !state.status);
    return {
      ...state,
      status: !state.status
    }
  }

  return state;
};

