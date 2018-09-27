import React, {Component} from 'react'
import {getRestaurantsFromServer} from '../store/restaurant'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurant.restaurants
  }
}

const mapDispatchToProps = (dispatch) => ({
  getRestaurants: () => dispatch(getRestaurantsFromServer())
})

export class AllRestaurants extends Component {
  async componentDidMount () {
    const restaurants = await this.props.getRestaurants()
    this.setState({
      restaurants: restaurants
    })
  }

  render () {
    if (this.props.restaurants.length) {
      return (
        <div>
          <h2>All Restaurants</h2>
          {this.props.restaurants.map(restaurant => {
            return (
              <div key={restaurant.id}>
                <NavLink
                  to={`/restaurants/${restaurant.id}`}
                  className="item"
                >
                  <h4>{restaurant.name}</h4>
                </NavLink>
                <p>{restaurant.location}</p>
                <p>{restaurant.price}</p>
                <p>{restaurant.yelpRating}</p>
                <p>{restaurant.googleRating}</p>
                <p>{restaurant.radiusRating}</p>
              </div>
            )
          })}
        </div>
      )
    } else return (
      <h3>Sorry, we could not find any restaurants</h3>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllRestaurants)
