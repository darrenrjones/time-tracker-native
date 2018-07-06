import { START_TIME, TOGGLE_STATUS, CREATE_NEW_TIMER, POPULATE_TIMER, TOGGLE_VIEW, DELETE_TIMER, TOGGLE_DELETE_VIEW, SET_DELETE_INFO } from '../actions';

const initialState = {
  
  list: [
    {
      name: "Clock One",
      time: 3599
    },
    {
      name: "Clock Two",
      time: 59
    },
    {
      name: "New Clock",
      time: 599
    }
  ],
  clockView: false,
  deleteView: false,
  deleteIndex: null,
  deleteName: "",
  currentClock : {
    name: "",
    time: 0,
    status: false   
  }

};

export default function mainReducer(state=initialState, action) {

  if (action.type === START_TIME){
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
    return {
      ...state,
      currentClock: {...state.currentClock, status: !state.currentClock.status}
    }
  }

  if (action.type === CREATE_NEW_TIMER){
    return {
      ...state, 
      list: [...state.list,{name: action.name, time: 0}]     
    }
  }

  if (action.type === POPULATE_TIMER){
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

  if(action.type === TOGGLE_DELETE_VIEW){
    return {
      ...state,
      deleteView: !state.deleteView
    }
  }

  if (action.type === DELETE_TIMER){
    return{
      ...state,
      list: [
        ...state.list.slice(0, action.index),
        ...state.list.slice(action.index + 1)
      ]   
    }   
  }

  if (action.type === SET_DELETE_INFO){
    return{
      ...state,
      deleteIndex: action.index,
      deleteName: action.name 
    }   
  }

  return state;
};

