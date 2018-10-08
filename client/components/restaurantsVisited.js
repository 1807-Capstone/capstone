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
import ReactStars from 'react-stars';

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
                            <ReactStars
                              count={5}
                              value={restaurant.radiusRating}
                              half={true}
                              color2="#35b3bf"
                            />
                          </p>
                          <p>
                            Yelp rating:{' '}
                            <ReactStars
                              count={5}
                              value={restaurant.yelpResults.rating}
                              half={true}
                              color2="#C50A00"
                            />
                          </p>
                          <p>
                            Google rating:{' '}
                            <ReactStars
                              count={5}
                              value={restaurant.rating}
                              half={true}
                              color2="#C58600"
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
