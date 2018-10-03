import React, {Component} from 'react'
import {getRestaurantFromServer} from '../store/restaurant'
import {getReviewsFromServer, addReviewToServer} from '../store/review'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Grid, Divider, GridColumn, Image} from 'semantic-ui-react'
import SingleRestaurantMap from './singleRestaurantMap'

const mapStateToProps = state => ({
  restaurant: state.restaurant.oneRestaurant,
  reviews: state.review
})

const mapDispatchToProps = dispatch => ({
  getReviews: name => dispatch(getReviewsFromServer(name))
})

export class SingleRestaurant extends Component {
  componentDidMount() {
    this.props.getReviews({name: this.props.restaurant.name})
  }
  render() {
    const restaurant = this.props.restaurant
    if (restaurant) {
      return (
        <Grid stackable>
          {/* <Link to="/restaurants">back to all restaurants</Link> */}
          <Divider hidden />
          <Grid.Column width={5}>
            <Image size="small" src={restaurant.imgUrl} />
            <h2>{restaurant.name}</h2>
            {/* <img src={restaurant.imgUrl0} /> */}
            <p>Yelp Rating: {restaurant.yelpRating}</p>
            <p>Google Rating: {restaurant.googleRating}</p>
            <p>Radius Rating: {restaurant.radiusRating}</p>
            <p>Our Rating:</p>
            <p>{restaurant.price}</p>
            <p>Price Level:</p>
            <p>{restaurant.price}</p>
            {/* <p>{restaurant.vicinity}</p> */}
            {/* <p>Open now {restaurant.opening_hours.open_now}</p> */}
          </Grid.Column>
          <Grid.Column width={6}>
            <SingleRestaurantMap />
          </Grid.Column>
          <Grid.Row>Reviews</Grid.Row>
          {this.props.reviews.length ? (
            <div>
              {this.props.reviews.map(review => {
                return <p>{review.content}</p>
              })}
            </div>
          ) : (
            <p>No reviews for this restaurant yet</p>
          )}
        </Grid>
      )
    } else return <h3>Sorry, we could not find this restaurant</h3>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleRestaurant)
