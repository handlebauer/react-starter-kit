import React from 'react'
import PropTypes from 'prop-types'

import { NavLink, withRouter } from 'react-router-dom'

const propTypes = {
  children: PropTypes.node.isRequired,

  /**
   * Path to render (must lead with forward slash)
   */
  to: PropTypes.string.isRequired
}

const NavItem = ({ children, to, staticContext, ...props }) => (
  <NavLink
    {...props}
    className='c-nav__item'
    to={to}>
    {children}
  </NavLink>
)

NavItem.propTypes = propTypes

export default withRouter(NavItem)
