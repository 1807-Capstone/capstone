import React from 'react'
import {Field, reduxForm} from 'redux-form'

const renderField = ({input, type, meta: {error, touched}}) => (
  <div>
    <div>
      <div>
        <input {...input} type={type} />
      </div>
      <div>{touched && <span className="red">{error}</span>}</div>
    </div>
  </div>
)

const preventDefault = event => {
  event.preventDefault()
}

const notEmpty = value => (value ? undefined : 'Required field')

const minimumZero = price =>
  price && price < 0 ? `Must be at least 0` : undefined

let FilterForm = props => {
  return (
    <div>
      <form
        onSubmit={props.valid ? props.handleSubmit : preventDefault}
        className="ui form"
      >
        <br />
        <br />
        <div className="ui one column stackable center aligned page grid">
          <div className="field">
            Cuisine:{' '}
            <Field name="cuisine" component="select">
              <option>-</option>
              <option>Italian</option>
              <option>Mexican</option>
              <option>Chinese</option>
              <option>Burgers</option>
            </Field>
          </div>
          <div className="field">
            Price:{' '}
            <Field name="Price" component="select">
              <option>-</option>
              <option value={1}>$</option>
              <option value={2}>$$</option>
              <option value={3}>$$$</option>
              <option value={4}>$$$$</option>
            </Field>
          </div>
          <br />
          <div className="field">
            Rating:{' '}
            <Field
              component={renderField}
              type="text"
              name="quantity"
              validate={minimumZero}
            />
          </div>
          <br />
          <div className="field">
            Distance:{' '}
            <Field name="Distance" component="select">
              <option>-</option>
              <option value={1}>1</option>
              <option value={5}>5</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </Field>
          </div>
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
