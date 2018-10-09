import React, {Component, Fragment} from 'react';
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
  height: 4vh;
  position: absolute;
  padding-top: 5px;
  text-align: center;
`;
const Box = styled.div`
  width: 100vw;
  height: 6vh;
`;

const Block = styled.div`
  height: 55vh;
  background: white;
`;

class MobileNavbar extends Component {
  render() {
    return (
      <Fragment>
        <Menu fixed="bottom" icon="labeled" size="mini" widths={4}>
          <Menu.Item as={Link} to="/home" onClick={this.handleSidebarHide}>
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item as={Link} to="/map" onClick={this.handleSidebarHide}>
            <Icon name="map" />
            Map
          </Menu.Item>
          <Menu.Item as={Link} to="/filter" onClick={this.handleSidebarHide}>
            <Icon name="utensils" />
            Filter
          </Menu.Item>
          <Menu.Item as={Link} to="/account" onClick={this.handleSidebarHide}>
            <Icon name="user" />
            Account
          </Menu.Item>
          <Block />
        </Menu>
      </Fragment>
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
