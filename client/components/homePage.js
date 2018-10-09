import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Grid, Image, Responsive, GridColumn} from 'semantic-ui-react';
import Popup from './popup';
import {me} from '../store/user';

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
  me: () => dispatch(me())
});

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    };
  }

  async componentDidMount() {
    await this.props.me();
    if (this.props.user.didCheckIn) {
      this.setState({
        showPopup: true
      });
    }
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <div>
        <Responsive minWidth={930}>
          <Grid centered>
            <Grid.Column width={4}>
              <img src="img/food.jpeg" />
            </Grid.Column>
            {this.state.showPopup && this.props.user.id ? (
              <Grid.Column width={8} height={30}>
                <Popup
                  restaurant={
                    this.props.user.checkedInRestaurants[
                      this.props.user.checkedInRestaurants.length - 1
                    ]
                  }
                  user={this.props.user}
                  closePopup={this.togglePopup.bind(this)}
                />
              </Grid.Column>
            ) : (
              <div>
                <Grid.Column width={4}>
                  <img src="img/pasta.jpeg" />
                </Grid.Column>
                <GridColumn width={4}>
                  <StyledBox>
                    <Image
                      src="img/logo_transparent.png"
                      size="medium"
                      centered
                    />
                  </StyledBox>
                </GridColumn>
              </div>
            )}
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
            {this.state.showPopup && this.props.user.id ? (
              <Popup
                restaurant={
                  this.props.user.checkedInRestaurants[
                    this.props.user.checkedInRestaurants.length - 1
                  ]
                }
                user={this.props.user}
                closePopup={this.togglePopup.bind(this)}
              />
            ) : (
              <Image src="img/logo_transparent.png" size="medium" centered />
            )}
          </MobileDiv3>
          <MobileDiv2 />
        </Responsive>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
