import React, {Component} from 'react';
import styled from 'styled-components';
import {
  Grid,
  Image,
  Responsive,
  GridColumn,
  Item,
  Header
} from 'semantic-ui-react';
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
              <StyledBox2 />
            </Grid.Column>
          </Grid>
        </Responsive>
        <Responsive maxWidth={929}>
          <MobileDiv3>
            <Image src="img/logo_transparent.png" size="medium" centered />
          </MobileDiv3>
          <MobileDiv4 />
          <StyledHeader1>Suggested Restaurants</StyledHeader1>
          {/* <Header as="h2">Suggested Restaurants</Header> */}
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
