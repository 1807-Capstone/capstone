import React from 'react';
import {Grid, Header, Container, Item, Pagination} from 'semantic-ui-react';
import styled from 'styled-components';

const Box = styled.div`
  padding-right: 10px;
  padding-left: 10px;
  height: 90vh;
`;

const FilteredRestaurantList = props => {
  return (
    <Container>
      <Grid centered stackable>
        <Grid.Column width={15} centered="true">
          <Box>
            <Header as="h4">Restaurants</Header>
            <Item.Group divided>
              <div className="two column doubling ui grid">
                {props.restaurants.map(restaurant => {
                  return (
                    <Item key={restaurant.id} className="column">
                      <Item.Content>
                        <Item.Header as="a">{restaurant.name}</Item.Header>
                        <br />
                        <Item.Image size="small" src={restaurant.yelpImg} />
                        <Item.Description>
                          <p>Radius rating: {restaurant.radiusRating}</p>
                          <p>Yelp rating: {restaurant.yelpRating}</p>
                          <p>Google rating: {restaurant.googleRating}</p>
                        </Item.Description>
                      </Item.Content>
                      <br />
                      <br />
                    </Item>
                  );
                })}
              </div>
            </Item.Group>
            <div className="ui one column stackable center aligned page grid">
              <Pagination
                boundaryRange={1}
                siblingRange={1}
                onPageChange={props.handleSelect}
                size="mini"
                totalPages={props.numPages}
              />
            </div>
          </Box>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default FilteredRestaurantList;
