import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  Grid,
  Header,
  Image,
  Container,
  Item,
  Button,
  Divider
} from 'semantic-ui-react';
import {
  fetchSuggestedRestaurantsFromServer,
  gotOneRestaurant,
  fetchVisited
} from '../store/restaurant';
import {Link} from 'react-router-dom';
import SuggestedRestaurants from './suggestedRestaurants';
import {UserBox} from './styledComponents';

/**
 * COMPONENT
 */

export class UserHome extends Component {
  componentDidMount() {
    this.props.fetchSuggestedRestaurantsFromServer(this.props.id);
    this.props.gotVisitedRestaurants(this.props.id);
  }

  handleLogout() {
    this.props.logout();
  }

  render() {
    return (
      <Container>
        <Divider hidden />
        <Grid centered stackable>
          <Grid.Column computer={5}>
            <h1>Welcome, {this.props.email}</h1>
            <Divider />
            <Image src="img/profile.jpg" circular size="small" centered />
            <Divider hidden />
            <Container centered="true">
              <Button basic as={Link} to="/visited" centered="true">
                Restaurants Visited
              </Button>
              <br />
              <Button basic onClick={this.handleLogout} size="mini" centered>
                Logout
              </Button>
            </Container>
          </Grid.Column>
          <Grid.Column width={11}>
            <UserBox>
              <Header as="h2">Suggested Restaurants</Header>
              <Item.Group divided>
                {!this.props.suggestedFetching ? (
                  <SuggestedRestaurants
                    suggestedRestaurants={this.props.suggestedRestaurants}
                  />
                ) : (
                  <Item>
                    <Item.Header as="a">Loading Suggestions</Item.Header>
                    <Item.Description>Suggestions Loading</Item.Description>
                  </Item>
                )}
              </Item.Group>
            </UserBox>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    id: state.user.id,
    suggestedRestaurants: state.restaurant.suggestedRestaurants,
    suggestedFetching: state.restaurant.suggestedFetching,
    visited: state.restaurant.visited
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSuggestedRestaurantsFromServer: id =>
    dispatch(fetchSuggestedRestaurantsFromServer(id)),
  gotOneRestaurant: restaurant => dispatch(gotOneRestaurant(restaurant)),
  gotVisitedRestaurants: id => dispatch(fetchVisited(id)),
  logout: () => dispatch(logout)
});

export default connect(mapState, mapDispatchToProps)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
  // imgUrl: PropTypes.string
};
