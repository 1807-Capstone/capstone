import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from '../store';
import {Menu, Image, Icon, Button, Divider, Sidebar} from 'semantic-ui-react';
import styled from 'styled-components';

const Header = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 5px;
  width: 100vw;
  height: 5vh;
  position: absolute;
  padding-top: 5px;
  text-align: center;
`;
const Box = styled.div`
  width: 100vw;
  height: 9vh;
  padding-top: 10px;
`;

class MobileNavbar extends Component {
  state = {
    isVisible: false
  };
  handleButtonClick = () => this.setState({isVisible: !this.state.isVisible});

  handleSidebarHide = () => this.setState({isVisible: false});

  render() {
    const {handleClick, isLoggedIn} = this.props;
    const {isVisible} = this.state;

    return (
      <div>
        <Box>
          <Header>RADIUS</Header>
          <Button
            basic
            inverted
            floated="left"
            onClick={this.handleButtonClick}
          >
            <Icon name="bars" color="black" size="large" />
          </Button>
          <Button basic inverted floated="right" as={Link} to="/filter">
            <Icon name="food" color="black" size="large" />
          </Button>
        </Box>
        <Sidebar
          animation="overlay"
          as={Menu}
          vertical
          onHide={this.handleSidebarHide}
          visible={isVisible}
          width="thin"
        >
          {/* <ExitButton onClick={this.handleSidebarHide}>x</ExitButton> */}
          <Menu.Item>
            <Icon name="x" onClick={this.handleSidebarHide} />
            <Divider hidden />
          </Menu.Item>
          <Menu.Item as={Link} to="/home">
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item as={Link} to="/map">
            <Icon name="map" />
            Map
          </Menu.Item>
          <Menu.Item as={Link} to="/filter">
            <Icon name="utensils" />
            Filter
          </Menu.Item>
          <Menu.Item as={Link} to="/account">
            <Icon name="user" />
            Account
          </Menu.Item>
          <Menu.Item href="#" onClick={handleClick}>
            <Icon name="log out" />
            Logout
          </Menu.Item>
        </Sidebar>
      </div>
    );
  }
}
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
    }
  };
};

export default connect(mapState, mapDispatch)(MobileNavbar);

MobileNavbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
