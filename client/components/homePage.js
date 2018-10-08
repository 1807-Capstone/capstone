import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {
  Grid,
  Image,
  Container,
  Responsive,
  GridColumn,
  Divider,
  Rating
} from 'semantic-ui-react';
import Popup from './popup';
import {addReviewToServer} from '../store/review';
import {me, updateUserOnServer} from '../store/user';

const StyledBox = styled.div`
  background: #35b3bf;
  height: 90vh;
`;

const StyledBox2 = styled(StyledBox)`
  background: #16a1ae;
`;

const StyledText = styled.h1`
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-size: 70px;
  font-weight: 800;
  text-decoration: underline;
`;

const MobileDiv1 = styled.div`
  width: 100vw;
  height: 30.5vh;
  background-image: url('img/map.jpg');
  background-size: cover;
`;

const MobileDiv2 = styled(MobileDiv1)`
  background: #16a1ae;
`;

const MobileDiv3 = styled(MobileDiv1)`
  background: #35b3bf;
`;

const MobileDiv4 = styled(MobileDiv1)`
  background-image: url('img/cooks.jpeg');
`;

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch(addReviewToServer(review)),
  me: () => dispatch(me())
});

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      rating: '',
      waitTime: ''
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    await this.props.me();
    if (this.props.user.didCheckIn) {
      this.setState({
        showPopup: true
      });
    }
  }

  selectRating = (evt, {rating}) => {
    evt.preventDefault();
    this.setState({rating});
  };

  selectWaitTime = evt => {
    this.setState({waitTime: evt.target.value});
  };

  // handleSubmit = evt => {
  //   evt.preventDefault();
  //   console.log('in handle submit');
  //   // this.togglePopup();
  //   console.log('rating', this.state.rating);
  //   console.log('wait time', this.state.waitTime);
  //   const reviewInfo = {
  //     userId: this.props.user.id,
  //     restaurantId: this.props.user.checkedInRestaurants[
  //       this.props.user.checkedInRestaurants.length - 1
  //     ],
  //     rating: this.state.rating
  //   };

  //   // const waitTimeInfo = {
  //   //   name: this.state.waitTime,
  //   //   restaurantId: this.props.user.checkedInRestaurants[
  //   //     this.props.user.checkedInRestaurants.length - 1
  //   //   ]
  //   // };
  //   this.props.updateUserOnServer(this.props.user);
  //   this.props.addReview(reviewInfo);
  //   // this.props.addWaitTime(waitTimeInfo);
  //   // this.setState({showPopup: false});
  //   this.props.user.didCheckIn = false;
  // };

  // shouldComponentUpdate(nextProps) {
  //   console.log('this', this.props.user);
  //   console.log('next', nextProps.user);
  //   if (
  //     this.props.user.didCheckIn !== nextProps.user.didCheckIn &&
  //     this.state.showPopup
  //   ) {
  //     return true;
  //   } else return false;
  // }

  // componentDidUpdate() {
  //   console.log('here');
  //   this.togglePopup();
  // }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    // console.log('props', this.props);
    console.log('state in render', this.state);
    return (
      <div>
        <Responsive minWidth={930}>
          <Grid centered>
            <Grid.Column width={4}>
              <img src="img/food.jpeg" />
            </Grid.Column>
            <Grid.Column width={4}>
              <img src="img/pasta.jpeg" />
            </Grid.Column>
            <GridColumn width={4}>
              <StyledBox>
                <Image src="img/logo_transparent.png" size="medium" centered />
              </StyledBox>
            </GridColumn>
            <Grid.Column width={4}>
              {/* <img src="img/burger.jpeg" /> */}
              <StyledBox2>
                <StyledText>FIND YOUR FOOD HERE.</StyledText>
              </StyledBox2>
            </Grid.Column>
          </Grid>
        </Responsive>
        <Responsive maxWidth={929}>
          <MobileDiv4 />
          <MobileDiv3>
            {/* <button type="button" onClick={this.togglePopup.bind(this)}>
              show popup
            </button> */}
            {this.state.showPopup && this.props.user.id ? (
              <Popup
                text="Rate your meal"
                restaurant={
                  this.props.user.checkedInRestaurants[
                    this.props.user.checkedInRestaurants.length - 1
                  ]
                }
                selectWaitTime={this.selectWaitTime}
                selectRating={this.selectRating}
                closePopup={this.togglePopup.bind(this)}
                // submit={this.handleSubmit.bind(this)}
                user={this.props.user}
              />
            ) : (
              <Image src="img/logo_transparent.png" size="medium" centered />
            )}
            {/* <Popup /> */}
            {/* <Image src="img/logo_transparent.png" size="medium" centered /> */}
          </MobileDiv3>
          <MobileDiv2 />
        </Responsive>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
