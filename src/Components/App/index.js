import React, { Component } from 'react'
import './App.css'

// redux store
import { Provider } from 'react-redux'
import configureStore from '../../Store/configureStore'

//
import SearchComponent from '../searchbox'
import ResultsComponent from '../results'
import ErrorBoundary from '../ErrorBoundary'

// create store
const store = configureStore()

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <React.Fragment>
          <SearchComponent />
          <ErrorBoundary>
            <ResultsComponent />
          </ErrorBoundary>
        </React.Fragment>
      </Provider>
    )
  }
}

export default App
