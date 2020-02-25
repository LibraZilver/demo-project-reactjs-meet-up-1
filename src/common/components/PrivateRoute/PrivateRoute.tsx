import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect, RouteProps } from 'react-router-dom'

interface IPrivateRouteProps extends RouteProps {
  component: any
}

const PrivateRoute = ({ component: Component, ...rest }: IPrivateRouteProps) => {
  const isAuthenticated = useSelector((state: any) => state.authenticationReducer.isAuthenticated)
  return (
    <Route
      {...rest}
      render={props => {
        return isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/admin/login', state: { from: props.location } }} />
        )
      }}
    />
  )
}
export default PrivateRoute
