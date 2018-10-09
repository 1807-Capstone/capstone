import React, {Component} from 'react';
import {Transition, Item, Button, Responsive} from 'semantic-ui-react';
import {MapOverlay, StyledButton} from './styledComponents';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {gotOneRestaurant} from '../store/restaurant';
import styled from 'styled-components';

const Name = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
`;

class MapList extends Component {
  state = {
    isList: false
  };

  handleRestaurantClick = value => {
    const selectedRestaurant = this.props.restaurants.filter(
      restaurant => restaurant.name === value
    );
    this.props.gotOneRestaurant(selectedRestaurant[0]);
  };

  handleListView() {
    this.setState({isList: !this.state.isList});
  }

  render() {
    return (
      <div>
        <Responsive maxWidth={1199}>
          <Transition
            visible={this.state.isList}
            animation="browse"
            duration={600}
          >
            <MapOverlay>
              <Item.Group divided>
                {this.props.restaurants.map((restaurant, index) => (
                  <Name
                    key={restaurant.name}
                    // onClick={() => this.handleRestaurantClick(restaurant.name)}
                    // as={Link}
                    // to={`/restaurants/${restaurant.name}`}
                  >
                    {index + 1}: {restaurant.name}
                    <br />
                  </Name>
                ))}
              </Item.Group>
            </MapOverlay>
          </Transition>

          <StyledButton onClick={this.handleListView.bind(this)}>
            HIDE LIST
          </StyledButton>

          {!this.state.isList && (
            <StyledButton onClick={this.handleListView.bind(this)}>
              VIEW LIST
            </StyledButton>
          )}
        </Responsive>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  gotOneRestaurant: restaurant => dispatch(gotOneRestaurant(restaurant))
});

export default connect(null, mapDispatchToProps)(MapList);
