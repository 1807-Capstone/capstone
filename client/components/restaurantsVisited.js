import React from 'react';
import {connect} from 'react-redux';
import {Grid, Header, Item, Pagination, Responsive} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {gotOneRestaurant} from '../store/restaurant';
import ReactStars from 'react-stars';
import {StyledName} from './styledComponents';

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
    this.setState({
      currentPage: firstPage,
      numPages: numPages
    });
  }

  handleSelectPage = (evt, {activePage}) => {
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
      <main>
        <Responsive minWidth={930}>
          <Grid centered stackable>
            <Grid.Column width={15} centered="true">
              <div className="one column stackable center aligned ui grid">
                <br />
                <Header as="h2">Restaurants You've Visited</Header>
                <br />
              </div>
              <Item.Group divided>
                <div className="three column ui grid">
                  {this.state.currentPage.map(restaurant => {
                    return (
                      <Item key={restaurant.id} className="column">
                        <Item.Image
                          size="small"
                          src={restaurant.yelpResults.image_url}
                          as={Link}
                          to={`restaurants/${restaurant.name}`}
                          onClick={() =>
                            this.handleRestaurantClick(restaurant.name)
                          }
                        />
                        <Item.Content className="ui column">
                          <Item.Header
                            as={Link}
                            to={`/restaurants/${restaurant.name}`}
                            value={restaurant.name}
                            onClick={() =>
                              this.handleRestaurantClick(restaurant.name)
                            }
                          >
                            <StyledName className="ui column">
                              {restaurant.name}
                            </StyledName>
                          </Item.Header>
                          <Item.Description>
                            <div>
                              Radius rating:{' '}
                              <ReactStars
                                count={5}
                                value={restaurant.radiusRating}
                                half={true}
                                edit={false}
                                color2="#35b3bf"
                              />
                            </div>
                            <div>
                              Yelp rating:{' '}
                              <ReactStars
                                count={5}
                                value={restaurant.yelpResults.rating}
                                half={true}
                                edit={false}
                                color2="#C50A00"
                              />
                            </div>
                            <div>
                              Google rating:{' '}
                              <ReactStars
                                count={5}
                                value={restaurant.rating}
                                half={true}
                                edit={false}
                                color2="#C58600"
                              />
                            </div>
                          </Item.Description>
                        </Item.Content>
                      </Item>
                    );
                  })}
                </div>
              </Item.Group>
              <div className="ui one column stackable center aligned page grid">
                <Pagination
                  defaultActivePage={1}
                  firstItem={null}
                  lastItem={null}
                  pointing
                  secondary
                  totalPages={this.state.numPages}
                  onPageChange={this.handleSelectPage}
                />
              </div>
            </Grid.Column>
          </Grid>
        </Responsive>

        <Responsive maxWidth={929}>
          <Grid centered stackable>
            <Grid.Column width={15} centered="true">
              <br />
              <div className="one column stackable center aligned ui grid">
                <br />
                <Header as="h2">Restaurants You've Visited</Header>
              </div>
              <div className="ui center aligned grid">
                <Item.Group divided>
                  {this.state.currentPage.map(restaurant => {
                    return (
                      <Item key={restaurant.id}>
                        <Item.Image
                          size="small"
                          src={restaurant.yelpResults.image_url}
                          as={Link}
                          to={`restaurants/${restaurant.name}`}
                          onClick={() =>
                            this.handleRestaurantClick(restaurant.name)
                          }
                        />
                        <Item.Content className="ui center aligned grid">
                          <Item.Header
                            as={Link}
                            to={`/restaurants/${restaurant.name}`}
                            value={restaurant.name}
                            onClick={() =>
                              this.handleRestaurantClick(restaurant.name)
                            }
                          >
                            <StyledName className="ui center aligned grid">
                              {restaurant.name}
                            </StyledName>
                          </Item.Header>
                          <Item.Description>
                            <div>
                              Radius rating:{' '}
                              <ReactStars
                                count={5}
                                value={restaurant.radiusRating}
                                half={true}
                                edit={false}
                                color2="#35b3bf"
                              />
                            </div>
                            <div>
                              Yelp rating:{' '}
                              <ReactStars
                                count={5}
                                value={restaurant.yelpResults.rating}
                                half={true}
                                edit={false}
                                color2="#C50A00"
                              />
                            </div>
                            <div>
                              Google rating:{' '}
                              <ReactStars
                                count={5}
                                value={restaurant.rating}
                                half={true}
                                edit={false}
                                color2="#C58600"
                              />
                            </div>
                          </Item.Description>
                        </Item.Content>
                        <br />
                      </Item>
                    );
                  })}
                </Item.Group>
              </div>
              <div className="ui one column stackable center aligned page grid">
                <Pagination
                  defaultActivePage={1}
                  firstItem={null}
                  lastItem={null}
                  pointing
                  secondary
                  totalPages={this.state.numPages}
                  onPageChange={this.handleSelectPage}
                />
              </div>
            </Grid.Column>
          </Grid>
        </Responsive>
      </main>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserRestaurants);
