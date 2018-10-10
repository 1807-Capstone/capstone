import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from '../store';
import {Menu, Image, Icon, Button, Divider, Sidebar} from 'semantic-ui-react';
import styled from 'styled-components';

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
