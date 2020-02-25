import { combineReducers } from 'redux'
import { History } from 'history'
import { RouterState, connectRouter } from 'connected-react-router'
import { loadingReducer } from './loadingReducer'
import { authenticationReducer } from 'features/authentication/reducers'
import { faceRegisterReducer } from 'features/faceRegister/reducers'

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    authenticationReducer,
    loadingReducer,
    faceRegisterReducer,
  })

export interface State {
  router: RouterState
}

export default createRootReducer
