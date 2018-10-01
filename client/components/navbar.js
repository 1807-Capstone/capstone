import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Menu, Image, Icon} from 'semantic-ui-react'
import styled from 'styled-components'

const Box = styled.div`
  display: inline-block;
  height: 14vh;
  padding-left: 10px;
  padding-right: 30px;
  position: relative;
  border-bottom: 2px solid #801a15;
  margin-bottom: 10px;
  width: 100vw;
  text-align: center;
`
const Header = styled.h1`
  font-family: 'Proza Libre', sans-serif;
  font-size: 40px;
  font-weight: 100;
  letter-spacing: 10px;
  text-align: center;
  margin-top: 25px;
  width: 100vw;
  text-align: center;
  position: fixed;
`

const Navbar = ({handleClick, isLoggedIn}) => (
  <Box>
    <Menu secondary size="mini">
      <Menu.Item>
        <Image src="img/logo_transparent.png" size="tiny" />
      </Menu.Item>
      <Header>RADIUS</Header>
      {isLoggedIn ? (
        <Menu.Menu position="right">
          {/* The navbar will show these links after you log in */}
          <Menu.Item as={Link} to="/home">
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item as={Link} to="/map">
            <Icon name="map marker alternate" />
            Map
          </Menu.Item>
          <Menu.Item>
            <Icon name="utensils" />
            Filter
          </Menu.Item>
          <Menu.Item>
            <Icon name="user" />
            Account
          </Menu.Item>
          <Menu.Item href="#" onClick={handleClick}>
            <Icon name="log out" />
            Logout
          </Menu.Item>
        </Menu.Menu>
      ) : (
        <Menu.Menu position="right">
          {/* The navbar will show these links before you log in */}
          <Menu.Item as={Link} to="/login">
            <Icon name="user" />
            Login
          </Menu.Item>
          <Menu.Item as={Link} to="/signup">
            <Icon name="add user" />
            Sign Up
          </Menu.Item>
        </Menu.Menu>
      )}
    </Menu>
  </Box>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
