import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Menu, Image, Icon, Responsive} from 'semantic-ui-react'
import styled from 'styled-components'
import DesktopNavbar from './desktopNavBar'
import MobileNavBar from './mobileNavBar'

const Navbar = () => {
  return (
    <div>
      <Responsive minWidth={1200}>
        <DesktopNavbar />
      </Responsive>
      <Responsive maxWidth={1199}>
        <MobileNavBar />
      </Responsive>
    </div>
  )
}

export default Navbar

/**
 * PROP TYPES
 */
