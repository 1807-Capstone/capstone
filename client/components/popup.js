import React from 'react';
import {Grid, Responsive, Item} from 'semantic-ui-react';
import {reduxForm} from 'redux-form';
import {updateUserOnServer} from '../store/user';
import {addReviewToServer} from '../store/review';
import {addWaitTime} from '../store/waittimes';
import {connect} from 'react-redux';
import {findRestaurantById} from '../store/restaurant';
import ReactStars from 'react-stars';

const mapState = state => ({
  singleRestaurant: state.restaurant.oneRestaurant
});

const mapDispatchToProps = dispatch => ({
  updateUserOnServer: user => dispatch(updateUserOnServer(user, 'didCheckIn')),
  addReview: review => dispatch(addReviewToServer(review)),
  addWaitTime: waitTime => dispatch(addWaitTime(waitTime)),
  findRestaurant: restaurantId => dispatch(findRestaurantById(restaurantId))
});

class PopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      waitTime: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    if (this.props.findRestaurant) {
      const restaurantId = this.props.user.checkedInRestaurants[
        this.props.user.checkedInRestaurants.length - 1
      ];
      await this.props.findRestaurant(restaurantId);
    }
  }

  handleSubmit = async evt => {
    evt.preventDefault();

    const reviewInfo = {
      userId: this.props.user.id,
      restaurantId: this.props.user.checkedInRestaurants[
        this.props.user.checkedInRestaurants.length - 1
      ],
      rating: this.state.rating
    };

    const waitTimeInfo = {
      time: this.state.waitTime,
      restaurantId: this.props.user.checkedInRestaurants[
        this.props.user.checkedInRestaurants.length - 1
      ]
    };

    await this.props.updateUserOnServer(this.props.user);
    await this.props.addReview(reviewInfo);
    await this.props.addWaitTime(waitTimeInfo);
    this.props.closePopup();
  };

  selectRating = rating => {
    this.setState({rating});
  };

  selectWaitTime = evt => {
    this.setState({waitTime: evt.target.value});
  };

  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <Responsive>
            <Grid stackable centered>
              <form className="ui form" onSubmit={this.handleSubmit}>
                <div>
                  <br />
                  <label>
                    <br />
                    <div className="ui one column stackable center aligned page grid">
                      RATE YOUR MEAL AT<br />
                      {this.props.singleRestaurant.name}
                      <br />
                    </div>
                    <div className="ui one column stackable center aligned page grid">
                      <ReactStars
                        count={5}
                        value={this.state.rating}
                        edit={true}
                        half={true}
                        color="35b3bf"
                        onChange={this.selectRating}
                      />
                    </div>
                  </label>
                  <br />
                </div>
                <br />
                <div>
                  <label className="ui one column stackable center aligned page grid">
                    WAIT TIME<select
                      name="waitTime"
                      onChange={this.selectWaitTime}
                    >
                      <option value="">---</option>
                      <option value="0">No wait</option>
                      <option value="15">Under 15 minutes</option>
                      <option value="30">15-30 minutes</option>
                      <option value="60">30-60 minutes</option>
                      <option value="90">Over 60 minutes</option>
                    </select>
                  </label>
                  <br />
                  <br />
                </div>
                <div className="ui one column stackable center aligned page grid">
                  <button className="ui black basic small button" type="submit">
                    SUBMIT
                  </button>
                </div>
              </form>
            </Grid>
          </Responsive>
        </div>
      </div>
    );
  }
}

const PopupForm = reduxForm({
  form: 'popup'
})(PopUp);

export default connect(mapState, mapDispatchToProps)(PopupForm);
