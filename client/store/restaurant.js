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

const reqFilteredRestaurants = () => ({
  type: REQ_FILTERED_RESTAURANTS
})

const gotFilteredRestaurants = filteredRestaurants => ({
  type: GOT_FILTERED_RESTAURANTS,
  filteredRestaurants
})

// Thunks
export const fetchAllRestaurantsFromServer = (lat, lng) => {
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

export const fetchFilteredRestaurantsFromGoogle = (
  lat,
  lng,
  cuisine,
  price,
  rating,
  distance
) => {
  console.log('cuisine', cuisine)
  return async dispatch => {
    dispatch(reqFilteredRestaurants())
    const res = await axios.post('/api/restaurants/filteredGoogle', {
      lat,
      lng,
      cuisine,
      price,
      rating,
      distance
    })
    dispatch(gotFilteredRestaurants(res.data))
  }
}

const initialState = {
  allRestaurants: [],
  allFetching: false,
  oneRestaurant: {},
  oneFetching: true,
  filteredRestaurants: [],
  filteredFetching: false
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
    case REQ_FILTERED_RESTAURANTS:
      return {...state, filteredFetching: true}
    case GOT_FILTERED_RESTAURANTS:
      return {
        ...state,
        filteredRestaurants: action.filteredRestaurants,
        filteredFetching: false
      }
    default:
      return state
  }
}

export default reducer
