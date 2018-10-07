import React, {PureComponent, Component} from 'react';
import ReactStars from 'react-stars';

export default class RestaurantPopup extends Component {
  render() {
    const {restaurant} = this.props;
    const displayName = `${restaurant.name}`;

    return (
      <div>
        <div>
          <a
            style={{color: '#9999ff'}}
            target="_new"
            href={`/restaurants/${displayName}`}
          >
            {displayName}
          </a>
          <div>
            Google Rating
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
          {
            restaurant.yelpImg && (
              <div>
                <img width={50} src={restaurant.yelpImg} />
              </div>
            )
          }
        </div>
      </div>
    );
  }
}
