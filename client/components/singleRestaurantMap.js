import React, {Component} from 'react'
import mapboxgl from 'mapbox-gl'
import {connect} from 'react-redux'
import styled from 'styled-components'

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA'

const Box = styled.div`
  height: 75vh;
  width: 100vw;
  margin: 20px;
`
const mapStateToProps = state => ({
  restaurant: state.restaurant.oneRestaurant
})
let map
class SingleRestaurantMap extends Component {
  componentDidMount() {
    map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [
        this.props.restaurant.geometry.location.lng,
        this.props.restaurant.geometry.location.lat
      ],
      zoom: 15
    })
    new mapboxgl.Marker()
      .setLngLat([
        this.props.restaurant.geometry.location.lng,
        this.props.restaurant.geometry.location.lat
      ])
      .addTo(map)
  }

  render() {
    return (
      <Box>
        <div
          ref={el => (this.mapContainer = el)}
          className="absolute top right left bottom"
        />
      </Box>
    )
  }
}

export default connect(mapStateToProps)(SingleRestaurantMap)
