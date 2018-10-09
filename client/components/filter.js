import React from 'react';
import FilterFormRedux from './filterFormRedux';
import RestaurantList from './allRestaurants';
import {
  fetchFilteredRestaurantsFromGoogle,
  getFilteredFromServer
} from '../store/restaurant';
import {connect} from 'react-redux';
import {fetchGeolocation} from '../store/map';
import {Header, Divider, Icon} from 'semantic-ui-react';
import FilteredRestaurantList from './filteredRestaurantList';
import {StyledHeader, StyledBtn} from './styledComponents';
import styled from 'styled-components';

const mapStateToProps = state => ({
  filteredRestaurants: state.restaurant.filtered,
  filteredFetching: state.restaurant.filteredFetching,
  geolocation: state.map.location
});

const mapDispatchToProps = dispatch => ({
  // getFilteredRestaurants: (lat, lng, cuisine, price, rating, distance) =>
  //   dispatch(
  //     fetchFilteredRestaurantsFromGoogle(
  //       lat,
  //       lng,
  //       cuisine,
  //       price,
  //       rating,
  //       distance
  //     )
  //   ),
  fetchFiltered: (price, rating, cuisine) =>
    dispatch(getFilteredFromServer(price, rating, cuisine)),
  geolocate: () => dispatch(fetchGeolocation())
});

const StyledBtn2 = styled(StyledBtn)`
  color: red;
  text-align: right;
  padding-top: -10px;
`;

class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      cuisine: '',
      price: '',
      rating: '',
      distance: '',
      perPage: 6,
      currentPage: [],
      numPages: 0
    };
  }
  selectCuisine = evt => {
    evt.preventDefault();
    this.setState({cuisine: evt.target.value});
  };
  selectPrice = evt => {
    evt.preventDefault();
    this.setState({price: evt.target.value});
  };
  selectRating = (evt, {rating}) => {
    evt.preventDefault();
    this.setState({rating});
  };
  selectDistance = evt => {
    evt.preventDefault();
    this.setState({distance: evt.target.value});
  };
  filter = async evt => {
    evt.preventDefault();
    await this.props.fetchFiltered(
      Number(this.state.price),
      this.state.rating,
      this.state.cuisine
    );
    const perPage = this.state.perPage;
    const firstPage = this.props.filteredRestaurants.slice(0, perPage);
    const numPages = Math.ceil(this.props.filteredRestaurants.length / perPage);
    this.setState({
      currentPage: firstPage,
      numPages: numPages
    });
  };
  componentDidMount() {
    this.props.geolocate();
  }

  handleSelectPage = (evt, {activePage}) => {
    const startIndex = (activePage - 1) * this.state.perPage;
    const endIndex = startIndex + this.state.perPage;
    const pageRestaurants = this.props.filteredRestaurants.slice(
      startIndex,
      endIndex
    );
    this.setState({currentPage: pageRestaurants});
  };

  render() {
    return (
      <div className="ui one column stackable center aligned page grid">
        <Divider />
        <StyledHeader>FILTER</StyledHeader>
        <FilterFormRedux
          handleSubmit={this.filter}
          handleSelectCuisine={this.selectCuisine}
          handleSelectPrice={this.selectPrice}
          handleSelectRating={this.selectRating}
          handleSelectDistance={this.selectDistance}
        />
        {this.props.filteredRestaurants.length &&
        this.state.currentPage.length ? (
          <div>
            <div className="two column doubling ui grid">
              <FilteredRestaurantList
                restaurants={this.state.currentPage}
                numPages={this.state.numPages}
                handleSelect={this.handleSelectPage}
              />
            </div>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
