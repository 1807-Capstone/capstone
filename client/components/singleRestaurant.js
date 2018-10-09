import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Image, Button} from 'semantic-ui-react';
import {updateUserOnServer} from '../store/user';
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

  static contextTypes = {
    router: () => true
  };

  render() {
    const restaurant = this.props.restaurant;
    const price = restaurant.price_level;

    if (restaurant) {
      return (
        <div>
          <br />
          <Grid stackable>
            <Grid.Column computer={5} mobile={10}>
              <Image src={restaurant.yelpResults.image_url} />
              <StyledTitle>{restaurant.name}</StyledTitle>
              <br />
              <div>
                <Button
                  basic
                  fluid
                  onClick={this.context.router.history.goBack}
                >
                  Go Back
                </Button>
              </div>
              <br />
              <Button basic onClick={this.handleCheckIn}>
                Check In Here
              </Button>
              <div>
                <br />
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
              <br />
              {price === 1 && <p>Price Level: $</p>}
              {price === 2 && <p>Price Level: $$</p>}
              {price === 3 && <p>Price Level: $$$</p>}
              {price === 4 && <p>Price Level: $$$$</p>}
              <p>Address: {restaurant.vicinity}</p>
            </Grid.Column>
            <Grid.Column computer={6} mobile={10}>
              <SingleRestaurantMap />
            </Grid.Column>
          </Grid>
        </div>
      );
    } else return <h3>Sorry, we could not find this restaurant</h3>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleRestaurant);
