import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.node.isRequired
}

const Header = ({ children }) => (
  <header className='c-header'>
    <h1 className='c-header__title'>
      {children}
    </h1>
  </header>
)

Header.propTypes = propTypes

export default Header
