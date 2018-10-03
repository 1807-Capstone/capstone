import React from 'react'
import FilterFormRedux from './filterFormRedux'
import RestaurantList from './allRestaurants'
import {fetchFilteredRestaurantsFromGoogle} from '../store/restaurant'
import {connect} from 'react-redux'
import {fetchGeolocation} from '../store/map'

// var startLat = document.createElement('div')
// var startLon = document.createElement('div')

// let startLat
// let startLon

// window.onload = function() {
//   var startPos
//   var geoSuccess = function(position) {
//     startPos = position
//     // document.getElementById('startLat').innerHTML = startPos.coords.latitude
//     // document.getElementById('startLon').innerHTML = startPos.coords.longitude
//     startLat = startPos.coords.latitude
//     startLon = startPos.coords.longitude
//   }
//   navigator.geolocation.getCurrentPosition(geoSuccess)
//   console.log(startLat)
//   console.log(startLon)
//   // console.log(startPos)
// }

const mapStateToProps = state => ({
  filteredRestaurants: state.restaurant.filteredRestaurants,
  filteredFetching: state.restaurant.filteredFetching,
  geolocation: state.map.location
})

const mapDispatchToProps = dispatch => ({
  getFilteredRestaurants: (lat, lng, cuisine, price, rating, distance) =>
    dispatch(
      fetchFilteredRestaurantsFromGoogle(
        lat,
        lng,
        cuisine,
        price,
        rating,
        distance
      )
    ),
  geolocate: () => dispatch(fetchGeolocation())
})

class Filter extends React.Component {
  constructor() {
    super()
    this.state = {
      cuisine: '',
      price: '',
      rating: '',
      distance: ''
    }
  }
  selectCuisine = evt => {
    evt.preventDefault()
    this.setState({cuisine: evt.target.value})
  }
  selectPrice = evt => {
    evt.preventDefault()
    this.setState({price: evt.target.value})
  }
  selectRating = (evt, {rating}) => {
    evt.preventDefault()
    this.setState({rating})
  }
  selectDistance = evt => {
    evt.preventDefault()
    this.setState({distance: evt.target.value})
  }
  filter = evt => {
    evt.preventDefault()
    this.props.getFilteredRestaurants(
      this.props.geolocation.lat,
      this.props.geolocation.lng,
      this.state.cuisine,
      Number(this.state.price),
      this.state.rating,
      Number(this.state.distance)
    )
  }
  componentDidMount() {
    this.props.geolocate()
  }
  render() {
    return (
      <div className="ui form">
        <br />
        <h2 className="ui one column stackable center aligned page grid">
          Filter
        </h2>
        <FilterFormRedux
          handleSubmit={this.filter}
          handleSelectCuisine={this.selectCuisine}
          handleSelectPrice={this.selectPrice}
          handleSelectRating={this.selectRating}
          handleSelectDistance={this.selectDistance}
        />
        <br />
        <br />
        {this.props.filteredRestaurants.length ? (
          <div>
            {this.props.filteredRestaurants.map(restaurant => {
              return <p key={restaurant.id}>{restaurant.name}</p>
            })}
          </div>
        ) : (
          <RestaurantList />
        )}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
