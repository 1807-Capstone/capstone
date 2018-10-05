import React, {Component} from 'react';
import ReactMapGL, {NavigationControl} from 'react-map-gl';
import Dimensions from 'react-dimensions';
import DeckGL, {HexagonLayer} from 'deck.gl';
import axios from 'axios';
import PropTypes from 'prop-types';

const mapBoxToken =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

class Map extends Component {
  async componentDidMount() {
    const response = await axios.get('/api/waittimes');
    this.setState({data: response.data});
  }
  static propTypes = {
    containerWidth: PropTypes.number.isRequired,
    containerHeight: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      viewport: {
        latitude: 41.895579,
        longitude: -87.639064,
        zoom: 13,
        pitch: 0,
        bearing: 0,
        width: this.props.containerWidth,
        height: this.props.containerHeight
      }
    };
  }

  render() {
    console.log(this.props);
    const {updateViewport} = this.props;
    const data = this.state.data;
    const layer = new HexagonLayer({
      id: 'hexagon-layer',
      data,
      pickable: true,
      extruded: false,
      opacity: 0.3,
      radius: 200,
      coverage: 1,
      elevationScale: 4,
      getPosition: d => d.COORDINATES,
    });
    return (
      <div style={{width: '100vw', height: '100vh'}}>
        <DeckGL
          intialViewState={this.state.viewport}
          controller={false}
          viewState={this.state.viewport}
          layers={[layer]}
        >
          <ReactMapGL
            {...this.state.viewport}
            mapboxApiAccessToken={mapBoxToken}
            onViewportChange={viewport => this.setState({viewport})}
          >
            <div style={{position: 'absolute', right: 0}}>
              <NavigationControl onViewportChange={updateViewport} />
            </div>
          </ReactMapGL>
        </DeckGL>
      </div>
    );
  }
}

const connectedMap = Dimensions({
  containerStyle: {width: '100%', height: '100vh'},
  elementResize: true,
  className: 'react-dimensions-wrapper'
})(Map);

export default connectedMap;
