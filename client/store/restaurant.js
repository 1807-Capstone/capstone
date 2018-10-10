/* eslint-disable complexity */

import axios from 'axios';

// Action types
const GOT_ALL_RESTAURANTS = 'GOT_ALL_RESTAURANTS';
const GOT_ONE_RESTAURANT = 'GOT_ONE_RESTAURANT';
const REQ_ALL_RESTAURANTS = 'REQ_ALL_RESTAURANTS';
const REQ_ONE_RESTAURANT = 'REQ_ONE_RESTAURANT';
const REQ_FILTERED_RESTAURANTS = 'REQ_FILTERED_RESTAURANTS';
const GOT_FILTERED_RESTAURANTS = 'GOT_FILTERED_RESTAURANTS';
const GOT_SUGGESTED_RESTAURANTS = 'GOT_SUGGESTED_RESTAURANTS';
const REQ_SUGGESTED_RESTAURANTS = 'REQ_SUGGESTED_RESTAURANTS';
const GET_FILTERED_FROM_SERVER = 'GET_FILTERED_FROM_SERVER';
const GOT_RADIUS_YELP_RESULT_FROM_SERVER = 'GOT_RADIUS_YELP_RESULT_FROM_SERVER';
const REQ_RADIUS_YELP_RESULT_FROM_SERVER = 'REQ_RADIUS_YELP_RESULT_FROM_SERVER';
const REQ_RESTAURANTS_LIST = 'REQ_RESTAURANTS_LIST';
const GOT_RESTAURANTS_LIST = 'GOT_RESTAURANTS_LIST';
const GET_VISITED_FROM_SERVER = 'GET_VISITED_FROM_SERVER';
const GOT_NEXT_PAGE = 'GOT_NEXT_PAGE';
const GOT_RESTAURANT_FROM_MAP = 'GOT_RESTAURANT_FROM_MAP';

// Action creators
const gotAllRestaurants = allRestaurants => ({
  type: GOT_ALL_RESTAURANTS,
  allRestaurants
});

const reqAllRestaurants = () => ({
  type: REQ_ALL_RESTAURANTS
});

export const gotOneRestaurant = oneRestaurant => ({
  type: GOT_ONE_RESTAURANT,
  oneRestaurant
});

export const reqSuggestedRestaurants = () => ({
  type: REQ_SUGGESTED_RESTAURANTS
});

export const gotSuggestedRestaurants = suggestedRestaurants => ({
  type: GOT_SUGGESTED_RESTAURANTS,
  suggestedRestaurants
});

const reqFilteredRestaurants = () => ({
  type: REQ_FILTERED_RESTAURANTS
});

const gotFilteredRestaurants = filteredRestaurants => ({
  type: GOT_FILTERED_RESTAURANTS,
  filteredRestaurants
});

const getFilteredRestaurantsFromServer = filtered => ({
  type: GET_FILTERED_FROM_SERVER,
  filtered
});

const reqRestaurantsList = () => ({
  type: REQ_RESTAURANTS_LIST
});

const gotRestaurantsList = restaurantsList => ({
  type: GOT_RESTAURANTS_LIST,
  restaurantsList
});

const reqRadiusYelpResultsPopup = () => ({
  type: REQ_RADIUS_YELP_RESULT_FROM_SERVER
});

const gotRadiusYelpResultsPopup = (restaurantsList, newPopupInfo) => ({
  type: GOT_RADIUS_YELP_RESULT_FROM_SERVER,
  restaurantsList,
  newPopupInfo
});

const getVisitedRestaurantsFromServer = visited => ({
  type: GET_VISITED_FROM_SERVER,
  visited
});

const gotNextPage = nextPage => ({
  type: GOT_NEXT_PAGE,
  nextPage
});

const gotRestaurantFromMap = restaurant => ({
  type: GOT_RESTAURANT_FROM_MAP,
  restaurant
});

// Thunks
export const fetchAllRestaurantsFromServer = (lat, lng) => {
  return async dispatch => {
    dispatch(reqAllRestaurants());
    const res = await axios.post('/api/restaurants', {lat, lng});
    dispatch(gotAllRestaurants(res.data));
  };
};

export const fetchSuggestedRestaurantsFromServer = id => {
  return async dispatch => {
    dispatch(reqSuggestedRestaurants());
    const res = await axios.get(`/api/users/${id}/suggested`);
    dispatch(gotSuggestedRestaurants(res.data));
  };
};

export const getFilteredFromServer = (price, rating, cuisine) => {
  return async dispatch => {
    const res = await axios.post('/api/restaurants/filteredServer', {
      price,
      rating,
      cuisine
    });
    dispatch(getFilteredRestaurantsFromServer(res.data));
  };
};

export const sendRestaurantToPageFromMap = restaurant => {
  return dispatch => {
    dispatch(gotRestaurantFromMap(restaurant));
  };
};

// export const getFilteredFromServer = (price, rating, cuisine) => {
//   return async dispatch => {
//     const res = await axios.post('/api/testaurants/restaurantsList', {
//       price,
//       rating,
//       cuisine
//     });
//     console.log(res);
//     dispatch(getFilteredRestaurantsFromServer(res.data));
//   };
// };

export const fetchVisited = id => {
  return async dispatch => {
    const res = await axios.get(`/api/users/${id}/visited`);
    dispatch(getVisitedRestaurantsFromServer(res.data));
  };
};

export const fetchFilteredRestaurantsFromGoogle = (
  lat,
  lng,
  radius,
  cuisine,
  price,
  rating
) => {
  return async dispatch => {
    dispatch(reqFilteredRestaurants());
    const res = await axios.post('/api/restaurants/filteredGoogle', {
      lat,
      lng,
      radius,
      cuisine,
      price,
      rating
    });
    dispatch(gotFilteredRestaurants(res.data));
  };
};

export const fetchRestaurantsList = (
  lat,
  lng,
  radius,
  cuisine,
  price,
  rating
) => {
  return async dispatch => {
    dispatch(reqRestaurantsList());
    const res = await axios.post('/api/testaurants/restaurantsList', {
      lat,
      lng,
      radius,
      cuisine,
      price,
      rating
    });
    const restaurantsList = res.data.restaurantsList;
    const secondPageToken = res.data.secondPageToken;
    dispatch(gotRestaurantsList(restaurantsList));
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    async function secondReq(token) {
      let data;
      await delay(2500);
      data = await axios.post('/api/testaurants/nextPage', {
        token
      });
      return data;
    }
    if (secondPageToken) {
      const response = await secondReq(secondPageToken);
      const nextPage = response.data;
      dispatch(gotNextPage(nextPage));
    }
  };
};

export const fetchRadiusYelpResultPopup = (
  googleRestaurantObj,
  prevRestaurantsList
) => {
  return async dispatch => {
    const response = await axios.post('/api/testaurants/popups', {
      googleRestaurantObj,
      prevRestaurantsList
    });
    const newRestaurantList = response.data.prevRestaurantsList;
    const newPopupInfo = response.data.popupInfo;
    dispatch(gotRadiusYelpResultsPopup(newRestaurantList, newPopupInfo));
    dispatch(gotRestaurantFromMap(newPopupInfo));
  };
};

export const findRestaurantById = restaurantId => {
  return async dispatch => {
    const response = await axios.get(`/api/restaurants/${restaurantId}`);
    dispatch(gotOneRestaurant(response.data));
  };
};

const initialState = {
  allRestaurants: [],
  allFetching: true,
  oneRestaurant: {},
  oneFetching: true,
  filteredRestaurants: [],
  filteredFetching: false,
  suggestedRestaurants: [],
  suggestedFetching: true,
  filtered: [],
  restaurantsList: [],
  restaurantsListFetching: false,
  radiusFetching: false,
  newPopupInfo: {},
  visited: []
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_RESTAURANTS:
      return {
        ...state,
        allRestaurants: action.allRestaurants,
        allFetching: false
      };
    case REQ_ALL_RESTAURANTS:
      return {...state, allFetching: true};
    case GOT_ONE_RESTAURANT:
      return {
        ...state,
        oneRestaurant: action.oneRestaurant,
        oneFetching: false
      };
    case REQ_ONE_RESTAURANT:
      return {...state, oneFetching: true};
    case REQ_FILTERED_RESTAURANTS:
      return {...state, filteredFetching: true};
    case GOT_FILTERED_RESTAURANTS:
      return {
        ...state,
        filteredRestaurants: action.filteredRestaurants,
        filteredFetching: false
      };
    case GOT_SUGGESTED_RESTAURANTS:
      return {
        ...state,
        suggestedRestaurants: action.suggestedRestaurants,
        suggestedFetching: false
      };
    case REQ_SUGGESTED_RESTAURANTS:
      return {
        ...state,
        suggestedFetching: true
      };
    case GET_FILTERED_FROM_SERVER:
      return {
        ...state,
        filtered: action.filtered
      };
    case GOT_RADIUS_YELP_RESULT_FROM_SERVER:
      return {
        ...state,
        restaurantsList: action.restaurantsList,
        newPopupInfo: action.newPopupInfo,
        radiusFetching: false
      };
    case REQ_RADIUS_YELP_RESULT_FROM_SERVER:
      return {
        ...state,
        radiusFetching: true
      };
    case GOT_RESTAURANTS_LIST:
      return {
        ...state,
        restaurantsList: action.restaurantsList,
        restaurantsListFetching: false
      };
    case REQ_RESTAURANTS_LIST:
      return {
        ...state,
        restaurantsListFetching: true
      };
    case GET_VISITED_FROM_SERVER:
      return {
        ...state,
        visited: action.visited
      };
    case GOT_NEXT_PAGE:
      return {
        ...state,
        restaurantsList: [...state.restaurantsList, ...action.nextPage]
      };
    case GOT_RESTAURANT_FROM_MAP:
      return {
        ...state,
        oneRestaurant: action.restaurant
      };
    default:
      return state;
  }
};

export default reducer;
