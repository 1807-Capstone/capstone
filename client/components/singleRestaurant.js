import React, {Component} from 'react';
import {getRestaurantFromServer} from '../store/restaurant';
import {getReviewsFromServer, addReviewToServer} from '../store/review';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Grid, Divider, Rating, Image} from 'semantic-ui-react';
import SingleRestaurantMap from './singleRestaurantMap';
import ReactStars from 'react-stars';
import {StyledTitle} from './styledComponents';

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
          <Grid.Column computer={5} mobile={10}>
            <Image src={restaurant.yelpResults.image_url} />
            <StyledTitle>{restaurant.name}</StyledTitle>
            <p>
              Radius Rating:
              <ReactStars
                count={5}
                value={restaurant.radiusRating}
                half={true}
                color2="#35b3bf"
                size="25px"
              />
            </p>
            <p>
              Yelp Rating:{' '}
              <ReactStars
                count={5}
                value={restaurant.yelpResults.rating}
                half={true}
                color2="#C50A00"
              />
            </p>
            <p>
              Google Rating:{' '}
              <ReactStars
                count={5}
                value={restaurant.rating}
                half={true}
                color2="#C58600"
              />
            </p>
            <p>Price Level:{restaurant.price_level}</p>
            <p>Address: {restaurant.vicinity}</p>
          </Grid.Column>
          <Grid.Column computer={6} mobile={10}>
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
