import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {auth} from '../store';
import styled from 'styled-components';
import {Form, Divider, Grid, Image, Responsive} from 'semantic-ui-react';
import {
  MobileDiv3,
  MobileDiv4,
  Input,
  Button,
  CompDiv1,
  CompDiv2,
  LoginDiv
} from './styledComponents';

/**
 * COMPONENT
 */

const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props;

  return (
    <div>
      <Responsive minWidth={930}>
        <Grid textAlign="center">
          <CompDiv1>
            <Image src="img/logo_transparent.png" size="medium" centered />
          </CompDiv1>
          <CompDiv2>
            <Form onSubmit={handleSubmit} name={name}>
              <Input name="email" type="text" placeholder="Email" />
              <Divider />
              <Input name="password" type="password" placeholder="Password" />
              <Button type="submit">{displayName}</Button>
              {error && error.response && <div> {error.response.data} </div>}
            </Form>
            <a href="/auth/google">{displayName} with Google</a>
          </CompDiv2>
        </Grid>
      </Responsive>
      <Responsive maxWidth={929}>
        <MobileDiv3>
          <Image src="img/logo_transparent.png" size="medium" centered />
        </MobileDiv3>
        <MobileDiv4 />
        <LoginDiv>
          <Form onSubmit={handleSubmit} name={name}>
            <Input name="email" type="text" placeholder="Email" />
            <Divider />
            <br />
            <Input name="password" type="password" placeholder="Password" />
            <br />
            <Button type="submit">{displayName}</Button>
            {error && error.response && <div> {error.response.data} </div>}
          </Form>
          <a href="/auth/google">{displayName} with Google</a>
        </LoginDiv>
      </Responsive>
    </div>
  );
};

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
  };
};

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  };
};

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(auth(email, password, formName));
    }
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
};
