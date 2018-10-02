import React from 'react'
import FilterFormRedux from './filterFormRedux'
import RestaurantList from './allRestaurants'
import {fetchFilteredRestaurantsFromServer} from '../store/restaurant'
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
  allRestaurants: state.restaurant.allRestaurants,
  geolocation: state.map.location
})

const mapDispatchToProps = dispatch => ({
  getFilteredRestaurants: () => dispatch(fetchFilteredRestaurantsFromServer()),
  geolocate: () => dispatch(fetchGeolocation())
})

class Filter extends React.Component {
  constructor() {
    super()
    this.state = {
      cuisine: ''
    }
  }
  select = evt => {
    evt.preventDefault()
    this.setState({cuisine: evt.target.elements.cuisine.value})
  }
  filter = evt => {
    evt.preventDefault()
    console.log('evt target', evt.target.elements.cuisine.value)
    this.props.getFilteredRestaurants()
  }
  componentDidMount() {
    this.props.geolocate()
  }
  render() {
    console.log('location', this.props.geolocation)
    return (
      <div className="ui form">
        <br />
        <h2 className="ui one column stackable center aligned page grid">
          Filter
        </h2>
        <br />
        <br />
        <FilterFormRedux
          handleSubmit={this.filter}
          handleSelect={this.select}
        />
        <br />
        <br />
        <RestaurantList />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
