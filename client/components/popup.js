import React from 'react';
import {Grid, Rating} from 'semantic-ui-react';
import {reduxForm} from 'redux-form';
import {updateUserOnServer} from '../store/user';
import {addReviewToServer} from '../store/review';
import {connect} from 'react-redux';

// const PopUp = () => {
//   return (
//     <div>
//   <Popup
//     trigger={<button type="button">Trigger</button>}
//     position="right center"
//   >
//     <div>Popup content</div>
//     {/* <alert('rate your meal')> */}
//   </Popup>

//     </div>
//   )
// };

const mapDispatchToProps = dispatch => ({
  updateUserOnServer: user => dispatch(updateUserOnServer(user, 'didCheckIn')),
  addReview: review => dispatch(addReviewToServer(review))
});

class PopUp extends React.Component {
  handleSubmit = evt => {
    evt.preventDefault();
    console.log('in handle submit');

    const reviewInfo = {
      userId: this.props.user.id,
      restaurantId: this.props.user.checkedInRestaurants[
        this.props.user.checkedInRestaurants.length - 1
      ],
      rating: 5
    };

    this.props.updateUserOnServer(this.props.user);
    this.props.addReview(reviewInfo);
  };

  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <form className="ui form" onSubmit={this.handleSubmit}>
            <Grid stackable centered>
              <Grid.Column
                computer={3}
                style={{margin: '0rem 1rem !important'}}
              >
                <label>
                  RATE YOUR MEAL AT {this.props.restaurant}
                  <Rating
                    icon="star"
                    maxRating={5}
                    onRate={this.props.selectRating}
                  />
                </label>
              </Grid.Column>
              <Grid.Column computer={3}>
                <label>
                  WAIT TIME<select
                    name="waitTime"
                    onChange={this.props.selectWaitTime}
                  >
                    <option value="">---</option>
                    <option value="No wait">No wait</option>
                    <option value="Under 15 minutes">Under 15 minutes</option>
                    <option value="15-30 minutes">15-30 minutes</option>
                    <option value="30-60 minutes">30-60 minutes</option>
                    <option value="Over 60 minutes">Over 60 minutes</option>
                  </select>
                </label>
              </Grid.Column>
            </Grid>
            <div className="ui one column stackable center aligned page grid">
              <button className="ui black basic small button" type="submit">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const PopupForm = reduxForm({
  form: 'popup'
})(PopUp);

export default connect(null, mapDispatchToProps)(PopupForm);
