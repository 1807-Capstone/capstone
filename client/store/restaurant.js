import axios from 'axios'

// Action types
const GOT_ALL_RESTAURANTS = 'GOT_ALL_RESTAURANTS'
const GOT_ONE_RESTAURANT = 'GOT_ONE_RESTAURANT'
const REQ_ALL_RESTAURANTS = 'REQ_ALL_RESTAURANTS'
const REQ_FILTERED_RESTAURANTS = 'REQ_FILTERED_RESTAURANTS'
const GOT_FILTERED_RESTAURANTS = 'GOT_FILTERED_RESTAURANTS'
const GOT_SUGGESTED_RESTAURANTS = 'GOT_SUGGESTED_RESTAURANTS'
const REQ_SUGGESTED_RESTAURANTS = 'REQ_SUGGESTED_RESTAURANTS'

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

export const reqSuggestedRestaurants = () => ({
  type: REQ_SUGGESTED_RESTAURANTS
})

export const gotSuggestedRestaurants = suggestedRestaurants => ({
  type: GOT_SUGGESTED_RESTAURANTS,
  suggestedRestaurants
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

export const fetchSuggestedRestaurantsFromServer = id => {
  return async dispatch => {
    dispatch(reqSuggestedRestaurants())
    const res = await axios.get(`/api/users/${id}/suggested`)
    dispatch(gotSuggestedRestaurants(res.data))
  }
}

export const fetchFilteredRestaurantsFromGoogle = (
  lat,
  lng,
  cuisine,
  price,
  rating,
  distance
) => {
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
  filteredFetching: false,
  suggestedRestaurants: [],
  suggestedFetching: true
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
    case REQ_FILTERED_RESTAURANTS:
      return {...state, filteredFetching: true}
    case GOT_FILTERED_RESTAURANTS:
      return {
        ...state,
        filteredRestaurants: action.filteredRestaurants,
        filteredFetching: false
      }
    case GOT_SUGGESTED_RESTAURANTS:
      return {
        ...state,
        suggestedRestaurants: action.suggestedRestaurants,
        suggestedFetching: false
      }
    case REQ_SUGGESTED_RESTAURANTS:
      return {
        ...state,
        suggestedFetching: true
      }

    default:
      return state
  }
}

export default reducer
