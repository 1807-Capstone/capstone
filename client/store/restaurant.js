import axios from 'axios'

// Action types
const GOT_ALL_RESTAURANTS = 'GOT_ALL_RESTAURANTS'
const GOT_ONE_RESTAURANT = 'GOT_ONE_RESTAURANT'
const REQ_ALL_RESTAURANTS = 'REQ_ALL_RESTAURANTS'
const REQ_ONE_RESTAURANT = 'REQ_ONE_RESTAURANT'
const REQ_FILTERED_RESTAURANTS = 'REQ_FILTERED_RESTAURANTS'
const GOT_FILTERED_RESTAURANTS = 'GOT_FILTERED_RESTAURANTS'

// Action creators
const gotAllRestaurants = allRestaurants => ({
  type: GOT_ALL_RESTAURANTS,
  allRestaurants
})

const reqAllRestaurants = () => ({
  type: REQ_ALL_RESTAURANTS
})

export const gotOneRestaurant = oneRestaurant => ({
  type: GOT_ONE_RESTAURANT,
  oneRestaurant
})

// Thunks
export const fetchAllRestaurantsFromServer = (lat, lng) => {
  console.log('lat and long', lat, lng)
  return async dispatch => {
    dispatch(reqAllRestaurants())
    const res = await axios.post('/api/restaurants', {lat, lng})
    dispatch(gotAllRestaurants(res.data))
  }
}

// export const fetchOneRestaurantFromServer = id => {
//   return async dispatch => {
//     dispatch(reqOneRestaurant())
//     const res = await axios.get(`/api/restaurants/${id}`)
//     dispatch(gotOneRestaurant(res.data))
//   }
// }

const initialState = {
  allRestaurants: [],
  allFetching: false,
  oneRestaurant: {},
  oneFetching: true
}

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_RESTAURANTS:
      return {
        ...state,
        allRestaurants: action.allRestaurants,
        allFetching: false
      }
    case REQ_ALL_RESTAURANTS:
      return {...state, allFetching: true}
    case GOT_ONE_RESTAURANT:
      return {
        ...state,
        oneRestaurant: action.oneRestaurant,
        oneFetching: false
      }
    case REQ_ONE_RESTAURANT:
      return {...state, oneFetching: true}
    default:
      return state
  }
}

export default reducer
