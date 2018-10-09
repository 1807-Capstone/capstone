import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from '../store';
import {Menu, Image, Icon, Responsive} from 'semantic-ui-react';
import styled from 'styled-components';
import DesktopNavbar from './desktopNavBar';
import MobileNavBar from './mobileNavBar';

const Header = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 5px;
  width: 100vw;
  height: 4vh;

  padding-top: 5px;
  text-align: center;
`;
const Box = styled.div`
  width: 100vw;
  height: 6vh;
`;

const Navbar = () => {
  return (
    <Fragment>
      <Responsive maxWidth={1199}>
        <Box>
          <Header>RADIUS</Header>
        </Box>
      </Responsive>
      <Responsive minWidth={1200}>
        <DesktopNavbar />
      </Responsive>
      <Responsive maxWidth={1199}>
        <MobileNavBar />
      </Responsive>
    </Fragment>
  );
};

export default Navbar;

/**
 * PROP TYPES
 */
