import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.node.isRequired
}

const Nav = ({ children }) => (
  <nav className='c-nav'>
    {children}
  </nav>
)

Nav.propTypes = propTypes

export default Nav
