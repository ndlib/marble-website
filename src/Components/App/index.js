import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router'

// redux store
import { Provider } from 'react-redux'
import configureStore from 'Store/configureStore'

// error reporting setup
import * as Sentry from '@sentry/browser'

import Page from './Page'
import Home from 'Components/Home'
import About from 'Components/About'
import Help from 'Components/Help'
import Search from 'Components/Search'
import NotFound from 'Components/Shared/NotFound'

import 'Configurations/customizations.css'
import { SENTRY_DSN } from 'Configurations/apis.js'
import './style.css'

// setup error reporting
Sentry.init({
  dsn: SENTRY_DSN,
  environment: 'staging',
  debug: 'true',
})

// create store
const store = configureStore()

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Page>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/help/:topic?' component={Help} />
              <Route exact path='/search' component={Search} />
              <Route component={NotFound} />
            </Switch>
          </Page>
        </Provider>
      </BrowserRouter>
    )
  }
}

export default App
