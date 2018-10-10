/* eslint-disable complexity */

import React, {Component} from 'react';
import ReactMapGL, {NavigationControl, Marker, Popup} from 'react-map-gl';
import {getRadius} from '../../utils';
import {Button, Responsive} from 'semantic-ui-react';
import Dimensions from 'react-dimensions';
import DeckGL, {HexagonLayer} from 'deck.gl';
import {connect} from 'react-redux';
import {
  fetchRestaurantsList,
  fetchRadiusYelpResultPopup
} from '../store/restaurant';
import {fetchAllData} from '../store/waittimes';
import {retrieveCenter, toggleHeatMap} from '../store/map';
import RestaurantPopup from './restaurantPopup';
import RestaurantPin from './restaurantPin';
import ControlPanel from './controlPanel';
import PropTypes from 'prop-types';
import MapFormRedux from './mapFormRedux';
import MapList from './mapListView';
import {StyledSearchButton} from './styledComponents';

const mapBoxToken =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

const mapStateToProps = state => {
  return {
    data: state.waittimes.allData,
    dataFetching: state.waittimes.dataFetching,
    restaurantsList: state.restaurant.restaurantsList,
    restaurantsListFetching: state.restaurant.restaurantsListFetching,
    newPopupInfo: state.restaurant.newPopupInfo,
    center: state.map.center,
    heatMap: state.map.heatMap
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllData: () => dispatch(fetchAllData()),
  fetchRestaurantsList: (lat, lng, radius, cuisine, price) =>
    dispatch(fetchRestaurantsList(lat, lng, radius, cuisine, price)),
  retrieveCenter: () => dispatch(retrieveCenter()),
  fetchRadiusYelpResultPopup: (googleRestaurantObj, prevRestaurantsList) =>
    dispatch(
      fetchRadiusYelpResultPopup(googleRestaurantObj, prevRestaurantsList)
    ),
  toggleHeatMap: () => dispatch(toggleHeatMap())
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
      popupInfo: null,
      cuisine: '',
      price: '',
      distance: ''
    };
  }
  static propTypes = {
    containerWidth: PropTypes.number.isRequired,
    containerHeight: PropTypes.number.isRequired
  };

  selectCuisine = evt => {
    evt.preventDefault();
    this.setState({cuisine: evt.target.value});
  };
  selectPrice = evt => {
    evt.preventDefault();
    this.setState({price: evt.target.value});
  };
  selectDistance = evt => {
    evt.preventDefault();
    this.setState({distance: evt.target.distance});
  };

  componentDidMount() {
    this.props.fetchAllData();
    this.props.retrieveCenter();
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.center !== prevProps.center &&
      !prevProps.restaurantsList.length
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
      !this.props.restaurantsListFetching &&
      !this.props.restaurantsList[0]
    ) {
      let dis = getRadius(this.mapRef);
      this.props.fetchRestaurantsList(
        this.props.center.lat,
        this.props.center.lng,
        Math.floor(dis * 1000) - 700
      );
    }

    if (this.props.newPopupInfo !== prevProps.newPopupInfo) {
      this.setState({popupInfo: this.props.newPopupInfo});
    }
  }

  handleClick = () => {
    let dis = getRadius(this.mapRef);
    let distance;
    if (this.state.distance) {
      distance = this.state.distance;
    } else {
      distance = Math.floor(dis * 1000);
    }

    this.props.fetchRestaurantsList(
      this.state.viewport.latitude.toFixed(7),
      this.state.viewport.longitude.toFixed(7),
      distance,
      this.state.cuisine,
      Number(this.state.price)
    );
  };

  renderRestaurantMarker = (restaurant, index) => {
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
            this.props.fetchRadiusYelpResultPopup(
              restaurant,
              this.props.restaurantsList
            );
            this.setState({popupInfo: restaurant});
          }}
          index={index + 1}
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
    const restaurants = this.props.restaurantsList;
    const data = this.props.data;
    const waitTimes = new HexagonLayer({
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
      <Responsive style={{width: '100vw', height: '100vh'}}>
        <MapFormRedux
          handleSelectCuisine={this.selectCuisine}
          handleSelectPrice={this.selectPrice}
          // handleSelectRating={this.selectRating}
          handleSelectDistance={this.selectDistance}
        />

        {/* <Button size="mini" fluid onClick={this.handleClick}>
          Search restaurants here
        </Button> */}
        <ReactMapGL
          {...this.state.viewport}
          mapboxApiAccessToken={mapBoxToken}
          onViewportChange={viewport => this.setState({viewport})}
          ref={map => (this.mapRef = map)}
        >
          {this.props.heatMap && (
            <DeckGL
              intialViewState={this.state.viewport}
              viewState={this.state.viewport}
              ref={map => (this.deckRef = map)}
              layers={[waitTimes]}
            />
          )}
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              margin: '10px'
            }}
          >
            <ControlPanel
              containerComponent={this.props.containerComponent}
              toggleHeatMap={this.props.toggleHeatMap}
              heatMap={this.props.heatMap}
            />
          </div>

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
        <StyledSearchButton onClick={this.handleClick}>
          SEARCH THIS AREA
        </StyledSearchButton>
        {restaurants.length && <MapList restaurants={restaurants} />}
      </Responsive>
    );
  }
}

const sizedMap = Dimensions({
  containerStyle: {width: '100%', height: '90vh'},
  elementResize: true,
  className: 'react-dimensions-wrapper'
})(Map);

const connectedMap = connect(mapStateToProps, mapDispatchToProps)(sizedMap);

export default connectedMap;
