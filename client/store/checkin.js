import axios from 'axios';

const initialState = {checkIns: [], checkInsFetching: true};

const ADD_CHECK_IN = 'ADD_CHECK_IN';
const REQ_ALL_CHECK_INS = 'REQ_ALL_CHECK_INS';
const GOT_ALL_CHECK_INS = 'GOT_ALL_CHECK_INS';

const addCheckIn = checkIn => ({
  type: ADD_CHECK_IN,
  checkIn
});

const reqAllCheckins = () => ({
  type: REQ_ALL_CHECK_INS
});

const gotAllCheckins = allCheckins => ({
  type: GOT_ALL_CHECK_INS,
  allCheckins
});

export const fetchAllCheckins = () => {
  return async dispatch => {
    dispatch(reqAllCheckins());
    const response = await axios.get('/api/checkins');
    const allCheckIns = response.data;
    dispatch(gotAllCheckins(allCheckIns));
  };
};

export const updateCheckInOnServer = checkIn => {
  return async dispatch => {
    const res = await axios.post(
      `/api/users/${checkIn.userId}/checkIns`,
      checkIn
    );
    dispatch(addCheckIn(res.data));
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_CHECK_INS:
      return {
        ...state,
        checkIns: action.allCheckins,
        checkInsFetching: false
      };
    case REQ_ALL_CHECK_INS:
      return {
        ...state,
        checkInsFetching: true
      };
    case ADD_CHECK_IN:
      return {...state, checkIns: [...state.checkIns, action.checkIn]};
    default:
      return state;
  }
};

export default reducer;
