import React, {Component} from 'react';
import {
  Grid,
  Header,
  Container,
  Item,
  Pagination,
  Rating
} from 'semantic-ui-react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {gotOneRestaurant} from '../store/restaurant';
import {connect} from 'react-redux';

const Box = styled.div`
  padding-right: 10px;
  padding-left: 10px;
  height: 90vh;
`;

class FilteredRestaurantList extends Component {
  handleRestaurantClick = value => {
    const selectedRestaurant = this.props.restaurants.filter(
      restaurant => restaurant.name === value
    );
    this.props.gotOneRestaurant(selectedRestaurant[0]);
  };

  render() {
    return (
      <Container>
        <Grid centered stackable>
          <Grid.Column width={15} centered="true">
            <Box>
              <Header as="h4">Restaurants</Header>
              <Item.Group divided>
                <div className="two column doubling ui grid">
                  {this.props.restaurants.map(restaurant => {
                    return (
                      <Item key={restaurant.id} className="column">
                        <Item.Image
                          size="small"
                          src={restaurant.yelpResults.image_url}
                        />
                        <Item.Content>
                          <Item.Header
                            as={Link}
                            to={`/restaurants/${restaurant.name}`}
                            onClick={() =>
                              this.handleRestaurantClick(restaurant.name)
                            }
                          >
                            {restaurant.name}
                          </Item.Header>

                          <Item.Description>
                            <p>
                              Radius rating:{' '}
                              <Rating
                                icon="star"
                                defaultRating={Math.floor(
                                  restaurant.radiusRating
                                )}
                                maxRating={5}
                                disabled
                              />
                            </p>
                            <p>
                              Yelp rating:{' '}
                              <Rating
                                icon="star"
                                defaultRating={Math.floor(
                                  restaurant.yelpResults.rating
                                )}
                                maxRating={5}
                                disabled
                              />
                            </p>
                            <p>
                              Google rating:{' '}
                              <Rating
                                icon="star"
                                defaultRating={Math.floor(restaurant.rating)}
                                maxRating={5}
                                disabled
                              />
                            </p>
                          </Item.Description>
                        </Item.Content>
                      </Item>
                    );
                  })}
                </div>
              </Item.Group>
              <div className="ui one column stackable center aligned page grid">
                <Pagination
                  boundaryRange={1}
                  siblingRange={1}
                  onPageChange={this.props.handleSelect}
                  size="mini"
                  totalPages={this.props.numPages}
                />
              </div>
            </Box>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  gotOneRestaurant: restaurant => dispatch(gotOneRestaurant(restaurant))
});

export default connect(null, mapDispatchToProps)(FilteredRestaurantList);
