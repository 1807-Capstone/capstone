import axios from 'axios';

const initialState = {checkIns: []};

const ADD_CHECK_IN = 'ADD_CHECK_IN';

const addCheckIn = checkIn => ({
  type: ADD_CHECK_IN,
  checkIn
});

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
    case ADD_CHECK_IN:
      return {...state, checkIns: [...state.checkIns, action.checkIn]};
    default:
      return state;
  }
};

export default reducer;
