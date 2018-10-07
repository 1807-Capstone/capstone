import React from 'react';
import {connect} from 'react-redux';
import {
  Grid,
  Header,
  Container,
  Item,
  Rating,
  Pagination
} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {gotOneRestaurant} from '../store/restaurant';

const mapStateToProps = state => ({
  userRestaurants: state.restaurant.visited
});

const mapDispatchToProps = dispatch => ({
  gotOneRestaurant: restaurant => dispatch(gotOneRestaurant(restaurant))
});

class UserRestaurants extends React.Component {
  constructor() {
    super();
    this.state = {
      perPage: 3,
      currentPage: [],
      numPages: 0
    };
  }

  componentDidMount() {
    const perPage = this.state.perPage;
    const firstPage = this.props.userRestaurants.slice(0, perPage);
    const numPages = Math.ceil(this.props.userRestaurants.length / perPage);
    console.log('currentPage', firstPage);
    this.setState({
      currentPage: firstPage,
      numPages: numPages
    });
  }

  handleSelectPage = (evt, {activePage}) => {
    console.log('here');
    const startIndex = (activePage - 1) * this.state.perPage;
    const endIndex = startIndex + this.state.perPage;
    const pageRestaurants = this.props.userRestaurants.slice(
      startIndex,
      endIndex
    );
    this.setState({currentPage: pageRestaurants});
  };

  handleRestaurantClick = value => {
    const selectedRestaurant = this.props.userRestaurants.filter(
      restaurant => restaurant.name === value
    );
    console.log('selected', selectedRestaurant);
    this.props.gotOneRestaurant(selectedRestaurant[0]);
  };

  render() {
    return (
      <Container>
        <Grid centered stackable>
          <Grid.Column width={15} centered="true">
            <Header as="h4">Restaurants You've Visited</Header>
            <Item.Group divided>
              <div className="two column doubling ui grid">
                {this.state.currentPage.map(restaurant => {
                  {
                    /* {this.props.userRestaurants.map(restaurant => { */
                  }
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
                          value={restaurant.name}
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
                onPageChange={this.handleSelectPage}
                size="mini"
                totalPages={this.state.numPages}
              />
            </div>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserRestaurants);
