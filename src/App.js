import React, { Component } from 'react'

import Header from 'components/layouts/Header'
import Nav from 'components/layouts/Nav'
import NavItem from 'components/layouts/NavItem'
import Routes from 'Routes'

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <section className='main'>
        <Header>
          React Starter Kit
        </Header>
        <Nav>
          <NavItem exact to='/'>Home</NavItem>
          <NavItem to='/test'>Test page</NavItem>
        </Nav>
        <section className='page'>
          <Routes />
        </section>
      </section>
    )
  }
}

export default App
