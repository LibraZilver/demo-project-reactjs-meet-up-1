import { createStore, compose, applyMiddleware } from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
// 'routerMiddleware': the new way of storing route changes with redux middleware since rrV4.
import createRootReducer from '../reducers'

export const history = createBrowserHistory()
const rootReducer = createRootReducer(history)

const persistConfig = {
  key: 'persistReducer',
  storage,
  whitelist: ['authenticationReducer'],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

function configureStoreProd(initialState?: any) {
  const middlewares = [
    // Add other middleware on this line...
    routerMiddleware(history),

    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunk,
  ]

  return createStore(persistedReducer, initialState, compose(applyMiddleware(...middlewares)))
}

function configureStoreDev(initialState?: any) {
  const middlewares = [
    // Add other middleware on this line...
    routerMiddleware(history),

    // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
    reduxImmutableStateInvariant(),

    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunk,
  ]

  const composeEnhancers = composeWithDevTools(applyMiddleware(...middlewares))
  const store = createStore(persistedReducer, initialState, composeEnhancers)

  return store
}

const store = process.env.NODE_ENV === 'production' ? configureStoreProd() : configureStoreDev()
export const persistor = persistStore(store)
export default store
