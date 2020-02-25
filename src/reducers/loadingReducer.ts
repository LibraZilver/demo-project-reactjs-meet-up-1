import { AnyAction } from 'redux'
import { createAction } from 'redux-actions'

export const SHOW_LOADING = 'SHOW_LOADING'
export const showLoading = createAction(SHOW_LOADING)

export const HIDE_LOADING = 'HIDE_LOADING'
export const hideLoading = createAction(HIDE_LOADING)

const loadingInitState = {
  isLoading: false,
}

export const loadingReducer = (state = loadingInitState, action: AnyAction) => {
  switch (action.type) {
    case SHOW_LOADING: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case HIDE_LOADING: {
      return {
        ...state,
        isLoading: false,
      }
    }
    default:
      return state
  }
}
