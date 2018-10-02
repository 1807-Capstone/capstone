import React, {Component} from 'react'
import {getRestaurantFromServer} from '../store/restaurant'
import {getReviewsFromServer, addReviewToServer} from '../store/review'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import mapboxgl from 'mapbox-gl'
import {Grid, Divider, GridColumn} from 'semantic-ui-react'
import SingleRestaurantMap from './singleRestaurantMap'

const mapStateToProps = state => ({
  restaurant: state.restaurant.oneRestaurant
})

const mapDispatchToProps = dispatch => ({
  getRestaurant: id => dispatch(getRestaurantFromServer(id)),
  getReviews: restaurantId => dispatch(getReviewsFromServer(restaurantId))
})

export class SingleRestaurant extends Component {
  render() {
    const restaurant = this.props.restaurant
    if (restaurant) {
      return (
        <Grid stackable>
          <Link to="/restaurants">back to all restaurants</Link>
          <Divider hidden />
          <Grid.Column width={5}>
            <h2>{restaurant.name}</h2>
            {/* <img src={restaurant.imgUrl0} /> */}
            <p>Yelp Rating: {restaurant.yelpResults.rating}</p>
            <p>Google Rating: {restaurant.rating}</p>
            <p>Our Rating:</p>
            <p>{restaurant.price}</p>
            <p>Price Level:</p>
            <p>{restaurant.yelpResults.price}</p>
            <p>{restaurant.vicinity}</p>
            <p>Open now {restaurant.opening_hours.open_now}</p>
          </Grid.Column>
          <Grid.Column width={6}>
            <SingleRestaurantMap />
          </Grid.Column>
          <Grid.Row>Reviews</Grid.Row>
          {/* {this.props.reviews.length ? (
            <div>
              {this.props.reviews.map(review => {
                return <Review key={review.id} review={review} />
              })}
            </div>
          ) : (
            <p>No reviews for this restaurant yet</p>
          )} */}
        </Grid>
      )
    } else return <h3>Sorry, we could not find this restaurant</h3>
  }
}

export default SingleRestaurant

// export default connect(mapStateToProps, mapDispatchToProps)(SingleRestaurant)
