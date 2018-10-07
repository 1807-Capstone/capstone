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
        </div>
      </div>
    );
  }
}
