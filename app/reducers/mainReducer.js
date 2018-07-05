import { ADD_STOPWATCH, START_TIME, TOGGLE_STATUS, CREATE_NEW_TIMER, POPULATE_TIMER, TOGGLE_VIEW } from '../actions';

const initialState = {
  
  list: [
    {
      name: "clock One",
      time: 59,
      status: false
    },
    {
      name: "clock Two",
      time: 159,
      status: false
    },
    {
      name: "clock Three",
      time: 259,
      status: false
    }
  ],
  clockView: false

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
  if (action.type === CREATE_NEW_TIMER){
    console.log('timer created : ', action.name);
    console.log('list from in mainReducer before return: ',state.list);

    return {
      ...state, 
      list: [...state.list,{name: action.name, time: 0, status: false}]     
    }
  }
  if (action.type === POPULATE_TIMER){
    return {
      ...state,          
    }
  }
  if (action.type === TOGGLE_VIEW){
    return{
      ...state,
      clockView: !state.clockView
    }

    
  }

  return state;
};

