
export const START_TIME = 'START_TIME';
export const startTime = () => ({
    type: START_TIME,   
});

export const TOGGLE_STATUS = 'TOGGLE_STATUS';
export const toggleStatus = () => ({
    type: TOGGLE_STATUS,   
});

export const CREATE_NEW_TIMER = 'CREATE_NEW_TIMER';
export const createNewTimer = (name) => ({
    type: CREATE_NEW_TIMER,
    name   
});

export const POPULATE_TIMER = 'POPULATE_TIMER';
export const populateTimer = (name,time) => ({
    type: POPULATE_TIMER,
    name,
    time   
});

export const TOGGLE_VIEW = 'TOGGLE_VIEW';
export const toggleView = () => ({
    type: TOGGLE_VIEW       
});
export const TOGGLE_DELETE_VIEW = 'TOGGLE_DELETE_VIEW';
export const toggleDeleteView = () => ({
    type: TOGGLE_DELETE_VIEW       
});

export const DELETE_TIMER = 'DELETE_TIMER';
export const deleteTimer = (index) => ({
    type: DELETE_TIMER,
    index   
});
export const SET_DELETE_INFO = 'SET_DELETE_INFO';
export const setDeleteInfo = (index,name) => ({
    type: SET_DELETE_INFO,
    index,
    name   
});