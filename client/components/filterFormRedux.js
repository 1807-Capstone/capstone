import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {Rating, Grid, Divider, Button, Icon} from 'semantic-ui-react';
import styled from 'styled-components';
import {StyledBtn} from './styledComponents';

const preventDefault = event => {
  event.preventDefault();
};

class FilterForm extends Component {
  state = {visible: true};
  handleFilterClick() {
    this.setState({visible: !this.state.visible});
  }
  render() {
    return (
      <div>
        {this.state.visible ? (
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
            <br />
            <Button inverted onClick={this.handleFilterClick.bind(this)} fluid>
              <Icon name="angle double up" color="black" />
            </Button>
          </form>
        ) : (
          <StyledBtn onClick={this.handleFilterClick.bind(this)}>
            SHOW FILTERS
            <br />
            <Icon name="angle double down" />
            <br />
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
