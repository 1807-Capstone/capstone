import React, {Component} from 'react';
import ReactMapGL, {NavigationControl, Marker, Popup} from 'react-map-gl';
import {getRadius} from '../../utils';
import {Button} from 'semantic-ui-react';
import Dimensions from 'react-dimensions';
import DeckGL, {HexagonLayer} from 'deck.gl';
import {connect} from 'react-redux';
import {
  fetchRestaurantsList,
  fetchRadiusYelpResultPopup,
  fetchFilteredRestaurantsFromGoogle
} from '../store/restaurant';
import {fetchAllData} from '../store/waittimes';
import {retrieveCenter} from '../store/map';
import RestaurantPopup from './restaurantPopup';
import RestaurantPin from './restaurantPin';
import PropTypes from 'prop-types';

const mapBoxToken =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

const mapStateToProps = state => {
  return {
    data: state.waittimes.allData,
    dataFetching: state.waittimes.dataFetching,
    filteredRestaurants: state.restaurant.filteredRestaurants,
    filteredFetching: state.restaurant.filteredFetching,
    center: state.map.center
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllData: () => dispatch(fetchAllData()),
  fetchFilteredRestaurantsFromGoogle: (lat, lng, radius) =>
    dispatch(fetchFilteredRestaurantsFromGoogle(lat, lng, radius)),
  retrieveCenter: () => dispatch(retrieveCenter()),
  fetchRadiusYelpResultPopup: (googleRestaurantObj, prevRestaurantsList) =>
    dispatch(
      fetchRadiusYelpResultPopup(googleRestaurantObj, prevRestaurantsList)
    )
});

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 41.895579,
        longitude: -87.639064,
        zoom: 13,
        pitch: 0,
        bearing: 0,
        width: this.props.containerWidth,
        height: this.props.containerHeight
      },
      popupInfo: null
    };
  }
  static propTypes = {
    containerWidth: PropTypes.number.isRequired,
    containerHeight: PropTypes.number.isRequired
  };
  componentDidMount() {
    this.props.fetchAllData();
    this.props.retrieveCenter();
    console.log(this.mapRef);
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.center !== prevProps.center &&
      !prevProps.filteredRestaurants.length
    ) {
      this.setState({
        viewport: {
          ...prevState.viewport,
          latitude: this.props.center.lat,
          longitude: this.props.center.lng
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
        'Initial Request\nlatitude: ',
        this.props.center.lat,
        '\nlongitude: ',
        this.props.center.lng,
        '\nradius: ',
        Math.floor(dis * 1000) - 700
      );
      this.props.fetchFilteredRestaurantsFromGoogle(
        this.props.center.lat,
        this.props.center.lng,
        Math.floor(dis * 1000) - 700
      );
    }
  }

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

  renderRestaurantMarker = restaurant => {
    return (
      <Marker
        key={`marker-${restaurant.id}`}
        longitude={restaurant.geometry.location.lng}
        latitude={restaurant.geometry.location.lat}
        captureClick={true}
      >
        <RestaurantPin
          size={20}
          onClick={() => {
            this.setState({popupInfo: restaurant});
          }}
        />
      </Marker>
    );
  };

  updateViewport = viewport => {
    this.setState({viewport});
  };

  renderPopup = () => {
    const {popupInfo} = this.state;
    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.geometry.location.lng}
          latitude={popupInfo.geometry.location.lat}
          onClose={() => this.setState({popupInfo: null})}
        >
          <RestaurantPopup restaurant={popupInfo} />
        </Popup>
      )
    );
  };

  render() {
    const restaurants = this.props.filteredRestaurants;
    const data = this.props.data;
    const layer = new HexagonLayer({
      id: 'hexagon-layer',
      data,
      pickable: false,
      extruded: true,
      elevationScale: 1.3,
      opacity: 0.2,
      radius: 200,
      coverage: 1,
      getPosition: d => d.COORDINATES
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
          <DeckGL
            intialViewState={this.state.viewport}
            viewState={this.state.viewport}
            layers={[layer]}
          />

          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              padding: '10px'
            }}
          >
            <NavigationControl onViewportChange={this.updateViewport} />
          </div>
          {restaurants[0] && restaurants.map(this.renderRestaurantMarker)}
          {this.renderPopup()}
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
