/* eslint-disable complexity */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Image, Button, Icon } from 'semantic-ui-react';
import { updateUserOnServer } from '../store/user';
import SingleRestaurantMap from './singleRestaurantMap';
import ReactStars from 'react-stars';
import { StyledTitle } from './styledComponents';
import { updateCheckInOnServer } from '../store/checkin';
import { fetchGeolocation } from '../store/map';
import PropTypes from 'prop-types';

const mapStateToProps = state => ({
  restaurant: state.restaurant.oneRestaurant,
  user: state.user,
  userLocation: state.map.location
});

const mapDispatchToProps = dispatch => ({
  triggerCheckIn: user => dispatch(updateUserOnServer(user, 'didCheckIn')),
  addCheckIn: checkIn => dispatch(updateCheckInOnServer(checkIn)),
  fetchGeolocation: () => dispatch(fetchGeolocation())
});

export class SingleRestaurant extends Component {
  constructor(props) {
    super(props);
    this.handleCheckIn = this.handleCheckIn.bind(this);
  }

  handleCheckIn = () => {
    const checkInInfo = {
      userId: this.props.user.id,
      restaurantId: this.props.restaurant.id,
      name: this.props.restaurant.name
    };
    this.props.addCheckIn(checkInInfo);
    this.props.triggerCheckIn(this.props.user);
  };

  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    const restaurant = this.props.restaurant;
    const price = restaurant.price_level;

    if (restaurant) {
      return (
        < div >
          <Grid stackable>
            <Button
              onClick={this.context.router.history.goBack}
              basic
              style={{
                marginLeft: '15px',
                marginTop: '7px',
                height: '3vh',
                padding: '1px',
                paddingRight: '10px'
              }}
            >
              <Icon name="angle left" color="black" />
              Back
            </Button>

            <Grid.Column computer={5} mobile={10}>
              {restaurant.yelpResults.image_url && (
                <Image src={restaurant.yelpResults.image_url} />
              )}
              <StyledTitle>{restaurant.name}</StyledTitle>
              <br />
              <div />
              <Button
                fluid
                className="ui color1 button"
                onClick={this.handleCheckIn}
              >
                Check In Here
              </Button>
              {restaurant.radiusRating && (
                <div>
                  <br />
                  Radius Rating:
                  <ReactStars
                    count={5}
                    value={restaurant.radiusRating}
                    half={true}
                    edit={false}
                    color2="#35b3bf"
                  />
                </div>
              )}
              {restaurant.yelpResults.rating && (
                <div>
                  Yelp Rating:{' '}
                  <ReactStars
                    count={5}
                    value={restaurant.yelpResults.rating}
                    half={true}
                    edit={false}
                    color2="#C50A00"
                  />
                </div>
              )}
              <div>
                Google Rating:{' '}
                <ReactStars
                  count={5}
                  value={restaurant.rating}
                  half={true}
                  edit={false}
                  color2="#C58600"
                />
              </div>
              <br />
              {price === 1 && <p>Price Level: $</p>}
              {price === 2 && <p>Price Level: $$</p>}
              {price === 3 && <p>Price Level: $$$</p>}
              {price === 4 && <p>Price Level: $$$$</p>}
              <p>Address: {restaurant.vicinity}</p>
              <br />
              <Button
                fluid
                className="ui color1 button"
                onClick={() =>
                  window.open(
                    `https://www.google.com/maps/dir/${this.props.userLocation
                      .lat - 0.0092787},${this.props.userLocation.lng +
                      0.008707}/${restaurant.location[0]},${
                    restaurant.location[1]
                    }/@${this.props.userLocation.lat},${
                    this.props.userLocation.lng
                    },14z`,
                    '_blank'
                  )
                }
              >
                Get Directions
              </Button>
              <br />
            </Grid.Column>
            <Grid.Column computer={6} mobile={10}>
              <SingleRestaurantMap />
            </Grid.Column>
          </Grid>
        </div >
      );
    } else return <h3>Sorry, we could not find this restaurant</h3>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleRestaurant);
