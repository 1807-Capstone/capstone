import React from 'react'
import mapboxgl from 'mapbox-gl'
import {fetchAllRestaurantsFromServer} from '../store/restaurant'
import {connect} from 'react-redux'

import {withRouter} from 'react-router-dom'
import {setLocation} from '../store/map'

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

const mapStateToProps = state => {
  return {
    restaurants: state.restaurant.allRestaurants,
    fetching: state.restaurant.allFetching,
    location: state.map.location
  }
}

const mapDispatchToProps = dispatch => ({
  getRestaurants: (lat, lng) =>
    dispatch(fetchAllRestaurantsFromServer(lat, lng)),
  setLocation: location => dispatch(setLocation(location))
})

let map

let mapIsEmpty = true
let toggleNavigation = true

let directions = new MapboxDirections({
  accessToken: mapboxgl.accessToken
})

export class MapView extends React.Component {
  async componentDidMount() {
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

    // setTimeout(() => {
    //   let location = map.getCenter()
    //   this.props.setLocation({
    //     lng: location.lng.toFixed(4),
    //     lat: location.lat.toFixed(4),
    //     zoom: map.getZoom().toFixed(2)
    //   })
    // }, 3000)
  }

  async shouldComponentUpdate(nextProps) {
    if (this.props.location.lat === nextProps.location.lat && mapIsEmpty) {
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
    this.props.restaurants.map(restaurant =>
      this.createMarker(
        restaurant.geometry.location.lng,
        restaurant.geometry.location.lat,
        new mapboxgl.Popup().setText('Tupac > Biggie')
      )
    )
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
    console.log('location', geolocate)
    setTimeout(() => geolocate.trigger(), 1000)

    // return geolocate
    map.on('move', () => {
      const {lng, lat} = map.getCenter()
      // let lng = geoLocationObject._map._lngLat.lng
      // let lat = geoLocationObject._map._lngLat.lat
      // directions.setOrigin([this.props.location.lng, this.props.location.lat])
      // console.log('first', this.props.location)
      this.props.setLocation({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      })
      // this.props.setLocation([
      //   {
      //     lng: geoLocationObject._lastKnownPosition.coords.longitude,
      //     lat: geoLocationObject._lastKnownPosition.coords.latitude,
      //     zoom: 2
      //   }
      // ])
      // console.log('third', this.props.lng, this.props.lat)
    })
  }
  handleButtonClick = () => {
    directions.setOrigin([this.props.location.lng, this.props.location.lat])
    if (toggleNavigation) {
      map.addControl(directions, 'top-right')
    } else {
      map.removeControl(directions)
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
