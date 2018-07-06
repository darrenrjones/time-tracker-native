import { START_TIME, TOGGLE_STATUS, CREATE_NEW_TIMER, POPULATE_TIMER, TOGGLE_VIEW, SET_STATUS_FALSE } from '../actions';

const initialState = {
  
  list: [
    {
      name: "clock One",
      time: 3599
    },
    {
      name: "clock Two",
      time: 159
    },
    {
      name: "clock Three",
      time: 259
    }
  ],
  clockView: false,
  currentClock : {
    name: "",
    time: 0,
    status: false   
  }

};

export default function mainReducer(state=initialState, action) {

  if (action.type === START_TIME){
    // console.log('timer ticked');
    const list = state.list.map(item => {
      if(item.name === state.currentClock.name){
        return {
          ...item,
          time: item.time + 1,
        }
      }
      else
      {
        return item
      }
    })
    return {
      ...state,
      currentClock: {...state.currentClock, time: state.currentClock.time + 1},
      list
    }
  }

  if (action.type === TOGGLE_STATUS){
    // console.log('status before TOGGLE_STATUS return : ', state.currentClock.status);
    return {
      ...state,
      currentClock: {...state.currentClock, status: !state.currentClock.status}
    }
  }

  if (action.type === CREATE_NEW_TIMER){
    // console.log('timer created : ', action.name);
    return {
      ...state, 
      list: [...state.list,{name: action.name, time: 0}]     
    }
  }

  if (action.type === POPULATE_TIMER){
    // console.log(action.name,action.time);    
    return {
      ...state, 
      currentClock: 
      {
        name: action.name,
        time: action.time,
        status: false
      }
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

