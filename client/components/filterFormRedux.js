import React from 'react'
import {reduxForm} from 'redux-form'
import {Rating} from 'semantic-ui-react'

const preventDefault = event => {
  event.preventDefault()
}


let FilterForm = props => {
  return (
    <div>
      <form
        onSubmit={props.valid ? props.handleSubmit : preventDefault}
        className="ui form"
      >
        <div className="ui one column stackable center aligned page grid">
          <label>
            Cuisine:{' '}
            <select name="cuisine" onChange={props.handleSelectCuisine}>
              <option value="">---</option>
              <option value="italian">Italian</option>
              <option value="mexican">Mexican</option>
              <option value="chinese">Chinese</option>
              <option value="burgers">Burgers</option>
            </select>
          </label>
          <label>
            Price:{' '}
            <select name="price" onChange={props.handleSelectPrice}>
              <option value="">---</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
            </select>
          </label>
          <label>
            Rating:
            <Rating
              icon="star"
              maxRating={5}
              onRate={props.handleSelectRating}
            />
          </label>
          <label>
            Distance:{' '}
            <select name="distance" onChange={props.handleSelectDistance}>
              <option value="">---</option>
              <option value="804">Less than 0.5 miles</option>
              <option value="1609">Less than 1 mile</option>
              <option value="8046">Less than 5 miles</option>
              <option value="32186">Less than 20 miles</option>
            </select>
          </label>
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className="ui one column stackable center aligned page grid">
          <br />
          <button className="ui green basic small button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

const FilterFormRedux = reduxForm({
  form: 'filter'
})(FilterForm)

export default FilterFormRedux
