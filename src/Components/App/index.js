import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import './App.css'

// redux store
import { Provider } from 'react-redux'
import configureStore from 'Store/configureStore'

import Home from 'Components/Home'
import Search from 'Components/Search'

// create store
const store = configureStore()

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/search' component={Search} />
          </Switch>
        </Provider>
      </BrowserRouter>
    )
  }
}

export default App
