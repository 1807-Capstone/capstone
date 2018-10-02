import React from 'react'
import FilterFormRedux from './filterFormRedux'
import {fetchGeolocation} from '../store/map'
import {connect} from 'react-redux'
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
const mapStateToProps = state => {
  return {
    geolocation: state.map.location
  }
}

const mapDispatchToProps = dispatch => ({
  geolocate: () => dispatch(fetchGeolocation())
})

class Filter extends React.Component {
  componentDidMount() {
    this.props.geolocate()
  }
  render() {
    console.log(this.props.geolocation)
    return (
      <div className="ui form">
        <br />
        <h2 className="ui one column stackable center aligned page grid">
          Filter
        </h2>
        <FilterFormRedux />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
