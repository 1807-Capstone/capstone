import React from 'react'
import mapboxgl from 'mapbox-gl'
import {fetchAllRestaurantsFromServer} from '../store/restaurant'
import {connect} from 'react-redux'

import {withRouter} from 'react-router-dom'
import {setLocation, fetchGeolocation} from '../store/map'

import styled from 'styled-components'
import {Button} from 'semantic-ui-react'

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA'

const Box = styled.div`
  height: 90vh;
  width: 100vw;
  display: inline-block;
  position: relative;
`

// let startLat = document.createElement('div')
// let startLon = document.createElement('div')

// var startPos
// var geoSuccess = function(position) {
//   startPos = position
//   document.getElementById('startLat').innerHTML = startPos.coords.latitude
//   document.getElementById('startLon').innerHTML = startPos.coords.longitude
//   // startLat = startPos.coords.latitude
//   // startLon = startPos.coords.longitude
// }
// navigator.geolocation.getCurrentPosition(geoSuccess)
// console.log('startlat', startLat)
// console.log('startlon', startLon)
// // console.log(startPos)

let map

let mapIsEmpty = true
let toggleNavigation = true

let directions = new MapboxDirections({
  accessToken: mapboxgl.accessToken
})
const mapStateToProps = state => {
  return {
    restaurants: state.restaurant.allRestaurants,
    fetching: state.restaurant.allFetching,
    location: state.map.location,
    geolocation: state.map.geolocation
  }
}

const mapDispatchToProps = dispatch => ({
  getRestaurants: (lat, lng) =>
    dispatch(fetchAllRestaurantsFromServer(lat, lng)),
  setLocation: location => dispatch(setLocation(location)),
  fetchGeolocation: () => dispatch(fetchGeolocation())
})

export class MapView extends React.Component {
  async componentDidMount() {
    await this.props.fetchGeolocation()
    console.log('current location', this.props.location)
    map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [this.props.location.lng, this.props.location.lat],
      zoom: this.props.location.zoom,
      attributionControl: false
    }).addControl(new mapboxgl.AttributionControl({compact: true}))

    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav, 'top-right')

    await this.geolocate()
  }
  async shouldComponentUpdate(nextProps) {
    console.log('this props', this.props)
    console.log('next props', nextProps)
    console.log('mapisempty', mapIsEmpty)

    if (this.props.location.lng !== nextProps.location.lng) {
      await this.props.fetchGeolocation()
      // const {lng, lat} = await map.getCenter()
      // this.props.setLocation({
      //   lng: lng.toFixed(4),
      //   lat: lat.toFixed(4),
      //   zoom: map.getZoom().toFixed(2)
      // })
    }
    if (this.props.location.lng === nextProps.location.lng && mapIsEmpty) {
      if (!this.props.fetching) {
        await this.props.getRestaurants(
          this.props.location.lat,
          this.props.location.lng
        )
      }
      mapIsEmpty = false
    }
  }

  componentDidUpdate() {
    this.props.restaurants.map(restaurant => {
      let theHtml =
        "<div class='markerBox'>" +
        `<p>Restaurant: ${restaurant.name}</p>` +
        `<p>${restaurant.geometry.location.lat}</p>` +
        `<p>${restaurant.geometry.location.lat}</p>` +
        `<p>${restaurant.geometry.location.lat}</p>` +
        '<a href="home">test</a>' +
        '</div>'

      this.createMarker(
        restaurant.geometry.location.lng,
        restaurant.geometry.location.lat,
        new mapboxgl.Popup().setHTML(theHtml)
      )
    })
  }

  createMarker = (lng, lat, popUp) => {
    var marker = document.createElement('div')
    marker.className = 'marker'
    return new mapboxgl.Marker(marker)
      .setLngLat([lng, lat])
      .setPopup(popUp)
      .on('click', () => {
        directions.setDestination([lng, lat])
      })
      .addTo(map)
  }

  geolocate() {
    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    })

    map.addControl(geolocate)
    setTimeout(() => geolocate.trigger(), 1000)
    // map.on('move', () => {
    //   const {lng, lat} = map.getCenter()
    //   this.props.setLocation({
    //     lng: lng.toFixed(4),
    //     lat: lat.toFixed(4),
    //     zoom: map.getZoom().toFixed(2)
    //   })
    //   console.log('Mapbox', lng, lat)
    // })
  }
  handleButtonClick = () => {
    // directions.setOrigin([
    //   this.props.location.lng + 0.0088983,
    //   this.props.location.lat - 0.00980448932
    // ])

    if (toggleNavigation) {
      map.on('mousemove', function(e) {
        console.log(e.lngLat)
      })
    } else {
      // map.removeControl(directions)
    }
    toggleNavigation = !toggleNavigation
  }
  // addLayer(obj) {
  //   map.on('load', function() {
  //     map.addLayer(obj)
  //     //obj example
  //     // {
  //     //   id: 'terrain-data',
  //     //   type: 'line',
  //     //   source: {
  //     //     type: 'vector',
  //     //     url: 'mapbox://mapbox.mapbox-terrain-v2'
  //     //   },
  //     //   'source-layer': 'contour'
  //     // }
  //   })
  // }

  render() {
    if (this.props.location) {
      return (
        <div>
          <Button primary onClick={this.handleButtonClick}>
            Directions
          </Button>
          <Box>
            <div>{`Longitude: ${this.props.location.lng} Latitude: ${
              this.props.location.lat
            } Zoom: ${this.props.location.zoom}`}</div>
            <div
              ref={el => (this.mapContainer = el)}
              className="absolute top right left bottom"
            />
          </Box>
        </div>
      )
    } else {
      return null
    }
  }
}

const ConnectedMapView = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MapView)
)

export default ConnectedMapView
