import axios from 'axios';
import {GOOGLE_MAPS_API} from '../config';

const initialState = {
  location: {lng: -87.639064, lat: 41.895579, zoom: 1},
  center: {lng: -87.639064, lat: 41.895579},
  heatMap: true
};

//Action Types
const INITIAL_GEOLOCATE = 'INITIAL_GEOLOCATE';
const SET_LOCATION = 'SET_LOCATION';
const SYNC_LOCATION = 'SYNC_LOCATION';

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

//Thunks

export const retrieveCenter = () => {
  return async dispatch => {
    const {data} = await axios.post(
      `https://www.googleapis.com/geolocation/v1/geolocate?key=${GOOGLE_MAPS_API}`
    );
    dispatch(syncLocation(data));
  };
};

export const fetchGeolocation = () => {
  let mapApi;
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    mapApi = GOOGLE_MAPS_API;
  } else {
    mapApi = GOOGLE_MAPS_API;
  }
  return async dispatch => {
    const res = await axios.post(
      `https://www.googleapis.com/geolocation/v1/geolocate?key=${mapApi}`,
      {}
    );
    dispatch(initialGeolocation(res.data));
  };
};

//Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return {...state, location: action.location};
    case INITIAL_GEOLOCATE:
      return {
        ...state,
        location: {
          lng: action.geolocation.location.lng,
          lat: action.geolocation.location.lat,
          zoom: state.location.zoom
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
    default:
      return state;
  }
};

export default reducer;
