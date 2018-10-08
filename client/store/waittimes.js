import axios from 'axios';

// Action types
const GOT_ALL_DATA = 'GOT_ALL_DATA';
const REQ_ALL_DATA = 'REQ_ALL_DATA';

// Action creators

const gotAllData = allData => ({
  type: GOT_ALL_DATA,
  allData
});

const reqAllData = () => ({
  type: REQ_ALL_DATA
});

// Thunks

export const fetchAllData = () => {
  return async dispatch => {
    dispatch(reqAllData());
    const response = await axios.get('/api/waittimes');
    dispatch(gotAllData(response.data));
  };
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
    default:
      return state;
  }
};

export default reducer;
