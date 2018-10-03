import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {
  Grid,
  Header,
  Rating,
  Container,
  Item,
  Button,
  Divider
} from 'semantic-ui-react'
import {fetchSuggestedRestaurantsFromServer} from '../store/restaurant'
import styled from 'styled-components'

/**
 * COMPONENT
 */

const Box = styled.div`
  padding-right: 10px;
  padding-left: 10px;
  height: 90vh;
`

export class UserHome extends Component {
  componentDidMount() {
    this.props.fetchSuggestedRestaurantsFromServer(this.props.id)
  }

  render() {
    return (
      <Container>
        <Divider hidden />
        <Grid centered stackable>
          <Grid.Column computer={5} centered>
            <Item>
              <h1>Welcome, {this.props.email}</h1>
              <Divider />
              <Item.Image src="img/profile.jpg" circular size="small" />
              <Divider hidden />
              <Item.Extra>
                <Button basic>Restaurants Visited</Button>
              </Item.Extra>
              <Item.Extra>
                <Button basic>Account Details</Button>
              </Item.Extra>
            </Item>
          </Grid.Column>
          <Grid.Column width={10}>
            <Box>
              <Header as="h2">Suggested Restaurants</Header>
              <Item.Group divided>
                {!this.props.suggestedFetching ? (
                  this.props.suggestedRestaurants.map(restaurant => {
                    return (
                      <Item key={restaurant.id}>
                        <Item.Image size="small" src={restaurant.imgUrl} />
                        <Item.Content>
                          <Item.Header as="a">{restaurant.name}</Item.Header>
                          <Item.Description>
                            <Rating
                              icon="star"
                              defaultRating={Math.floor(
                                restaurant.googleRating
                              )}
                              maxRating={5}
                              disabled
                            />
                            <p>Google Rating</p>
                            <Rating
                              icon="star"
                              defaultRating={Math.floor(restaurant.yelpRating)}
                              maxRating={5}
                              disabled
                            />
                            <p>Yelp Rating</p>
                            <Rating
                              icon="star"
                              defaultRating={Math.floor(
                                restaurant.radiusRating
                              )}
                              maxRating={5}
                              disabled
                            />
                            <p>Radius Rating</p>
                          </Item.Description>
                        </Item.Content>
                      </Item>
                    )
                  })
                ) : (
                  <Item>
                    <Item.Header as="a">Loading Suggestions</Item.Header>
                    <Item.Description>Suggestions Loading</Item.Description>
                  </Item>
                )}
              </Item.Group>
            </Box>
          </Grid.Column>
        </Grid>
      </Container>
    )
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
    suggestedFetching: state.restaurant.suggestedFetching
  }
}

const mapDispatchToProps = dispatch => ({
  fetchSuggestedRestaurantsFromServer: id =>
    dispatch(fetchSuggestedRestaurantsFromServer(id))
})

export default connect(mapState, mapDispatchToProps)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
  // imgUrl: PropTypes.string
}
