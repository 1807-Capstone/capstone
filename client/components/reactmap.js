import React, {Component} from 'react';
import ReactMapGL, {
  NavigationControl,
  Marker,
  Popup,
  Layer,
  Feature
} from 'react-map-gl';
import {getRadius} from '../../utils';
import {Button} from 'semantic-ui-react';
import Dimensions from 'react-dimensions';
import DeckGL, {HexagonLayer, IconLayer} from 'deck.gl';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchFilteredRestaurantsFromGoogle} from '../store/restaurant';
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
    filteredRestaurants: state.restaurant.filteredRestaurants,
    filteredFetching: state.restaurant.filteredFetching,
    location: state.map.location
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllData: () => dispatch(fetchAllData()),
  fetchFilteredRestaurantsFromGoogle: (lat, lng, radius) =>
    dispatch(fetchFilteredRestaurantsFromGoogle(lat, lng, radius)),
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
  componentDidMount() {
    this.props.fetchAllData();
    this.props.fetchGeolocation();
    console.log(this.mapRef);
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.location !== prevProps.location &&
      !prevProps.filteredRestaurants.length
    ) {
      this.setState({
        viewport: {
          ...prevState.viewport,
          latitude: this.props.location.lat,
          longitude: this.props.location.lng
        }
      });
    }
    if (
      this.state.viewport.longitude !== prevState.viewport.longitude &&
      !this.props.filteredFetching &&
      !this.props.filteredRestaurants[0]
    ) {
      let dis = getRadius(this.mapRef);
      console.log(
        'Intial Request\nlatitude: ',
        this.props.location.lat,
        '\nlongitude: ',
        this.props.location.lng,
        '\nradius: ',
        Math.floor(dis * 1000) - 700
      );
      this.props.fetchFilteredRestaurantsFromGoogle(
        this.props.location.lat,
        this.props.location.lng,
        Math.floor(dis * 1000) - 700
      );
    }
  }
  static propTypes = {
    containerWidth: PropTypes.number.isRequired,
    containerHeight: PropTypes.number.isRequired
  };

  handleClick = () => {
    let dis = getRadius(this.mapRef);

    console.log(
      'New Request\nlatitude: ',
      this.state.viewport.latitude.toFixed(7),
      '\nlongitude: ',
      this.state.viewport.longitude.toFixed(7),
      '\nradius: ',
      Math.floor(dis * 1000) - 700
    );

    this.props.fetchFilteredRestaurantsFromGoogle(
      this.state.viewport.latitude.toFixed(7),
      this.state.viewport.longitude.toFixed(7),
      Math.floor(dis * 1000) - 700
    );
  };

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
    const restaurants = this.props.filteredRestaurants;
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
      sizeScale: 8,
      getPosition: d => [d.geometry.location.lng, d.geometry.location.lat],
      getIcon: d => 'marker',
      getSize: d => 5,
      getColor: d => [Math.sqrt(d.rating), 140, 0],
      onClick: ({object}) => {
        this.setTooltip(`${object.name}\n${object.rating}`);
      }
    });
    return (
      <div style={{width: '100vw', height: '100vh'}}>
        <Button size="mini" fluid onClick={this.handleClick}>
          Search restaurants here
        </Button>
        <ReactMapGL
          {...this.state.viewport}
          mapboxApiAccessToken={mapBoxToken}
          onViewportChange={viewport => this.setState({viewport})}
          ref={map => (this.mapRef = map)}
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

const sizedMap = Dimensions({
  containerStyle: {width: '100%', height: '100vh'},
  elementResize: true,
  className: 'react-dimensions-wrapper'
})(Map);

const connectedMap = connect(mapStateToProps, mapDispatchToProps)(sizedMap);

export default connectedMap;
