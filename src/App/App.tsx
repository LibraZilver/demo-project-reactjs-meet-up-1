import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from 'store/configureStore'
import './App.scss'
import Routes from './Routes'

const App: FC = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="App">
        <Routes />
      </div>
    </ConnectedRouter>
  </Provider>
)
export default App
