import { AnyAction } from 'redux'
import { createAction } from 'redux-actions'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const loginRequest = createAction(LOGIN_REQUEST)
export const loginSuccess = createAction(LOGIN_SUCCESS)
export const loginFailure = createAction<string>(LOGIN_FAILURE)

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'
export const logoutRequest = createAction(LOGOUT_REQUEST)
export const logoutSuccess = createAction(LOGOUT_SUCCESS)
export const logoutFailure = createAction<string>(LOGOUT_FAILURE)

const authenticationInitState = {
  isAuthenticated: false,
  token: '',
}

export const authenticationReducer = (state = authenticationInitState, action: AnyAction) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        isAuthenticated: true,
        token: action.payload.token,
      }
    case LOGIN_FAILURE:
    case LOGOUT_SUCCESS:
      return authenticationInitState
    default:
      return state
  }
}
