import React from 'react'
import mapboxgl from 'mapbox-gl'

import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {setLocation} from '../store/map'

import styled from 'styled-components'

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA'

const Box = styled.div`
  height: 90vh;
  width: 100vw;
  display: inline-block;
  position: relative;
`

let map
const mapDispatchToProps = dispatch => {
  return {
    setLocation: location => dispatch(setLocation(location))
  }
}

const mapStateToProps = state => {
  return {
    location: state.map.location,
    markers: state.map.markers
  }
}

export class MapView extends React.Component {
  componentDidMount() {
    console.log('componentdidmount', this.props)
    map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [this.props.location.lng, this.props.location.lat],
      zoom: this.props.location.zoom
    })
    this.geolocate()
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
    map.on('move', () => {
      const {lng, lat} = map.getCenter()

      this.props.setLocation({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      })
    })
  }
  createMarker(lng, lat, className) {
    var marker = document.createElement('div')
    marker.className = className
    new mapboxgl.Marker(marker).setLngLat([lng, lat]).addTo(map)
  }

  addLayer(obj) {
    map.on('load', function() {
      map.addLayer(obj)
      //obj example
      // {
      //   id: 'terrain-data',
      //   type: 'line',
      //   source: {
      //     type: 'vector',
      //     url: 'mapbox://mapbox.mapbox-terrain-v2'
      //   },
      //   'source-layer': 'contour'
      // }
    })
  }

  render() {
    if (this.props.location) {
      return (
        <div>
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
