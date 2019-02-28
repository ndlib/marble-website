import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import ScrollToTop from 'react-router-scroll-top'

// redux store
import { Provider } from 'react-redux'
import configureStore from 'Store/configureStore'

// error reporting setup
import * as Sentry from '@sentry/browser'

import Page from './Page'
import Home from 'Components/Home'
import StaticPage from 'Components/StaticPage'
import Search from 'Components/Search'
import ManifestView from 'Components/ManifestView'
import Exhibitions from 'Components/Exhibitions'
import NotFound from 'Components/Shared/NotFound'
import {
  ABOUT_CONTEXT,
  HELP_CONTEXT,
  LEARN_CONTEXT,
} from 'Constants/pageContexts'
import {
  BROWSE_CONTEXT,
  COLLECTION_CONTEXT,
  ITEM_CONTEXT,
  VIEWER_CONTEXT,
  EXHIBITIONS_CONTEXT,
} from 'Constants/viewingContexts'
import 'Configurations/customizations.css'
import { SENTRY_DSN } from 'Configurations/apis.js'
import './style.css'
import './grid.css'

// setup error reporting
Sentry.init({
  dsn: SENTRY_DSN,
  environment: 'staging',
  debug: 'true',
})

// create store
const store = configureStore()

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Provider store={store}>
          <Page>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/search' component={Search} />
              <Route exact path={`/:pageType(${ABOUT_CONTEXT}|${HELP_CONTEXT}|${LEARN_CONTEXT})/:topic?`} component={StaticPage} />
              <Route exact path={`/:context(${BROWSE_CONTEXT})`} component={ManifestView} />
              <Route exact path={`/:context(${BROWSE_CONTEXT}|${COLLECTION_CONTEXT}|${ITEM_CONTEXT}|${VIEWER_CONTEXT})/:contextId`} component={ManifestView} />
              <Route exact path={`/:context(${EXHIBITIONS_CONTEXT})`} component={Exhibitions} />
              <Route component={NotFound} />
            </Switch>
          </Page>
        </Provider>
      </ScrollToTop>
    </BrowserRouter>
  )
}

export default App
