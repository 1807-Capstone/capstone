import axios from 'axios'

const initialState = {restaurants: [], singleRestaurant: {}}

// Action types
const GET_RESTAURANTS = 'GET_RESTAURANTS'
const GET_SINGLE_RESTAURANT = 'GET_RESTAURANT'

// Action creators
const getRestaurants = restaurants => ({
  type: GET_RESTAURANTS,
  restaurants
})

const getRestaurant = restaurant => ({
  type: GET_SINGLE_RESTAURANT,
  restaurant
})

// Thunks
export const getRestaurantsFromServer = () => {
  return async dispatch => {
    const res = await axios.get('/api/restaurants')
    dispatch(getRestaurants(res.data))
  }
}

export const getRestaurantFromServer = (id) => {
  return async dispatch => {
    const res = await axios.get(`/api/restaurants/${id}`)
    dispatch(getRestaurant(res.data))
  }
}

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESTAURANTS:
      return {...state, restaurants: action.restaurants}
    case GET_SINGLE_RESTAURANT:
      return {...state, singleRestaurant: action.restaurant}
    default:
      return state
  }
}

export default reducer;
