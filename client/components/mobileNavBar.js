import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Menu, Image, Icon, Button, Segment, Sidebar} from 'semantic-ui-react'
import styled from 'styled-components'

const Header = styled.h1`
  font-family: 'Proza Libre', sans-serif;
  font-size: 30px;
  font-weight: 100;
  letter-spacing: 5px;
  margin-top: 25px;
  width: 100vw;
  position: fixed;
  left: 90px;
  top: 7px;
  color: #35b3bf;
`
const Box = styled.div`
  width: 100vw;
  height: 7vh;
  padding: 5px;
  border-bottom: 1px solid #801a15;
`

class MobileNavbar extends Component {
  state = {
    isVisible: false
  }
  handleButtonClick = () => this.setState({isVisible: !this.state.isVisible})

  handleSidebarHide = () => this.setState({isVisible: false})

  render() {
    const {handleClick, isLoggedIn} = this.props
    const {isVisible} = this.state

    return (
      <div>
        <Box>
          <Header>RADIUS</Header>
          <Button
            basic
            color="black"
            floated="left"
            onClick={this.handleButtonClick}
          >
            <Icon name="bars" />
          </Button>
        </Box>
        <Sidebar
          animation="overlay"
          as={Menu}
          vertical
          onHide={this.handleSidebarHide}
          visible={isVisible}
          width="thin"
          icon="labeled"
        >
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
        </Sidebar>
      </div>
    )
  }
}
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

export default connect(mapState, mapDispatch)(MobileNavbar)

MobileNavbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
