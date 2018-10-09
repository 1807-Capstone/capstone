import axios from 'axios';

// Action types
const GOT_ALL_DATA = 'GOT_ALL_DATA';
const REQ_ALL_DATA = 'REQ_ALL_DATA';
const ADD_WAIT_TIME = 'ADD_WAIT_TIME';

// Action creators

const gotAllData = allData => ({
  type: GOT_ALL_DATA,
  allData
});

const reqAllData = () => ({
  type: REQ_ALL_DATA
});

const newWaitTime = waitTime => ({
  type: ADD_WAIT_TIME,
  waitTime
});

// Thunks

export const fetchAllData = () => {
  return async dispatch => {
    dispatch(reqAllData());
    const response = await axios.get('/api/waittimes');
    dispatch(gotAllData(response.data));
  };
};

export const addWaitTime = waitTime => async dispatch => {
  try {
    const response = await axios.post('/api/waittimes', {waitTime});
    dispatch(newWaitTime(response.data));
  } catch (err) {
    console.error(err);
  }
};

// Initial State
const initialState = {
  allData: [],
  dataFetching: true
};

// aaaaaand the reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_DATA:
      return {
        ...state,
        allData: action.allData,
        dataFetching: false
      };
    case REQ_ALL_DATA:
      return {
        ...state,
        dataFetching: true
      };
    case ADD_WAIT_TIME:
      return {
        ...state,
        allData: [...state, action.waitTime]
      };
    default:
      return state;
  }
};

export default reducer;
