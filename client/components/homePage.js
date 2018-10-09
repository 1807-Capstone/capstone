import React, {Component} from 'react';
import {Grid, Image, Responsive, GridColumn, Item} from 'semantic-ui-react';
import {fetchSuggestedRestaurantsFromServer} from '../store/restaurant';
import {me} from '../store/user';
import {connect} from 'react-redux';
import SuggestedRestaurants from './suggestedRestaurants';
import {
  MobileDiv2,
  MobileDiv3,
  MobileDiv4,
  StyledBox,
  StyledBox2,
  StyledHeader1
} from './styledComponents';
import Popup from './popup';

// class HomePage extends Component {
//   async componentDidMount() {
//     await this.props.me();
//     this.props.fetchSuggestedRestaurantsFromServer(this.props.user);
//   }
//   render() {
//     return (
//       <div>
//         <Responsive minWidth={930}>
//           <Grid centered>
//             <Grid.Column width={4}>
//               <img src="img/food.jpeg" />
//             </Grid.Column>
//             <Grid.Column width={4}>
//               <img src="img/pasta.jpeg" />
//             </Grid.Column>
//             <GridColumn width={4}>
//               <StyledBox>
//                 <Image src="img/logo_transparent.png" size="medium" centered />
//               </StyledBox>
//             </GridColumn>
//             <Grid.Column width={4}>
//               {/* <img src="img/burger.jpeg" /> */}
//               <StyledBox2 />
//             </Grid.Column>
//           </Grid>
//         </Responsive>
//         <Responsive maxWidth={929}>
//           <MobileDiv3>
//             <Image src="img/logo_transparent.png" size="medium" centered />
//           </MobileDiv3>
//           <MobileDiv4 />
//           <StyledHeader1>Suggested Restaurants</StyledHeader1>
//           <MobileDiv2>
//             {this.props.suggestedRestaurants.length && (
//               <Item.Group divided>
//                 <SuggestedRestaurants
//                   suggestedRestaurants={this.props.suggestedRestaurants}
//                 />
//               </Item.Group>
//             )}
//           </MobileDiv2>
//         </Responsive>
//       </div>
//     );
//   }
// }

const mapStateToProps = state => ({
  suggestedRestaurants: state.restaurant.suggestedRestaurants,
  user: state.user.id
});

const mapDispatchToProps = dispatch => ({
  fetchSuggestedRestaurantsFromServer: id =>
    dispatch(fetchSuggestedRestaurantsFromServer(id)),
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
    this.props.fetchSuggestedRestaurantsFromServer(this.props.user);
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
              <StyledBox2 />
            </Grid.Column>
          </Grid>
        </Responsive>
        <Responsive maxWidth={929}>
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
          <MobileDiv4 />
          <StyledHeader1>Suggested Restaurants</StyledHeader1>
          <MobileDiv2>
            {this.props.suggestedRestaurants.length && (
              <Item.Group divided>
                <SuggestedRestaurants
                  suggestedRestaurants={this.props.suggestedRestaurants}
                />
              </Item.Group>
            )}
          </MobileDiv2>
        </Responsive>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
