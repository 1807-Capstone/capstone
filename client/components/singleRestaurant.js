import React, {Component} from 'react';
import {getRestaurantFromServer} from '../store/restaurant';
import {getReviewsFromServer, addReviewToServer} from '../store/review';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Grid, Divider, Rating, Image} from 'semantic-ui-react';
import SingleRestaurantMap from './singleRestaurantMap';

const mapStateToProps = state => ({
  restaurant: state.restaurant.oneRestaurant
});

export class SingleRestaurant extends Component {
  render() {
    console.log('restaurant', this.props.restaurant);
    const restaurant = this.props.restaurant;
    if (restaurant) {
      return (
        <Grid stackable>
          <Divider hidden />
          <Grid.Column width={5}>
            <h2>{restaurant.name}</h2>
            <Image src={restaurant.yelpResults.image_url} size="small" />
            <p>
              Radius Rating:
              <Rating
                icon="star"
                defaultRating={Math.floor(restaurant.radiusRating)}
                maxRating={5}
                disabled
              />
            </p>
            <p>
              Yelp Rating:{' '}
              <Rating
                icon="star"
                defaultRating={Math.floor(restaurant.yelpResults.rating)}
                maxRating={5}
                disabled
              />
            </p>
            <p>
              Google Rating:{' '}
              <Rating
                icon="star"
                defaultRating={Math.floor(restaurant.rating)}
                maxRating={5}
                disabled
              />
            </p>
            <p>Price Level:{restaurant.price_level}</p>
            <p>Address: {restaurant.vicinity}</p>
          </Grid.Column>
          <Grid.Column width={6}>
            <SingleRestaurantMap />
          </Grid.Column>
          <Grid.Row>Reviews</Grid.Row>
          {/* {this.props.reviews.length ? (
            <div>
              {this.props.reviews.map(review => {
                return <p>{review.content}</p>
              })}
            </div>
          ) : (
            <p>No reviews for this restaurant yet</p>
          )} */}
        </Grid>
      );
    } else return <h3>Sorry, we could not find this restaurant</h3>;
  }
}

export default connect(mapStateToProps)(SingleRestaurant);
