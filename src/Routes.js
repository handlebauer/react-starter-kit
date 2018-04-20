import React from 'react'

import {
  Switch,
  Route
} from 'react-router-dom'

import Home from 'components/Home'
import Test from 'components/Test'

const Routes = () => (
  <Switch>
    <Route
      exact
      path='/'
      render={routerProps => (
        <Home
          {...routerProps} />
      )} />
    <Route
      exact
      path='/test'
      render={routerProps => (
        <Test
          {...routerProps} />
      )} />
  </Switch>
)

export default Routes
