import React, {Component} from 'react';
import styled from 'styled-components';
import {Grid, Image, Responsive, GridColumn, Item} from 'semantic-ui-react';
import {fetchSuggestedRestaurantsFromServer} from '../store/restaurant';
import {me} from '../store/user';
import {connect} from 'react-redux';
import SuggestedRestaurants from './suggestedRestaurants';
import {StyledHeader} from './styledComponents';

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
  background: white;
  padding: 5px;
`;

const MobileDiv3 = styled(MobileDiv1)`
  background: #35b3bf;
  height: 20vh;
`;

const MobileDiv4 = styled(MobileDiv1)`
  background: #16a1ae;
  height: 20vh;
`;

const StyledHeader1 = styled(StyledHeader)`
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  width: 98vw;
  border-bottom: 0.25px solid;
`;

class HomePage extends Component {
  async componentDidMount() {
    await this.props.me();
    this.props.fetchSuggestedRestaurantsFromServer(this.props.user);
  }
  render() {
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
          <MobileDiv3>
            <Image src="img/logo_transparent.png" size="medium" centered />
          </MobileDiv3>
          <MobileDiv4 />
          <MobileDiv2>
            <StyledHeader1>Suggested Restaurants</StyledHeader1>
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

const mapStateToProps = state => ({
  suggestedRestaurants: state.restaurant.suggestedRestaurants,
  user: state.user.id
});

const mapDispatchToProps = dispatch => ({
  fetchSuggestedRestaurantsFromServer: id =>
    dispatch(fetchSuggestedRestaurantsFromServer(id)),
  me: () => dispatch(me())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
