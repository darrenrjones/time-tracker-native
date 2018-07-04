import { ADD_STOPWATCH, START_TIME, TOGGLE_STATUS, EXAMPLE } from '../actions';

const initialState = {
  
  list: [
    {
      name: "clockOne",
      time: 59
    }
  ],
  status: false,
  time: 3999,
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
  if (action.type === EXAMPLE){
    console.log('EXAMPLE : ', state.time);
    return {
      ...state,      
    }
  }

  return state;
};

