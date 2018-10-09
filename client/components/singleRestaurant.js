import React, {Component} from 'react';
import {getRestaurantFromServer} from '../store/restaurant';
import {getReviewsFromServer, addReviewToServer} from '../store/review';
import {updateUserOnServer} from '../store/user';
import {connect} from 'react-redux';
import {Grid, Image, Button} from 'semantic-ui-react';
import SingleRestaurantMap from './singleRestaurantMap';
import ReactStars from 'react-stars';
import {StyledTitle} from './styledComponents';
import {updateCheckInOnServer} from '../store/checkin';

const mapStateToProps = state => ({
  restaurant: state.restaurant.oneRestaurant,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  triggerCheckIn: user => dispatch(updateUserOnServer(user, 'didCheckIn')),
  addCheckIn: checkIn => dispatch(updateCheckInOnServer(checkIn))
});

export class SingleRestaurant extends Component {
  constructor(props) {
    super(props);
    this.handleCheckIn = this.handleCheckIn.bind(this);
  }

  handleCheckIn = () => {
    const checkInInfo = {
      userId: this.props.user.id,
      restaurantId: this.props.restaurant.id
    };
    this.props.addCheckIn(checkInInfo);
    this.props.triggerCheckIn(this.props.user);
  };

  render() {
    const restaurant = this.props.restaurant;
    if (restaurant) {
      return (
        <Grid stackable>
          <Grid.Column computer={5} mobile={10}>
            <Image src={restaurant.yelpResults.image_url} />
            <StyledTitle>{restaurant.name}</StyledTitle>
            <br />
            <Button basic onClick={this.handleCheckIn}>
              Check In Here
            </Button>
            <br />
            <div>
              Radius Rating:
              <ReactStars
                count={5}
                value={restaurant.radiusRating}
                half={true}
                edit={false}
                color2="#35b3bf"
                // size="25px"
              />
            </div>
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
            <p>Price Level:{restaurant.price_level}</p>
            <p>Address: {restaurant.vicinity}</p>
          </Grid.Column>
          <Grid.Column computer={6} mobile={10}>
            <SingleRestaurantMap />
          </Grid.Column>
        </Grid>
      );
    } else return <h3>Sorry, we could not find this restaurant</h3>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleRestaurant);
