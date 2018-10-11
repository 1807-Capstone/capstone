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
import {logout, me} from '../store/user';

/**
 * COMPONENT
 */

export class UserHome extends Component {
  async componentDidMount() {
    await this.props.me();
    if (this.props.id) {
      this.props.fetchSuggestedRestaurantsFromServer(this.props.id);
      this.props.gotVisitedRestaurants(this.props.id);
    }
  }

  handleLogout() {
    this.props.logout();
  }

  render() {
    return (
      <Container>
        <Divider hidden />
        {this.props.id ? (
          <Grid centered stackable>
            <Grid.Column computer={5}>
              <h1>Welcome, {this.props.email}</h1>
              <Divider />
              <Image src="img/ghost.png" circular size="small" centered />
              <Divider hidden />
              <Container centered="true">
                <Button
                  fluid
                  as={Link}
                  to="/visited"
                  centered="true"
                  className="ui color1 button"
                >
                  Restaurants Visited
                </Button>
                <br />
                <Button
                  basic
                  onClick={this.handleLogout.bind(this)}
                  size="mini"
                  centered="true"
                >
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
        ) : (
          <div>
            <h1>Sign up or login now!</h1>
            <br />
            <Button as={Link} to="/login" fluid className="ui color1 button">
              Login
            </Button>
            <br />
            <Button as={Link} to="/signup" fluid className="ui color1 button">
              Sign Up
            </Button>
          </div>
        )}
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
  logout: () => dispatch(logout()),
  me: () => dispatch(me())
});

export default connect(mapState, mapDispatchToProps)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
  // imgUrl: PropTypes.string
};
