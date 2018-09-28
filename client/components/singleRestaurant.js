import React, {Component} from 'react'
import {getRestaurantFromServer} from '../store/restaurant'
import {getReviewsFromServer, addReviewToServer} from '../store/review'
import {connect} from 'react-redux'
import {Review} from './review'

// const mapStateToProps = state => {
//   return {
//     restaurants: state.restaurant.singleRestaurant,
//     reviews: state.reviews
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   getRestaurant: id => dispatch(getRestaurantFromServer(id)),
//   getReviews: restaurantId => dispatch(getReviewsFromServer(restaurantId)),
//   addReview: reviewInfo => dispatch(addReviewToServer(reviewInfo))
// })

export class SingleRestaurant extends Component {
  // async componentDidMount() {
  //   const restaurantId = Number(this.props.match.params.id)
  //   await this.props.getRestaurant(restaurantId)
  //   await this.props.getReviews(restaurantId)
  // }

  render() {
    console.log('props', this.props)
    const restaurant = this.props.singleRestaurant
    if (restaurant) {
      return (
        <div>
          <div>
            <h2>{restaurant.name}</h2>
            <img src={restaurant.imgUrl} />
            <p>
              Yelp Rating: {restaurant.yelpRating}
              Google Rating: {restaurant.googleRating}
              Our Rating: {restaurant.radiusRating}
            </p>
            <p>{restaurant.price}</p>
            <p>{restaurant.description}</p>
            <p>{restaurant.location}</p>
            <p>{restaurant.hours}</p>
          </div>
          <h3>Reviews</h3>
          {this.props.reviews.length ? (
            <div>
              {this.props.reviews.map(review => {
                return <Review key={review.id} review={review} />
              })}
            </div>
          ) : (
            <p>No reviews for this restaurant yet</p>
          )}
        </div>
      )
    } else return <h3>Sorry, we could not find this restaurant</h3>
  }
}

export default SingleRestaurant

// export default connect(mapStateToProps, mapDispatchToProps)(SingleRestaurant)
