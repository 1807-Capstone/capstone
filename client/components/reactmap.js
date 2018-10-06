import React, {Component} from 'react';
import ReactMapGL, {
  NavigationControl,
  Marker,
  Popup,
  Layer,
  Feature
} from 'react-map-gl';
import Dimensions from 'react-dimensions';
import DeckGL, {HexagonLayer, IconLayer} from 'deck.gl';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchAllRestaurantsFromServer} from '../store/restaurant';
import {fetchAllData} from '../store/waittimes';
import {fetchGeolocation} from '../store/map';
import {StyledTitle} from './styledComponents';

import PropTypes from 'prop-types';

const mapBoxToken =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

const mapStateToProps = state => {
  return {
    data: state.waittimes.allData,
    dataFetching: state.waittimes.dataFetching,
    restaurants: state.restaurant.allRestaurants,
    restaurantsFetching: state.restaurant.allFetching,
    location: state.map.location
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllData: () => dispatch(fetchAllData()),
  fetchAllRestaurantsFromServer: (lat, lng) =>
    dispatch(fetchAllRestaurantsFromServer(lat, lng)),
  fetchGeolocation: () => dispatch(fetchGeolocation())
});

const tooltipStyle = {
  position: 'absolute',
  padding: '4px',
  background: 'rgba(0, 0, 0, 0.8)',
  color: '#fff',
  maxWidth: '300px',
  fontSize: '10px',
  zIndex: 9,
  pointerEvents: 'none'
};

class Map extends Component {
  componentDidMount() {
    console.log(this.props.location);
    this.props.fetchAllData();
    this.props.fetchGeolocation();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.location !== prevProps.location) {
      this.props.fetchAllRestaurantsFromServer(
        this.props.location.lng,
        this.props.location.lat
      );
    }
  }
  static propTypes = {
    containerWidth: PropTypes.number.isRequired,
    containerHeight: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      tooltip: null,
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

  _renderTooltip() {
    const {tooltip} = this.state;
    if (tooltip) {
      return (
        tooltip && (
          <div style={{...tooltipStyle}}>
            {tooltip
              .toString()
              .split('\n')
              .map((str, i) => <p key={i}>{str}</p>)}
          </div>
        )
      );
    }
    return null;
  }

  setTooltip(object) {
    this.setState({tooltip: object});
  }
  render() {
    if (this.props.allFetching) {
      return <h1>Loading</h1>;
    } else {
      const restaurants = this.props.restaurants;
      console.log('restaurants', restaurants);
      const {updateViewport} = this.props;
      const data = this.props.data;
      const layer = new HexagonLayer({
        id: 'hexagon-layer',
        data,
        pickable: true,
        extruded: true,
        elevationScale: 2,
        opacity: 0.2,
        radius: 200,
        coverage: 1,
        getPosition: d => d.COORDINATES
      });
      const markers = new IconLayer({
        id: 'icon-layer',
        data: restaurants,
        pickable: true,
        iconAtlas: '/img/icon-atlas.png',
        iconMapping: {
          marker: {
            x: 0,
            y: 0,
            width: 128,
            height: 128,
            anchorY: 128,
            mask: true
          }
        },
        sizeScale: 5,
        getPosition: d => [d.geometry.location.lng, d.geometry.location.lat],
        getIcon: d => 'marker',
        getSize: d => 5,
        getColor: d => [Math.sqrt(d.rating), 140, 0],
        onHover: ({object}) => {
          this.setTooltip(`${object.name}\n${object.rating}`);
        }
      });
      return (
        <div style={{width: '100vw', height: '100vh'}}>
          <ReactMapGL
            {...this.state.viewport}
            mapboxApiAccessToken={mapBoxToken}
            onViewportChange={viewport => this.setState({viewport})}
          >
            {this._renderTooltip()}
            <DeckGL
              intialViewState={this.state.viewport}
              controller={true}
              viewState={this.state.viewport}
              layers={[layer, markers]}
              setTooltip={this.setTooltip.bind(this)}
            />
            {/* {restaurants.map(restaurant => {
              return (
                <Marker
                  key={restaurant.id}
                  latitude={restaurant.geometry.location.lat}
                  longitude={restaurant.geometry.location.lng}
                  anchor="bottom"
                >
                  <div className="mapMarkerStyle" />
                </Marker>
              );
            })} */}
            <div style={{position: 'absolute', right: 0}}>
              <NavigationControl onViewportChange={updateViewport} />
            </div>
          </ReactMapGL>
        </div>
      );
    }
  }
}

const sizedMap = Dimensions({
  containerStyle: {width: '100%', height: '100vh'},
  elementResize: true,
  className: 'react-dimensions-wrapper'
})(Map);

const connectedMap = connect(mapStateToProps, mapDispatchToProps)(sizedMap);

export default connectedMap;
