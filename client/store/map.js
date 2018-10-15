import axios from 'axios';

const initialState = {
  location: { lng: -87.639064, lat: 41.895579 },
  center: { lng: -87.639064, lat: 41.895579 },
  heatMap: true,
  checkInMap: false,
  nightMode: false
};

//Action Types
const INITIAL_GEOLOCATE = 'INITIAL_GEOLOCATE';
const SET_LOCATION = 'SET_LOCATION';
const SYNC_LOCATION = 'SYNC_LOCATION';
const TOGGLE_HEAT_MAP = 'TOGGLE_HEAT_MAP';
const TOGGLE_CHECK_IN_MAP = 'TOGGLE_CHECK_IN_MAP';
const TOGGLE_NIGHT_MODE = 'TOGGLE_NIGHT_MODE';

export const setLocation = location => ({
  type: SET_LOCATION,
  location
});

export const initialGeolocation = geolocation => ({
  type: INITIAL_GEOLOCATE,
  geolocation
});

export const syncLocation = center => ({
  type: SYNC_LOCATION,
  center
});

const changeHeatMap = () => ({
  type: TOGGLE_HEAT_MAP
});

const changeCheckInMap = () => ({
  type: TOGGLE_CHECK_IN_MAP
});

const changeNightMode = () => ({
  type: TOGGLE_NIGHT_MODE
});

//Thunks

export const toggleNightMode = () => {
  return dispatch => {
    dispatch(changeNightMode());
  };
};

export const toggleCheckInMap = () => {
  return dispatch => {
    dispatch(changeCheckInMap());
  };
};

export const toggleHeatMap = () => {
  return dispatch => {
    dispatch(changeHeatMap());
  };
};

export const retrieveCenter = () => {
  return async dispatch => {
    const res = await axios.get('/api/map/retrievecenter');


    const { data } = await axios.post(
      `https://www.googleapis.com/geolocation/v1/geolocate?key=${
      res.data
      }`)

    dispatch(syncLocation(data));
  };
};

export const fetchGeolocation = () => {
  return async dispatch => {
    const res = await axios.get('/api/map/retrievecenter');

    const { data } = await axios.post(
      `https://www.googleapis.com/geolocation/v1/geolocate?key=${
      res.data
      }`)
    dispatch(initialGeolocation(data));
  };
};

//Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return { ...state, location: action.location };
    case INITIAL_GEOLOCATE:
      return {
        ...state,
        location: {
          lng: action.geolocation.location.lng,
          lat: action.geolocation.location.lat
        }
      };
    case SYNC_LOCATION:
      return {
        ...state,
        center: {
          lng: action.center.location.lng,
          lat: action.center.location.lat
        }
      };
    case TOGGLE_HEAT_MAP:
      return {
        ...state,
        heatMap: !state.heatMap,
        checkInMap: false
      };
    case TOGGLE_CHECK_IN_MAP:
      return {
        ...state,
        checkInMap: !state.checkInMap,
        heatMap: false
      };
    case TOGGLE_NIGHT_MODE:
      return {
        ...state,
        nightMode: !state.nightMode
      };
    default:
      return state;
  }
};

export default reducer;
