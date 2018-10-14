import React, {Component} from 'react';
import ReactStars from 'react-stars';
import {Item} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {gotOneRestaurant} from '../store/restaurant';
import {connect} from 'react-redux';
import {StyledName} from './styledComponents';

class SuggestedRestaurants extends Component {
  handleRestaurantClick = value => {
    const selectedRestaurant = this.props.suggestedRestaurants.filter(
      restaurant => restaurant.name === value
    );
    this.props.gotOneRestaurant(selectedRestaurant[0]);
  };
  render() {
    return this.props.suggestedRestaurants.map(restaurant => {
      return (
        <Item key={restaurant.id}>
          <Item.Image
            size="small"
            src={restaurant.yelpImg}
            as={Link}
            to={`/restaurants/${restaurant.name}`}
            onClick={() => this.handleRestaurantClick(restaurant.name)}
          />
          <Item.Content>
            <Item.Header
              as={Link}
              to={`/restaurants/${restaurant.name}`}
              value={restaurant.name}
              onClick={() => this.handleRestaurantClick(restaurant.name)}
            >
              <StyledName>{restaurant.name}</StyledName>
            </Item.Header>
            <Item.Description>
              <div>
                Radius Rating
                <ReactStars
                  edit={false}
                  count={5}
                  value={restaurant.radiusRating}
                  half={true}
                  color2="#35b3bf"
                  // size="25px"
                />
              </div>
              <div>
                Google Rating
                <ReactStars
                  edit={false}
                  count={5}
                  value={restaurant.rating}
                  half={true}
                  color2="#C58600"
                />{' '}
              </div>
              <div>
                Yelp Rating
                <ReactStars
                  edit={false}
                  count={5}
                  value={restaurant.yelpResults.rating}
                  half={true}
                  color2="#C50A00"
                />
              </div>
            </Item.Description>
          </Item.Content>
        </Item>
      );
    });
  }
}

const mapDispatchToProps = dispatch => ({
  gotOneRestaurant: restaurant => dispatch(gotOneRestaurant(restaurant))
});

export default connect(null, mapDispatchToProps)(SuggestedRestaurants);
