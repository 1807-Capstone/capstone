import React, {Component} from 'react'
import ReactMapboxGl, {Layer, Feature} from 'react-mapbox-gl'
import mapboxgl from 'mapbox-gl'

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA'
})

export class MapReact extends Component {
  // componentDidMount() {
  //   const geolocate = new mapboxgl.GeolocateControl({
  //     positionOptions: {
  //       enableHighAccuracy: true
  //     },
  //     trackUserLocation: true
  //   })
  //   map.addControl(geolocate)
  // }
  render() {
    return (
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: '100vh',
          width: '100vw'
        }}
      >
        <Layer type="symbol" id="marker" layout={{'icon-image': 'marker-15'}}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer>
      </Map>
    )
  }
}

export default MapReact
