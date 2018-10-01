import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import styled from 'styled-components'
import {Form, Divider, Grid, Image} from 'semantic-ui-react'

/**
 * COMPONENT
 */

const Input = styled.input`
  height: 6vh;
  border-radius: 10px;
  width: 25vw !important;
  position: relative;
  margin: 5px !important;
  outline: none;
`

const Button = styled.button`
  position: relative;
  margin: 10px;
`

const Wrapper = styled.div`
  height: 100vh;
  background: pink;
`

const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    // <Wrapper>
    <Grid textAlign="center" divided="vertically">
      <Grid.Row>
        <Grid.Column width={11}>
          <Image src="img/restaurantEDIT2.jpg" />
        </Grid.Column>
        <Grid.Column width={5} verticalAlign="middle" textAlign="left">
          <h2>{displayName}</h2>
          <Form onSubmit={handleSubmit} name={name}>
            <Input name="email" type="text" placeholder="Email" />
            <Divider />
            <Input name="password" type="password" placeholder="Password" />
            <Button type="submit">{displayName}</Button>
            {error && error.response && <div> {error.response.data} </div>}
          </Form>
          <a href="/auth/google">{displayName} with Google</a>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    // </Wrapper>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
