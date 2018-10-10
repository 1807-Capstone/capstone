import React, {Component} from 'react';
import ReactStars from 'react-stars';
import {Link} from 'react-router-dom';
import {Header} from 'semantic-ui-react';

export default class RestaurantPopup extends Component {
  render() {
    const {restaurant, sendRestaurant} = this.props;
    const displayName = `${restaurant.name}`;
    let singleRestaurant = restaurant;
    let loc = [
      singleRestaurant.geometry.location.lat,
      singleRestaurant.geometry.location.lng
    ];
    singleRestaurant.yelpResults = {test: 'test'};
    if (singleRestaurant.yelpImg) {
      singleRestaurant.yelpResults.image_url = singleRestaurant.yelpImg;
    }
    if (singleRestaurant.yelpRating) {
      singleRestaurant.yelpResults.rating = singleRestaurant.yelpRating;
    }
    if (!singleRestaurant.location) {
      singleRestaurant.location = loc;
    }

    return (
      <div>
        <div>
          <Header
            as={Link}
            to={`/restaurants/${displayName}`}
            color="teal"
            size="small"
          >
            {displayName}
          </Header>
          {/* <a
            onClick={sendRestaurant(restaurant)}
            style={{color: '#9999ff'}}
            href={`/restaurants/${displayName}`}
          >
            {displayName}
          </a> */}
          <div>
            Google Rating:
            <ReactStars
              count={5}
              value={restaurant.rating}
              half={true}
              color2="#C58600"
            />{' '}
          </div>
          {restaurant.yelpRating && (
            <div>
              Yelp Rating:{' '}
              <ReactStars
                count={5}
                value={restaurant.yelpRating}
                half={true}
                color2="#C50A00"
              />
            </div>
          )}
          {restaurant.radiusRating && (
            <div>
              Radius Rating:
              <ReactStars
                count={5}
                value={restaurant.radiusRating}
                half={true}
                color2="#35b3bf"
              />
            </div>
          )}
          {restaurant.yelpImg && (
            <div>
              <img width={50} src={restaurant.yelpImg} />
            </div>
          )}
        </div>
      </div>
    );
  }
}
