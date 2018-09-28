import React from 'react'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA'

export class MapView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 15
    }
  }

  componentDidMount() {
    const {lng, lat, zoom} = this.state

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom
    })

    map.on('move', () => {
      const {lng, lat} = map.getCenter()

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      })
    })

    map.on('load', function() {
      map.addLayer({
        id: 'terrain-data',
        type: 'line',
        source: {
          type: 'vector',
          url: 'mapbox://mapbox.mapbox-terrain-v2'
        },
        'source-layer': 'contour'
      })
    })

    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    })
    map.addControl(geolocate)
    setTimeout(() => geolocate.trigger(), 1000)
    let mark = document.createElement('div')
    mark.className = 'marker'
    new mapboxgl.Marker(mark).setLngLat([-87.639, 41.8956]).addTo(map)
    // new mapboxgl.LngLat(lng, lat).toBounds(5000)
    console.log('test:', map.getBounds())
  }

  render() {
    const {lng, lat, zoom} = this.state

    return (
      <div>
        <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
          <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
        </div>
        <div
          ref={el => (this.mapContainer = el)}
          className="absolute top right left bottom"
        />
      </div>
    )
  }
}

export default MapView
