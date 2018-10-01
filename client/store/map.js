const initialState = {location: {lng: 5, lat: 34, zoom: 1}}

//Action Types
const SET_LOCATION = 'SET_LOCATION'

export const setLocation = location => ({
  type: SET_LOCATION,
  location
})

//Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return {...state, location: action.location}
    default:
      return state
  }
}

export default reducer
