import axios from 'axios'
import {GOOGLE_MAPS_API} from '../config'

const initialState = {location: {lng: 5, lat: 34, zoom: 1}}

//Action Types
const INITIAL_GEOLOCATE = 'INITIAL_GEOLOCATE'
const SET_LOCATION = 'SET_LOCATION'

export const setLocation = location => ({
  type: SET_LOCATION,
  location
})

export const initialGeolocation = geolocation => ({
  type: INITIAL_GEOLOCATE,
  geolocation
})

//Thunks

export const fetchGeolocation = () => {
  return async dispatch => {
    const res = await axios.post(
      `https://www.googleapis.com/geolocation/v1/geolocate?key=${GOOGLE_MAPS_API}`,
      {
        // considerIp: 'false',
        // wifiAccessPoints: [
        //   {
        //     macAddress: '00:25:9c:cf:1c:ac',
        //     signalStrength: -43,
        //     signalToNoiseRatio: 0
        //   },
        //   {
        //     macAddress: '00:25:9c:cf:1c:ad',
        //     signalStrength: -55,
        //     signalToNoiseRatio: 0
        //   }
        // ]
      }
    )
    dispatch(initialGeolocation(res.data))
  }
}

//Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return {...state, location: action.location}
    case INITIAL_GEOLOCATE:
      return {
        ...state,
        location: {
          lng: action.geolocation.location.lng,
          lat: action.geolocation.location.lat,
          zoom: state.location.zoom
        }
      }
    default:
      return state
  }
}

export default reducer
