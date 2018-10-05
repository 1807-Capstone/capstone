import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {Rating, Grid, Divider} from 'semantic-ui-react';
import styled from 'styled-components';

const preventDefault = event => {
  event.preventDefault();
};

const Box = styled.div`
  height: 50vh;
  padding-top: 5px;
  width: 90vw;
  margin-bottom: 5px;
`;

const StyledBtn = styled.button`
  height: 5vh;
  width: 90vw;
  text-align: center;
  position: relative;
`;

class FilterForm extends Component {
  state = {visible: true};
  handleFilterClick() {
    this.setState({visible: !this.state.visible});
  }
  render() {
    return (
      <div>
        {this.state.visible ? (
          <Box>
            <form
              onSubmit={
                this.props.valid ? this.props.handleSubmit : preventDefault
              }
              className="ui form"
            >
              <Grid stackable centered>
                <Grid.Column
                  computer={3}
                  style={{margin: '0rem 1rem !important'}}
                >
                  <label>
                    CUISINE:<select
                      name="cuisine"
                      onChange={this.props.handleSelectCuisine}
                    >
                      <option value="">---</option>
                      <option value="italian">Italian</option>
                      <option value="mexican">Mexican</option>
                      <option value="chinese">Chinese</option>
                      <option value="burgers">Burgers</option>
                    </select>
                  </label>
                </Grid.Column>
                <Grid.Column computer={3}>
                  <label>
                    PRICE:<select
                      name="price"
                      onChange={this.props.handleSelectPrice}
                    >
                      <option value="">---</option>
                      <option value="1">$</option>
                      <option value="2">$$</option>
                      <option value="3">$$$</option>
                      <option value="4">$$$$</option>
                    </select>
                  </label>
                </Grid.Column>
                <Grid.Column computer={3}>
                  <label>
                    RATING:
                    <Rating
                      icon="star"
                      maxRating={5}
                      onRate={this.props.handleSelectRating}
                    />
                  </label>
                </Grid.Column>
                <Grid.Column computer={3}>
                  <label>
                    DISTANCE:{' '}
                    <select
                      name="distance"
                      onChange={this.props.handleSelectDistance}
                    >
                      <option value="">---</option>
                      <option value="804">Less than 0.5 miles</option>
                      <option value="1609">Less than 1 mile</option>
                      <option value="8046">Less than 5 miles</option>
                      <option value="32186">Less than 20 miles</option>
                    </select>
                  </label>
                </Grid.Column>
              </Grid>
              <div className="ui one column stackable center aligned page grid">
                <button className="ui black basic small button" type="submit">
                  SEARCH
                </button>
              </div>
            </form>
            <br />
            <StyledBtn onClick={this.handleFilterClick.bind(this)}>
              HIDE FILTERS
            </StyledBtn>
          </Box>
        ) : (
          <StyledBtn onClick={this.handleFilterClick.bind(this)}>
            SHOW FILTERS
          </StyledBtn>
        )}
      </div>
    );
  }
}
const FilterFormRedux = reduxForm({
  form: 'filter'
})(FilterForm);

export default FilterFormRedux;
